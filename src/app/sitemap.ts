import type { MetadataRoute } from 'next';
import { ecaData } from '@/data/eca';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://faysalshanto.vercel.app';
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/voice-of-business`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/bangladesh-next-economic-opportunity`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const ecaRoutes: MetadataRoute.Sitemap = ecaData.map((eca) => ({
    url: `${baseUrl}/eca/${eca.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...ecaRoutes];
}
