import React from "react"
import { IconButton, useColorMode } from "@chakra-ui/react"
import { RiSunLine } from "@react-icons/all-files/ri/RiSunLine"
import { RiMoonLine } from "@react-icons/all-files/ri/RiMoonLine"
import { useMultilingualSentence } from "../hooks/useMultilingualSentence"

export const ToggleColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { getToggleColorModeLabel } = useMultilingualSentence()
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label={getToggleColorModeLabel()}
      variant={"ghost"}
      isRound={true}
      size={"sm"}
      fontSize={"2xl"}
      icon={colorMode === "light" ? <RiMoonLine /> : <RiSunLine />}
    />
  )
}
