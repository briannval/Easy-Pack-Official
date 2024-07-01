import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "id"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/about": {
    en: "/about",
    id: "/about",
  },
  "/products": {
    en: "/products",
    id: "/products",
  },
  "/contact": {
    en: "/contact",
    id: "/contact",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const host = "https://www.easypackindonesia.com";
