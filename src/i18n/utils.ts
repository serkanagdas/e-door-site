import ui from './ui.json';

export const languages = { tr: 'Türkçe', en: 'English' } as const;
export const defaultLang = 'tr' as const;

export type Lang = keyof typeof languages;

const trToEnSlugs: Record<string, string> = {
  '/': '/',
  '/hakkimizda': '/about',
  '/hizmetler': '/services',
  '/projeler': '/projects',
  '/iletisim': '/contact',
};

const enToTrSlugs: Record<string, string> = Object.fromEntries(
  Object.entries(trToEnSlugs).map(([tr, en]) => [en, tr])
);

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): any {
    const keys = key.split('.');
    let result: any = ui;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key;
    }
    if (result && typeof result === 'object' && !Array.isArray(result) && lang in result) {
      return result[lang];
    }
    return result;
  };
}

export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return path === '/' ? '/en/' : `/en${path}`;
}

export function getNavLinks(lang: Lang) {
  const map = {
    home: { tr: '/', en: '/en/' },
    about: { tr: '/hakkimizda', en: '/en/about' },
    services: { tr: '/hizmetler', en: '/en/services' },
    projects: { tr: '/projeler', en: '/en/projects' },
    contact: { tr: '/iletisim', en: '/en/contact' },
  } as const;
  const result: Record<string, string> = {};
  for (const key of Object.keys(map)) {
    result[key] = map[key as keyof typeof map][lang];
  }
  return result;
}

export function getCounterpartUrl(pathname: string): string {
  const isEn = pathname.startsWith('/en');
  const normalize = (p: string) => p.replace(/\/+$/, '') || '/';

  if (isEn) {
    const enPath = normalize(pathname.replace(/^\/en/, '') || '/');
    const trPath = enToTrSlugs[enPath] ?? enPath;
    return trPath;
  }

  const trPath = normalize(pathname);
  const enPath = trToEnSlugs[trPath] ?? trPath;
  return enPath === '/' ? '/en/' : `/en${enPath}`;
}

export function getCurrentLangCode(lang: Lang): string {
  return lang.toUpperCase();
}
