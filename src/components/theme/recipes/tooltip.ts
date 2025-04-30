import { defineSlotRecipe } from '@chakra-ui/react'
import { tooltipAnatomy } from '@chakra-ui/react/anatomy'

export const tooltipRecipe = defineSlotRecipe({
  slots: tooltipAnatomy.keys(),
  base: {
    trigger: {
      bg: '#101828',
      py: '0.5rem',
      px: '0.75rem',
      borderRadius: '8px',
      m: '0.25rem',
      fontWeight: 600,
    },
  },
})
