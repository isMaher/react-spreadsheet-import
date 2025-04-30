import { defineSlotRecipe } from '@chakra-ui/react'
import { stepsAnatomy } from '@chakra-ui/react/anatomy'

export const stepsRecipe = defineSlotRecipe({
  slots: stepsAnatomy.keys(),
  base: {
    title: {
      fontSize: '14px',
      lineHeight: '22px',
      fontFamily: 'Almarai',
      fontWeight: '500',
    },
    description: {
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily: 'Almarai',
      fontWeight: '700',
    },
  },
})
