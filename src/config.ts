import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "id"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    id: "/pathnames",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";
