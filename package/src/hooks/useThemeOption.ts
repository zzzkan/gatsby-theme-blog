import { useStaticQuery, graphql } from "gatsby"
import { type ThemeOptionType } from "../types/themeOptionType"

export const useThemeOption = (): ThemeOptionType => {
  const data = useStaticQuery<{ themeOption: ThemeOptionType }>(graphql`
    query {
      themeOption(id: { eq: "@zzzkan/gatsby-theme-blog" }) {
        lang
        links {
          name
          url
        }
      }
    }
  `)
  return data.themeOption
}
