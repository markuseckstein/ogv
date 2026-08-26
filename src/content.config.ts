import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const aktuelles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/aktuelles' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    teaserImage: z.string().optional(),
    teaserPosition: z.string().optional(),
  }),
});

export const collections = { aktuelles };
