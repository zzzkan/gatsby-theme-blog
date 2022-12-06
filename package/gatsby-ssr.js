const defaultThemeOptions = require("./utils/defaultThemeOptions")

exports.onRenderBody = ({ setHtmlAttributes }, themeOptions) => {
  const { lang } = defaultThemeOptions(themeOptions)
  setHtmlAttributes({ lang })
}
