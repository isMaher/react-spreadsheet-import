import { defineSlotRecipe } from '@chakra-ui/react'
import { checkboxAnatomy } from '@chakra-ui/react/anatomy'

export const checkboxRecipe = defineSlotRecipe({
  slots: checkboxAnatomy.keys(),
  base: {
    control: {
      width: '1.125em',
      height: '1.125em',
      borderRadius: '4.09104px',
      borderWidth: '0.981816px',
      borderStyle: 'solid',
      borderColor: 'stroke.100',
      _checked: {
        background: 'primary.200 !important',
        borderColor: 'transparent',
      },
      _hover: {
        borderColor: 'primary.200 !important',
        background: 'background.400',
      },
      _disabled: {
        bg: 'white',
      },
    },
    indicator: {
      width: '0.7em',
      height: '0.6em',
    },
    label: {
      color: '#13181F',
      fontSize: '0.875rem',
      ms: '0.8571428571em',
      lineHeight: 1.5714285714,
      _disabled: {
        opacity: 1,
      },
    },
  },
})
