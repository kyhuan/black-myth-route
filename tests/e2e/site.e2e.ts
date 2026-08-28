import { expect, test } from '@playwright/test';

test('switches to the equivalent Chinese route and remembers the choice', async ({ page }) => {
  await page.goto('/wukong/bosses/tiger-vanguard/');
  await page.locator('[data-language-switch]').click();
  await expect(page).toHaveURL(/\/zh-cn\/wukong\/bosses\/tiger-vanguard\/$/);
  await expect(page.locator('main .page-title')).toHaveText('虎先锋');
  expect(await page.evaluate(() => localStorage.getItem('bmr:locale'))).toBe('zh-cn');
});

test('persists tracker progress across reload and language switch', async ({ page }) => {
  await page.goto('/wukong/checklist/');
  const first = page.locator('.objective-check').first();
  await first.check();
  await page.reload();
  await expect(page.locator('.objective-check').first()).toBeChecked();
  await expect(page.locator('[data-progress-count]')).toContainText('1 / 36');
  await page.locator('[data-language-switch]').click();
  await expect(page).toHaveURL(/\/zh-cn\/wukong\/checklist\/$/);
  await expect(page.locator('.objective-check').first()).toBeChecked();
});

test('filters objectives and toggles spoiler safety', async ({ page }) => {
  await page.goto('/wukong/checklist/?chapter=4');
  await expect(page.locator('[data-chapter-filter]')).toHaveValue('4');
  await expect(page.locator('[data-objective]:visible')).toHaveCount(6);
  await page.locator('[data-status="missable"]').click();
  await expect(page.locator('[data-objective]:visible')).toHaveCount(2);
  await page.locator('[data-spoiler-toggle]').click();
  await expect(page.locator('[data-spoiler-toggle]')).toHaveAttribute('aria-pressed', 'false');
});

test('mobile layout has no horizontal overflow and menu opens', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/zh-cn/wukong/checklist/');
  const sizes = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth }));
  expect(sizes.scrollWidth).toBeLessThanOrEqual(sizes.width);
  await page.locator('.menu-toggle').click();
  await expect(page.locator('[data-nav-links]')).toHaveAttribute('data-open', 'true');
  await expect(page.locator('[data-language-switch]')).toBeVisible();
});

test('loads YouTube only after a click and keeps a direct fallback link', async ({ page }) => {
  await page.goto('/zh-cn/wukong/bosses/yellow-wind-sage/');
  const guide = page.locator('[data-video-guide]');
  await expect(guide).toContainText('先看懂，再上手');
  await expect(guide.locator('iframe')).toHaveCount(0);
  await expect(guide.getByRole('link', { name: /直接在 YouTube 观看/ })).toHaveAttribute('href', 'https://www.youtube.com/watch?v=tG9jPwODbG4');
  await guide.locator('[data-video-play]').click();
  await expect(guide.locator('iframe')).toHaveAttribute('src', /youtube\.com\/embed\/tG9jPwODbG4/);
  await expect(guide.locator('iframe')).toHaveAttribute('src', /origin=http%3A%2F%2F127\.0\.0\.1%3A4321/);
  await expect(guide.getByRole('link', { name: /完整实战/ })).toHaveAttribute('href', /t=410s/);
});

test('sitemap routes resolve and pages expose bilingual alternates', async ({ page, request }) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBe(true);
  const xml = await sitemap.text();
  const routes = [...xml.matchAll(/<loc>https:\/\/blackmythroute\.cc([^<]+)<\/loc>/g)].map((match) => match[1]);
  expect(routes.length).toBe(56);
  for (const route of routes) {
    const response = await request.get(route);
    expect(response.ok(), `Expected ${route} to resolve`).toBe(true);
  }

  await page.goto('/wukong/bosses/erlang-the-sacred-divinity/');
  await expect(page.locator('link[hreflang="en"]')).toHaveAttribute('href', 'https://blackmythroute.cc/wukong/bosses/erlang-the-sacred-divinity/');
  await expect(page.locator('link[hreflang="zh-CN"]')).toHaveAttribute('href', 'https://blackmythroute.cc/zh-cn/wukong/bosses/erlang-the-sacred-divinity/');
  await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute('href', 'https://blackmythroute.cc/wukong/bosses/erlang-the-sacred-divinity/');
});
