export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Updates',
    route: '/public-relation',
    description: 'Recent posts and newsroom updates.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/public-relation',
} as const
