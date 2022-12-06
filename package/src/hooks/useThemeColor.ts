import { useColorModeValue } from "@chakra-ui/react"

type ThemeColorProps = {
  tint: string
  primaryText: string
  secondaryText: string
  onTintText: string
  primaryBackground: string
  secondaryBackground: string
  codeBackground: string
  highlightBackground: string
}

export const useThemeColor = (): ThemeColorProps => {
  return {
    tint: useColorModeValue("brand.600", "brand.200"),
    primaryText: useColorModeValue("base.800", "base.100"),
    secondaryText: useColorModeValue("base.600", "base.400"),
    onTintText: useColorModeValue("white", "base.900"),
    primaryBackground: useColorModeValue("white", "base.900"),
    secondaryBackground: useColorModeValue(
      "RGBA(0, 0, 0, 0.02)",
      "RGBA(255, 255, 255, 0.02)"
    ),
    codeBackground: useColorModeValue(
      "RGBA(0, 0, 0, 0.02)",
      "RGBA(255, 255, 255, 0.02)"
    ),
    highlightBackground: useColorModeValue(
      "RGBA(0, 0, 0, 0.03)",
      "RGBA(255, 255, 255, 0.04)"
    ),
  }
}
