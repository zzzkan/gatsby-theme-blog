import { useThemeOption } from "./useThemeOption"
import { type multilingualSentenceType } from "../types/multilingualSentenceType"

export const useMultilingualSentence = (): multilingualSentenceType => {
  const { lang } = useThemeOption()
  return {
    movePageSentence: (str: string) => `Move page (${str})`,
    featuredImageSentence: (str?: string) =>
      str == null ? "Featured image" : `Featured image (${str})`,
    toggleColorModeSentence: "Toggle color mode",
  }
}
