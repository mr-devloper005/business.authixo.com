export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Updates',
    route: '/news-releases',
    description: 'Recent posts and newsroom updates.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/news-releases',
} as const
