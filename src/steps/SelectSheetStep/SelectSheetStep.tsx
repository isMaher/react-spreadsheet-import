import { Dialog, Heading, Stack, Text } from "@chakra-ui/react"
import { useCallback, useState } from "react"
import { Radio, RadioGroup } from "src/components/ui/radio"
import { ContinueButton } from "../../components/ContinueButton"
import { useRsi } from "../../hooks/useRsi"

type SelectSheetProps = {
  sheetNames: string[]
  onContinue: (sheetName: string) => Promise<void>
  onBack?: () => void
}

export const SelectSheetStep = ({ sheetNames, onContinue, onBack }: SelectSheetProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const { translations } = useRsi()
  const [value, setValue] = useState(sheetNames[0])
  const handleOnContinue = useCallback(
    async (data: typeof value) => {
      setIsLoading(true)
      await onContinue(data)
      setIsLoading(false)
    },
    [onContinue],
  )

  return (
    <>
      <Dialog.Body alignItems="center" justifyContent="center" p={8} flex={1}>
        <Heading color="textColor" mb="8" fontSize="3xl">
          {translations.uploadStep.selectSheet.title}
        </Heading>
        <RadioGroup value={value}>
          <Stack gap={8}>
            {sheetNames.map((sheetName) => {
              return (
                <Radio key={sheetNames[0]} value={value}>
                  <Text color="textColor">{sheetName}</Text>
                </Radio>
              )
            })}
          </Stack>
        </RadioGroup>
      </Dialog.Body>
      <ContinueButton
        isLoading={isLoading}
        onContinue={() => handleOnContinue(value)}
        onBack={onBack}
        title={translations.uploadStep.selectSheet.nextButtonTitle}
        backTitle={translations.uploadStep.selectSheet.backButtonTitle}
      />
    </>
  )
}
