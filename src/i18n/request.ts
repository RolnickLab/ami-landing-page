import deepmerge from "deepmerge";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale } from "./config";
import { getUserLocale } from "./utils";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const userMessages = (await import(`./resources/${locale}.json`)).default;
  const defaultMessages = (await import(`./resources/${defaultLocale}.json`))
    .default;

  return {
    locale,
    messages: deepmerge(defaultMessages, userMessages),
  };
});
