import { defineSlotRecipe } from '@chakra-ui/react'
import { dialogAnatomy } from '@chakra-ui/react/anatomy'

export const dialogRecipe = defineSlotRecipe({
  slots: dialogAnatomy.keys(),
  base: {
    content: {
      w: {
        base: '91.4666666667vw',
        md: '100%',
      },
      mt: 'auto',
      mb: {
        base: '5em',
        md: 'auto',
      },
      borderRadius: '12px',
      pb: '1.875em',
      overflow: 'hidden',
    },
    header: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4444444444,
      color: '#101828',
      pt: '1.3333333333em',
      pb: '0.8333333333em',
    },
    body: {
      py: 0,
      color: 'typography.200',
      fontSize: '0.875rem',
      lineHeight: 1.5714285714,
    },
    footer: {
      mb: '-0.375em',
      pt: '2em',
      pb: 0,
      justifyContent: 'flex-start',
    },
    backdrop: {
      backgroundColor: 'rgba(52, 64, 84, 0.7)',
      backdropFilter: 'blur(16px)',
    },
    closeTrigger: {
      top: '2em',
      insetInlineEnd: '2em',
      '& svg': {
        color: '#8A94A6',
      },
    },
  },
})
