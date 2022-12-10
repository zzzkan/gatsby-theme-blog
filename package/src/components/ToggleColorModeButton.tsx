import React from "react"
import { IconButton, useColorMode } from "@chakra-ui/react"
import { RiSunLine } from "@react-icons/all-files/ri/RiSunLine"
import { RiMoonLine } from "@react-icons/all-files/ri/RiMoonLine"

export const ToggleColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      variant={"ghost"}
      aria-label={"Toggle color mode"}
      isRound={true}
      fontSize={"2xl"}
      icon={colorMode === "light" ? <RiMoonLine /> : <RiSunLine />}
    />
  )
}
