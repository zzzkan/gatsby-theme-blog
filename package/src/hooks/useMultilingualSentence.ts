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
    getAllPostsText: () => {
      if (lang === "ja") return "記事一覧"
      return "All Posts"
    },
    getPreviousPageText: () => {
      if (lang === "ja") return "前の記事"
      return "Previous Post"
    },
    getNextPageText: () => {
      if (lang === "ja") return "次の記事"
      return "Next Post"
    },
    getRelatedPostsText: () => {
      if (lang === "ja") return "関連記事"
      return "Related Posts"
    },
    getPageCountText: (count: number) => {
      if (lang === "ja") return `${count}ページ目`
      return `page ${count}`
    },
    getTagPostsDescriptionText: (tag: string) => {
      if (lang === "ja") return `${tag}タグが付いた記事一覧`
      return `Posts tagged with ${tag}`
    },
  }
}
