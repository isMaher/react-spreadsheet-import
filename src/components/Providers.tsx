"use client"

import { ChakraProvider, Toaster } from "@chakra-ui/react"
import { system } from "./theme/theme"
import { ColorModeProvider, ColorModeProviderProps } from "./ui/color-mode"

export function Provider(props: ColorModeProviderProps & { lng: "ar" | "en" }) {
  return (
    <div>
      <ChakraProvider value={system}>
        <ColorModeProvider defaultTheme="light" {...props} />
        <Toaster />
        {/* <feedbackDialog.Viewport /> */}
      </ChakraProvider>
    </div>
  )
}
