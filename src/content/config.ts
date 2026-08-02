import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    pairedCalculator: z
      .object({ slug: z.string(), label: z.string() })
      .optional(),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
