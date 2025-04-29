import { Button, Dialog } from "@chakra-ui/react"

type ContinueButtonProps = {
  onContinue: (val: any) => void
  onBack?: () => void
  title: string
  backTitle?: string
  isLoading?: boolean
}

export const ContinueButton = ({ onContinue, onBack, title, backTitle, isLoading }: ContinueButtonProps) => {
  const nextButtonMobileWidth = onBack ? "8rem" : "100%"
  return (
    <Dialog.Footer>
      {onBack && (
        <Button
          size="md"
          css={{
            gridColumn: "1",
            gridRow: "1",
            justifySelf: "start",
          }}
          onClick={onBack}
          loading={isLoading}
        >
          {backTitle}
        </Button>
      )}
      <Button
        size="lg"
        w={{ base: nextButtonMobileWidth, md: "21rem" }}
        css={{
          gridColumn: "1 / 3",
          gridRow: "1",
          justifySelf: "center",
        }}
        onClick={onContinue}
        loading={isLoading}
      >
        {title}
      </Button>
    </Dialog.Footer>
  )
}
