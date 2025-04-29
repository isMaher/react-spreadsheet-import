import { Box, Dialog, Heading, Text } from "@chakra-ui/react"
import { useCallback, useState } from "react"
import type XLSX from "xlsx-ugnis"
import { useRsi } from "../../hooks/useRsi"
import { DropZone } from "./components/DropZone"
import { ExampleTable } from "./components/ExampleTable"
import { FadingOverlay } from "./components/FadingOverlay"

type UploadProps = {
  onContinue: (data: XLSX.WorkBook, file: File) => Promise<void>
}

export const UploadStep = ({ onContinue }: UploadProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const { translations, fields } = useRsi()
  const handleOnContinue = useCallback(
    async (data: XLSX.WorkBook, file: File) => {
      setIsLoading(true)
      await onContinue(data, file)
      setIsLoading(false)
    },
    [onContinue],
  )
  return (
    <Dialog.Body>
      <Heading css={{ color: "textColor", fontSize: "3xl" }}>{translations.uploadStep.title}</Heading>
      <Text css={{ fontSize: "2xl", lineHeight: 8, fontWeight: "semibold", color: "textColor" }}>
        {translations.uploadStep.manifestTitle}
      </Text>
      <Text css={{ fontSize: "md", lineHeight: 6, color: "subtitleColor", mb: "1rem" }}>
        {translations.uploadStep.manifestDescription}
      </Text>
      <Box css={{ mb: "0.5rem", position: "relative", h: "72px" }}>
        <ExampleTable fields={fields} />
        <FadingOverlay />
      </Box>
      <DropZone onContinue={handleOnContinue} isLoading={isLoading} />
    </Dialog.Body>
  )
}
