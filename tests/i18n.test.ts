import { describe, expect, it } from 'vitest';
import { alternatePaths, getLangFromUrl, localizePath, withoutLocale } from '../src/lib/i18n';

describe('locale routing', () => {
  it('detects both language route families', () => {
    expect(getLangFromUrl(new URL('https://blackmythroute.cc/'))).toBe('en');
    expect(getLangFromUrl(new URL('https://blackmythroute.cc/zh-cn/'))).toBe('zh-cn');
    expect(getLangFromUrl(new URL('https://blackmythroute.cc/zh-cn/wukong/checklist/'))).toBe('zh-cn');
  });

  it('localizes an equivalent page without duplicating the prefix', () => {
    expect(localizePath('/wukong/bosses/tiger-vanguard/', 'zh-cn')).toBe('/zh-cn/wukong/bosses/tiger-vanguard/');
    expect(localizePath('/zh-cn/wukong/bosses/tiger-vanguard/', 'en')).toBe('/wukong/bosses/tiger-vanguard/');
    expect(localizePath('/zh-cn/', 'zh-cn')).toBe('/zh-cn/');
  });

  it('builds reciprocal alternate paths', () => {
    expect(withoutLocale('/zh-cn/privacy/')).toBe('/privacy/');
    expect(alternatePaths('/zh-cn/privacy/')).toEqual({ en: '/privacy/', zh: '/zh-cn/privacy/' });
  });
});

