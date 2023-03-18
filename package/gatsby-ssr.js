import React from "react"
import { ThemeProvider, ColorModeScript } from "./src/components/ThemeProvider"

const defaultThemeOptions = require("./utils/defaultThemeOptions")

export const onRenderBody = (
  { setHtmlAttributes, setPreBodyComponents },
  themeOptions
) => {
  const { lang } = defaultThemeOptions(themeOptions)
  setHtmlAttributes({ lang })
  setPreBodyComponents([<ColorModeScript key={"color-mode-script"} />])
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
