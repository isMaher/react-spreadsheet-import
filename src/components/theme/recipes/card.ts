import { defineSlotRecipe } from '@chakra-ui/react'
import { cardAnatomy } from '@chakra-ui/react/anatomy'

export const cardRecipe = defineSlotRecipe({
  slots: cardAnatomy.keys(),
  base: {
    root: {
      py: '1.5625em',
      ps: '1.25em',
      pe: '1.1875em',
      gap: '1.875em',
      maxW: '22.0625em',
      borderRadius: '14px',
    },
    header: {
      p: 0,
    },
    body: {
      p: 0
    }
  },
})
