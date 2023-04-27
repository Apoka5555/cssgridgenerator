import { createI18n } from "vue-i18n";
import en from "./en.json";

const locale = window.navigator.language
  ? window.navigator.language.substring(0, 2)
  : "en";

export const i18n = createI18n({
  locale,
  fallbackLocale: "en",
  messages: {
    en: en,
  },
});
