import { useThemeOption } from "./useThemeOption"
import { type multilingualSentenceType } from "../types/multilingualSentenceType"

export const useMultilingualSentence = (): multilingualSentenceType => {
  const { lang } = useThemeOption()
  return {
    getFeaturedImageAlt: () => {
      if (lang === "ja") return `アイキャッチ画像`
      return `Featured image`
    },
    getFeaturedImageLinkAlt: (str: string) => {
      if (lang === "ja") return `記事へ移動 (${str})`
      return `Go to the page (${str})`
    },
    getToggleColorModeLabel: () => {
      if (lang === "ja") return "カラーモードを変更"
      return "Switch to color mode"
    },
  }
}
