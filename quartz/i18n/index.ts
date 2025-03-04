import { Translation, CalloutTranslation } from "./locales/definition"

import cs from "./locales/cs-CZ"


export const TRANSLATIONS = {
  "cs-CZ": cs,
} as const

export const defaultTranslation = "cs-CZ"
export const i18n = (locale: ValidLocale): Translation => TRANSLATIONS[defaultTranslation]
export type ValidLocale = keyof typeof TRANSLATIONS
export type ValidCallout = keyof CalloutTranslation
