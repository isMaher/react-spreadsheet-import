import { Box, Button, Text, Toaster } from "@chakra-ui/react"
import { useState } from "react"
import { useDropzone } from "react-dropzone"
import * as XLSX from "xlsx-ugnis"
import { useRsi } from "../../../hooks/useRsi"
import { readFileAsync } from "../utils/readFilesAsync"

type DropZoneProps = {
  onContinue: (data: XLSX.WorkBook, file: File) => void
  isLoading: boolean
}

export const DropZone = ({ onContinue, isLoading }: DropZoneProps) => {
  const { translations, maxFileSize, dateFormat, parseRaw } = useRsi()
  const [loading, setLoading] = useState(false)
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    maxSize: maxFileSize,
    accept: {
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "text/csv": [".csv"],
    },
    onDropRejected: (fileRejections) => {
      setLoading(false)
      fileRejections.forEach((fileRejection) => {
        Toaster({
          status: "error",
          variant: "left-accent",
          position: "bottom-left",
          title: `${fileRejection.file.name} ${translations.uploadStep.dropzone.errorToastDescription}`,
          description: fileRejection.errors[0].message,
          isClosable: true,
        })
      })
    },
    onDropAccepted: async ([file]) => {
      setLoading(true)
      const arrayBuffer = await readFileAsync(file)
      const workbook = XLSX.read(arrayBuffer, {
        cellDates: true,
        dateNF: dateFormat,
        raw: parseRaw,
        dense: true,
        codepage: 65001,
      })
      setLoading(false)
      onContinue(workbook, file)
    },
  })

  return (
    <Box
      {...getRootProps()}
      css={{
        bgGradient: `repeating-linear(0deg, 'rsi.500', 'rsi.500' 10px, transparent 10px, transparent 20px, 'rsi.500' 20px), repeating-linear-gradient(90deg, 'rsi.500', 'rsi.500' 10px, transparent 10px, transparent 20px, 'rsi.500' 20px), repeating-linear-gradient(180deg, 'rsi.500', 'rsi.500' 10px, transparent 10px, transparent 20px, 'rsi.500' 20px), repeating-linear-gradient(270deg, 'rsi.500', 'rsi.500' 10px, transparent 10px, transparent 20px, 'rsi.500' 20px)`,
        backgroundSize: "2px 100%, 100% 2px, 2px 100% , 100% 2px",
        backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
        backgroundRepeat: "no-repeat",
        borderRadius: "4px",
      }}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flex={1}
    >
      <input {...getInputProps()} data-testid="rsi-dropzone" />
      {isDragActive ? (
        <Text css={{ size: "lg", lineHeight: 7, fontWeight: "semibold", color: "textColor" }}>
          {translations.uploadStep.dropzone.activeDropzoneTitle}
        </Text>
      ) : loading || isLoading ? (
        <Text css={{ size: "lg", lineHeight: 7, fontWeight: "semibold", color: "textColor" }}>
          {translations.uploadStep.dropzone.loadingTitle}
        </Text>
      ) : (
        <>
          <Text css={{ size: "lg", lineHeight: 7, fontWeight: "semibold", color: "textColor" }}>
            {translations.uploadStep.dropzone.title}
          </Text>
          <Button css={{ mt: "1rem" }} onClick={open}>
            {translations.uploadStep.dropzone.buttonTitle}
          </Button>
        </>
      )}
    </Box>
  )
}
