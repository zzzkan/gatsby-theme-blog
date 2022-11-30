import { useColorModeValue } from "@chakra-ui/react"

type ThemeColorProps = {
  tint: string
  primaryText: string
  secondaryText: string
  onTintText: string
  primaryBackground: string
  secondaryBackground: string
  codeBackground: string
}

export const useThemeColor = (): ThemeColorProps => {
  return {
    tint: useColorModeValue("brand.600", "brand.200"),
    primaryText: useColorModeValue("base.800", "base.100"),
    secondaryText: useColorModeValue("base.700", "base.300"),
    onTintText: useColorModeValue("white", "base.900"),
    primaryBackground: useColorModeValue("white", "base.900"),
    secondaryBackground: useColorModeValue("blackAlpha.50", "whiteAlpha.50"),
    codeBackground: useColorModeValue("white", "whiteAlpha.50"),
  }
}
