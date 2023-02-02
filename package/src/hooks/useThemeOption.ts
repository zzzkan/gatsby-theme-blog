import { useStaticQuery, graphql } from "gatsby"
import { type ThemeOptionType } from "../types/themeOptionType"

export const useThemeOption = (): ThemeOptionType => {
  const data = useStaticQuery<{ themeOption: ThemeOptionType }>(graphql`
    query {
      themeOption(id: { eq: "@zzzkan/gatsby-theme-blog" }) {
        links {
          name
          url
          label
        }
      }
    }
  `)
  return data.themeOption
}
