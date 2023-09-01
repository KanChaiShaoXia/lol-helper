import { languages } from "countries-list";

export enum Language {
  en = "en",
  zhHans = "zhHans",
}

export const mozataLanguagesList = [
  { key: Language.en, title: languages.en.native },
  { key: Language.zhHans, title: languages.zh.native },
];
