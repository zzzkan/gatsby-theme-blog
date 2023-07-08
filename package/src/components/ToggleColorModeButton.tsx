import React from "react"
import { IconButton, useColorMode } from "@chakra-ui/react"
import { RiSunLine } from "@react-icons/all-files/ri/RiSunLine"
import { RiMoonLine } from "@react-icons/all-files/ri/RiMoonLine"
import { resource } from "../resource"

export const ToggleColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label={resource.ToggleColorModeLabelText}
      variant={"ghost"}
      isRound={true}
      size={"sm"}
      fontSize={"2xl"}
      icon={colorMode === "light" ? <RiMoonLine /> : <RiSunLine />}
    />
  )
}
