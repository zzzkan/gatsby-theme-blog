import { useThemeOption } from "./useThemeOption"
import { type multilingualSentenceType } from "../types/multilingualSentenceType"

export const useMultilingualSentence = (): multilingualSentenceType => {
  const { lang } = useThemeOption()
  if (lang === "ja") {
    return {
      movePageSentence: (str: string) => `ページを遷移します。 (${str})`,
      featuredImageSentence: (str?: string) =>
        str == null ? "アイキャッチ画像" : `アイキャッチ画像 (${str})`,
      toggleColorModeSentence: "カラーモードを変更します。",
    }
  }
  return {
    movePageSentence: (str: string) => `Move a page. (${str})`,
    featuredImageSentence: (str?: string) =>
      str == null ? "Featured image" : `Featured image (${str})`,
    toggleColorModeSentence: "Toggle color mode.",
  }
}
