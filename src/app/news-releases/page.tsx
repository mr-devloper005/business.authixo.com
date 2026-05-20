import { TaskListPage } from '@/components/tasks/task-list-page'
import { buildTaskMetadata } from '@/lib/seo'

export const revalidate = 3
export const generateMetadata = () => buildTaskMetadata('mediaDistribution')

export default function UpdatesPage({
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
    />
  )
}
