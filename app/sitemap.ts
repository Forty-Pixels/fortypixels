import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fortypixels.com'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/enterprise',
    '/portfolio',
  ]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // TODO: Add dynamic portfolio pages here if needed
  // const portfolioItems = await getPortfolioItems()
  // const dynamicRoutes = portfolioItems.map((item) => ({
  //   url: `${baseUrl}/portfolio/${item.id}`,
  //   lastModified: item.updatedAt,
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [...staticRoutes]
}
