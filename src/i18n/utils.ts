"use server";

import { cookies, headers } from "next/headers";
import { resolveAcceptLanguage } from "resolve-accept-language";
import { Locale, defaultLocale, locales } from "./config";

const COOKIE_NAME = "NEXT_LOCALE";
const HEADER_NAME = "Accept-Language";

export async function getUserLocale(): Promise<Locale> {
  // Check if language preference has been set
  const userPreference = cookies().get(COOKIE_NAME)?.value;

  if (userPreference && locales.includes(userPreference as Locale)) {
    return userPreference as Locale;
  }

  // If no preference is set, try match browser language
  const browserPreferences = headers().get(HEADER_NAME) ?? "";

  return resolveAcceptLanguage(browserPreferences, locales, defaultLocale);
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
