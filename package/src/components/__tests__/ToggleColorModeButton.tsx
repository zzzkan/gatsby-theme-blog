import React from "react"
import { render } from "@testing-library/react"
import { ToggleColorModeButton } from "../ToggleColorModeButton"
import * as chakra from "@chakra-ui/react"
import { RiSunLine } from "@react-icons/all-files/ri/RiSunLine"
import { RiMoonLine } from "@react-icons/all-files/ri/RiMoonLine"

describe("ToggleColorModeButton component", () => {
  vi.mock("@react-icons/all-files/ri/RiSunLine")
  vi.mock("@react-icons/all-files/ri/RiMoonLine")
  const mockRiSunLine = RiSunLine as jest.Mock
  const mockRiMoonLine = RiMoonLine as jest.Mock

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test("snapshot", () => {
    const { asFragment } = render(<ToggleColorModeButton />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("should render light icon", () => {
    vi.spyOn(chakra, "useColorMode").mockImplementationOnce(() => ({
      colorMode: "light",
      toggleColorMode: vi.fn(),
      setColorMode: vi.fn(),
    }))
    render(<ToggleColorModeButton />)
    expect(mockRiSunLine).not.toHaveBeenCalled()
    expect(mockRiMoonLine).toHaveBeenCalled()
  })

  test("should render dark icon", () => {
    vi.spyOn(chakra, "useColorMode").mockImplementationOnce(() => ({
      colorMode: "dark",
      toggleColorMode: vi.fn(),
      setColorMode: vi.fn(),
    }))
    render(<ToggleColorModeButton />)
    expect(mockRiSunLine).toHaveBeenCalled()
    expect(mockRiMoonLine).not.toHaveBeenCalled()
  })
})
