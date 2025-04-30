import { defineSlotRecipe } from '@chakra-ui/react'
import { menuAnatomy } from '@chakra-ui/react/anatomy'

export const menuRecipe = defineSlotRecipe({
  slots: menuAnatomy.keys(),
  base: {
    content: {
      borderTopEndRadius: 'none',
      borderRadius: '18px',
      background: '#fff',
      boxShadow: '0px 14px 23px 0px rgba(28, 37, 44, 0.08)',
      p: 0,
      _open: {
        p: 0,
      },
    },
    trigger: {
      cursor: 'pointer',
      _focus: {
        outlineColor: 'primary.200',
      },
    },
    item: {
      cursor: 'pointer',
      padding: '1.5em',
      fontSize: '0.875rem',
      backgroundColor: 'white',
      color: 'black',
      borderRadius: 'none',
      _hover: {
        backgroundColor: '#EAF0FC',
      },
      _focus: {
        backgroundColor: '#EAF0FC',
      },
      _selected: {
        bg: 'red !important',
      },
      _first: {
        borderTopLeftRadius: '18px',
      },
      _last: {
        borderBottomLeftRadius: '18px',
        borderBottomRightRadius: '18px',
      },
    },
  },
})
