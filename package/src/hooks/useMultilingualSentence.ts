import { useThemeOption } from "./useThemeOption"
import { type multilingualSentenceType } from "../types/multilingualSentenceType"

export const useMultilingualSentence = (): multilingualSentenceType => {
  const { lang } = useThemeOption()
  return {
    getFeaturedImageAlt: (str: string) => {
      if (lang === "ja") return `アイキャッチ画像 (${str})`
      return `Featured image (${str})`
    },
    getToggleColorMode: () => {
      if (lang === "ja") return "カラーモードを変更"
      return "Switch to color mode"
    },
  }
}
