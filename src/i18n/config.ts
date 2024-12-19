export type Locale = (typeof locales)[number];

export const locales = ["en-US", "fr-CA"] as const;

export const defaultLocale: Locale = "en-US";
