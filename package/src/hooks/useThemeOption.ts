import { useStaticQuery, graphql } from "gatsby"

type ThemeOptionProps = {
  links: Array<{
    name: string
    url: string
    label: string | null
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
