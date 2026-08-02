import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '@/data/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort((a, b) =>
    a.data.publishedAt < b.data.publishedAt ? 1 : -1
  );
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: new Date(p.data.publishedAt),
      description: p.data.description,
      link: `/posts/${p.slug}`,
    })),
  });
}
