import { defineSlotRecipe } from '@chakra-ui/react'
import { switchAnatomy } from '@chakra-ui/react/anatomy'

export const switchRecipe = defineSlotRecipe({
  slots: switchAnatomy.keys(),
  className: 'chakra-switch',
  base: {
    root: {
      h: 'auto !important',
      display: 'block',
      minW: '2.5625rem',
    },
    control: {
      display: 'flex',
      h: '100%',
      w: '100%',
      alignItems: 'center',
      p: 0,
      ps: '0.128rem',
      backgroundColor: 'stroke.200 !important',
      _checked: {
        ps: 0,
        backgroundColor: 'primary.200 !important',
      },
    },
    thumb: {
      w: '1.125rem !important',
      h: '100% !important',
      backgroundColor: 'stroke.100 !important',
      _checked: {
        backgroundColor: 'background.400 !important',
      },
    },
  },
})
