"use client";

import { LANGUGAE_OPTIONS } from "@/i18n/constants";
import { useState } from "react";
import { Select } from "../select/select";

export const LanguageControl = () => {
  const [value, setValue] = useState("en");
  const displayLabel = LANGUGAE_OPTIONS.find(
    (option) => option.locale === value
  )?.labelShort;

  return (
    <Select
      displayLabel={displayLabel}
      items={LANGUGAE_OPTIONS.map((option) => ({
        id: option.locale,
        label: option.label,
      }))}
      position="popper"
      value={value}
      onValueChange={setValue}
    />
  );
};
