import React from "react"
import { ThemeProvider } from "./src/components/ThemeProvider"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
