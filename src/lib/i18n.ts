export type Lang = 'en' | 'zh-cn';

export const siteName = 'Black Myth Route';
export const siteUrl = 'https://blackmythroute.cc';

export function getLangFromUrl(url: URL): Lang {
  return url.pathname === '/zh-cn' || url.pathname.startsWith('/zh-cn/') ? 'zh-cn' : 'en';
}

export function withoutLocale(pathname: string): string {
  if (pathname === '/zh-cn' || pathname === '/zh-cn/') return '/';
  return pathname.replace(/^\/zh-cn(?=\/)/, '') || '/';
}

export function localizePath(pathname: string, lang: Lang): string {
  const clean = withoutLocale(pathname);
  if (lang === 'en') return clean;
  return clean === '/' ? '/zh-cn/' : `/zh-cn${clean}`;
}

export function alternatePaths(pathname: string) {
  return {
    en: localizePath(pathname, 'en'),
    zh: localizePath(pathname, 'zh-cn')
  };
}

const dictionary = {
  en: {
    navTracker: '100% Tracker',
    navBosses: 'Boss Solver',
    navBuilds: 'Builds',
    navAbout: 'About',
    switchLanguage: '切换到中文',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    footerLine: 'Plan the route. Keep the wonder.',
    unofficial: 'Unofficial fan-made companion. Not affiliated with or endorsed by Game Science.',
    privacy: 'Privacy',
    disclaimer: 'Disclaimer',
    rights: 'All game names and related assets belong to their respective owners.'
  },
  'zh-cn': {
    navTracker: '全收集进度',
    navBosses: 'Boss 解法',
    navBuilds: '流派构筑',
    navAbout: '关于本站',
    switchLanguage: 'Switch to English',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    footerLine: '规划路线，不丢探索感。',
    unofficial: '非官方玩家工具，与游戏科学无隶属、授权或合作关系。',
    privacy: '隐私说明',
    disclaimer: '免责声明',
    rights: '游戏名称及相关资产归其各自权利人所有。'
  }
} as const;

export function t(lang: Lang) {
  return dictionary[lang];
}

