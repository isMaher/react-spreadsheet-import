import { defineSlotRecipe } from '@chakra-ui/react'
import { progressAnatomy } from '@chakra-ui/react/anatomy'

export const progressRecipe = defineSlotRecipe({
  slots: progressAnatomy.keys(),
  base: {
    root: {
      borderRadius: 50,
    },
    track: {
      bg: 'stroke.100',
      borderRadius: '45px',
      height: '0.3125em !important',
    },
  },
  variants: {
    shape: {
      square: {},
      rounded: {
        track: {
          borderRadius: '50px',
        },
      },
    },
    variant: {
      primary: {
        track: {
          shadow: 'inset',
          bgColor: 'bg.muted',
        },
        range: {
          bgColor: 'primary.200',
        },
        // root: {
        //   colorPalette: 'primary.200',
        // },
      },
      secondary: {
        track: {
          shadow: 'inset',
          bgColor: 'bg.muted',
        },
        range: {
          bgColor: 'primary.100',
        },
        // root: {
        //   colorPalette: 'primary.100',
        // },
      },
      current: {
        track: {
          shadow: 'inset',
          bgColor: 'bg.muted',
        },
        range: {
          bgColor: '#5F58FF',
        },
        // root: {
        //   colorPalette: '#5F58FF',
        // },
      },
      purple: {
        track: {
          shadow: 'inset',
          bgColor: 'bg.muted',
        },
        range: {
          bgColor: '#6490EB',
        },
        // root: {
        //   color: '#6490EB',
        // },
      },
      danger: {
        track: {
          shadow: 'inset',
          bgColor: 'bg.muted',
        },
        range: {
          bgColor: 'colorPalette.solid',
        },
        // root: {
        //   colorPalette: 'primary.400',
        // },
      },
    },
  },
})
