import { IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { CgClose } from "react-icons/cg"
import { ConfirmCloseAlert } from "./Alerts/ConfirmCloseAlert"

type ModalCloseButtonProps = {
  onClose: () => void
}

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <ConfirmCloseAlert
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          setShowModal(false)
          onClose()
        }}
      />
      <IconButton
        right="14px"
        top="20px"
        aria-label="Close modal"
        color="white"
        position="fixed"
        transform="translate(50%, -50%)"
        onClick={() => setShowModal(true)}
        zIndex="toast"
        dir="ltr"
      >
        <CgClose />
      </IconButton>
    </>
  )
}
