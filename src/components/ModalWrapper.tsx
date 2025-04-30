import React from "react"
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot } from "./ui/dialog"

type Props = {
  children: React.ReactNode
  open: boolean
  setOpen: (open: boolean) => void
}

export const ModalWrapper = ({ children, open, setOpen }: Props) => {
  return (
    <DialogRoot
      open={open}
      onOpenChange={({ open }: { open: boolean }) => setOpen(open)}
      id="rsi"
      variant="rsi"
      closeOnEsc={false}
      closeOnOverlayClick={false}
      scrollBehavior="inside"
    >
      <DialogContent>
        <DialogCloseTrigger />
        <DialogHeader padding="0 0 24px 0" />
        <DialogBody padding="0">{children}</DialogBody>
      </DialogContent>
    </DialogRoot>
  )
}
