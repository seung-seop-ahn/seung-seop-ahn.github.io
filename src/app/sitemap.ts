import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // {
    //     url: `${baseUrl}/about`,
    //     lastModified: new Date(),
    //     changeFrequency: 'monthly',
    //     priority: 0.8,
    // },
    // {
    //     url: `${baseUrl}/blog`,
    //     lastModified: new Date(),
    //     changeFrequency: 'weekly',
    //     priority: 0.5,
    // },
  ]
}
