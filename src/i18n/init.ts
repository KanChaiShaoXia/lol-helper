import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Language } from "./types";
import { lngResources } from "./resources";

export const adaptLanguage = (lng: string) => {
  if (
    ["zh-hk", "zh-mo", "zh-tw", "zh-cht", "zh-hant"].includes(lng.toLowerCase())
  ) {
    //繁体中文
    return Language.zhHans;
  }
  //简体中文
  if (["zh", "zh-cn"].includes(lng.toLowerCase())) return Language.zhHans;
  return lng;
};

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Language.en,
    // debug: true, //做翻译的时候再打开对照
    resources: lngResources,
    returnObjects: true,
    detection: {
      order: ["cookie", "navigator"],
      caches: ["cookie"],
      convertDetectedLanguage: (lng) => {
        return adaptLanguage(lng);
      },
    },
  });
