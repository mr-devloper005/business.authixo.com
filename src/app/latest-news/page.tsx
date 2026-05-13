import { TaskListPage } from '@/components/tasks/task-list-page'
import { buildTaskMetadata } from '@/lib/seo'

export const revalidate = 3
export const generateMetadata = () =>
  buildTaskMetadata('mediaDistribution', {
    path: '/latest-news',
    title: 'Latest News',
    description: 'Browse the newest press wires and newsroom updates.',
  })

export default function LatestNewsPage({
  searchParams,
}: {
  searchParams?: { category?: string; q?: string; date?: string }
}) {
  return (
    <TaskListPage
      task="mediaDistribution"
      category={searchParams?.category}
      searchQuery={searchParams?.q}
      dateFilter={searchParams?.date}
      basePath="/latest-news"
    />
  )
}
