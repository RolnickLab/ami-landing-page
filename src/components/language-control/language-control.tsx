"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/utils";
import { useLocale } from "next-intl";
import { LanguageSelect } from "../select/select";

const LANGUGAE_OPTIONS: {
  label: string;
  labelShort: string;
  locale: Locale;
}[] = [
  { label: "English", labelShort: "EN", locale: "en-US" },
  { label: "Français", labelShort: "FR", locale: "fr-CA" },
];

export const LanguageControl = () => {
  const value = useLocale();

  return (
    <LanguageSelect
      items={LANGUGAE_OPTIONS.map((option) => ({
        id: option.locale,
        label: option.label,
      }))}
      value={value}
      onValueChange={(value) => {
        const locale = value as Locale;
        setUserLocale(locale);
      }}
    />
  );
};
