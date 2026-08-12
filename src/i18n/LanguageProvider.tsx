import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { translations, type Lang, type Content } from "./translations";

const KEY = "site-lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function isLang(v: string | null | undefined): v is Lang {
  return !!v && v in translations;
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]!) : null;
}

function writeCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

function syncUrl(lang: Lang) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (url.searchParams.get("lang") === lang) return;
  url.searchParams.set("lang", lang);
  window.history.replaceState(window.history.state, "", url.toString());
}

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Content }>({
  lang: "mr",
  setLang: () => {},
  t: translations.mr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mr");

  // Resolve initial language: URL ?lang= > cookie > localStorage
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    const fromCookie = readCookie(KEY);
    let fromStorage: string | null = null;
    try {
      fromStorage = localStorage.getItem(KEY);
    } catch {
      /* ignore */
    }

    const resolved = [fromUrl, fromCookie, fromStorage].find(isLang) ?? "mr";
    setLangState(resolved);
    writeCookie(KEY, resolved);
    try {
      localStorage.setItem(KEY, resolved);
    } catch {
      /* ignore */
    }
    syncUrl(resolved);
  }, []);

  // Keep ?lang= present after client-side navigations
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  useEffect(() => {
    syncUrl(lang);
  }, [pathname, lang]);

  useEffect(() => {
    document.documentElement.lang = translations[lang].htmlLang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLangState(l);
        writeCookie(KEY, l);
        syncUrl(l);
        try {
          localStorage.setItem(KEY, l);
        } catch {
          /* ignore */
        }
      },
      t: translations[lang],
    }),
    [lang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  return useContext(Ctx);
}
