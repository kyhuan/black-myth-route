import type { APIRoute } from 'astro';
import { bosses } from '@/data/bosses';
import { builds } from '@/data/builds';
import { siteUrl } from '@/lib/i18n';

const staticPaths = ['/', '/wukong/checklist/', '/wukong/bosses/', '/wukong/builds/', '/about/', '/privacy/', '/disclaimer/'];
const contentPaths = [
  ...bosses.map((boss) => `/wukong/bosses/${boss.slug}/`),
  ...builds.map((build) => `/wukong/builds/${build.slug}/`)
];

export const GET: APIRoute = () => {
  const paths = [...staticPaths, ...contentPaths];
  const urls = paths.flatMap((path) => [path, path === '/' ? '/zh-cn/' : `/zh-cn${path}`]);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

