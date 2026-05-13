"use client";

import { useMemo } from "react";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { normalizeCategory, isValidCategory } from "@/lib/categories";
import type { TaskKey } from "@/lib/site-config";
import type { SitePost } from "@/lib/site-connector";
import { getLocalPostsForTask } from "@/lib/local-posts";

type Props = {
  task: TaskKey;
  initialPosts: SitePost[];
  category?: string;
  searchQuery?: string;
  dateFilter?: string;
  variant?: "default" | "newsroom";
};

function applyDateFilter(publishedAt?: string, dateFilter?: string) {
  if (!dateFilter || dateFilter === "all") return true;
  if (!publishedAt) return false;
  const publishedTime = new Date(publishedAt).getTime();
  if (Number.isNaN(publishedTime)) return false;
  const now = Date.now();
  const diff = now - publishedTime;
  if (dateFilter === "today") return diff <= 24 * 60 * 60 * 1000;
  if (dateFilter === "7d") return diff <= 7 * 24 * 60 * 60 * 1000;
  if (dateFilter === "30d") return diff <= 30 * 24 * 60 * 60 * 1000;
  return true;
}

export function TaskListClient({ task, initialPosts, category, searchQuery, dateFilter, variant = "default" }: Props) {
  const localPosts = getLocalPostsForTask(task);

  const merged = useMemo(() => {
    const bySlug = new Set<string>();
    const combined: Array<SitePost & { localOnly?: boolean; task?: TaskKey }> = [];

    localPosts.forEach((post) => {
      if (post.slug) {
        bySlug.add(post.slug);
      }
      combined.push(post);
    });

    initialPosts.forEach((post) => {
      if (post.slug && bySlug.has(post.slug)) return;
      combined.push(post);
    });

    const normalizedCategory = category ? normalizeCategory(category) : "all";
    const byCategory =
      normalizedCategory === "all"
        ? combined.filter((post) => {
            const content = post.content && typeof post.content === "object" ? post.content : {};
            const value = typeof (content as any).category === "string" ? (content as any).category : "";
            return !value || isValidCategory(value);
          })
        : combined.filter((post) => {
            const content = post.content && typeof post.content === "object" ? post.content : {};
            const value =
              typeof (content as any).category === "string"
                ? normalizeCategory((content as any).category)
                : "";
            return value === normalizedCategory;
          });

    const normalizedQuery = (searchQuery || "").trim().toLowerCase();
    const byText = normalizedQuery
      ? byCategory.filter((post) => {
          const content = post.content && typeof post.content === "object" ? post.content : {};
          const description =
            typeof (content as any).description === "string" ? (content as any).description : "";
          const body = typeof (content as any).body === "string" ? (content as any).body : "";
          return `${post.title} ${post.summary || ""} ${description} ${body}`.toLowerCase().includes(normalizedQuery);
        })
      : byCategory;

    return byText.filter((post) => applyDateFilter(post.publishedAt, dateFilter));
  }, [category, dateFilter, initialPosts, localPosts, searchQuery]);

  if (!merged.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
        No posts yet for this section.
      </div>
    );
  }

  if (variant === "newsroom") {
    return (
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {merged.map((post) => {
          const localOnly = (post as any).localOnly;
          const href = localOnly ? `/local/${task}/${post.slug}` : buildPostUrl(task, post.slug);
          return (
            <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {merged.map((post) => {
        const localOnly = (post as any).localOnly;
        const href = localOnly
          ? `/local/${task}/${post.slug}`
          : buildPostUrl(task, post.slug);
        return <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />;
      })}
    </div>
  );
}
