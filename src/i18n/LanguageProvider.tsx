import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Lang, type Content } from "./translations";

const KEY = "site-lang";

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Content }>({
  lang: "mr",
  setLang: () => {},
  t: translations.mr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mr");

  useEffect(() => {
    const saved = localStorage.getItem(KEY) as Lang | null;
    if (saved && saved in translations) setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = translations[lang].htmlLang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLangState(l);
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
