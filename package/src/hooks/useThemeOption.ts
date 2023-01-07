import { useStaticQuery, graphql } from "gatsby"

type ThemeOptionProps = {
  readonly links: Array<{
    readonly name: string
    readonly url: string
    readonly label: string | undefined
  }>
}

export const useThemeOption = (): ThemeOptionProps => {
  const data = useStaticQuery<{ themeOption: ThemeOptionProps }>(graphql`
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
