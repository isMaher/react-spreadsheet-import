import { defineSlotRecipe } from '@chakra-ui/react'
import { drawerAnatomy } from '@chakra-ui/react/anatomy'

export const drawerRecipe = defineSlotRecipe({
  slots: drawerAnatomy.keys(),
  base: {
    content: {
      borderTopStartRadius: '12px',
      borderBottomStartRadius: '12px',
      pb: '1.875em',
      minW: '26.25em !important',
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
