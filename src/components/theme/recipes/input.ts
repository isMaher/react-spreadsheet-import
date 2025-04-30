import { defineRecipe, defineSlotRecipe } from '@chakra-ui/react'
import { numberInputAnatomy } from '@chakra-ui/react/anatomy'

const lg = {
  fontSize: '1rem',
  lineHeight: '1.088125',
}

const md = {
  fontSize: '0.875rem',
  lineHeight: '1.08785714286',
}

const sm = {
  fontSize: '0.8125rem',
  lineHeight: '1.08769230769',
}

const table = {
  borderRadius: 'none !important',
  borderColor: '#F2F2F4',
  height: '100% !important',
  color: 'typography.300',
  fontSize: '0.875rem',
  lineHeight: 1.5714285714,
  fontWeight: 600,
  _focus: { boxShadow: 'none', borderColor: 'primary.200' },
}

const fieldStyle = {
  fontWeight: 500,
  borderWidth: '1px',
  borderColor: 'border.box',
  backgroundColor: 'background.box',
  borderRadius: '14px',
  borderTopStartRadius: '14px',
  borderTopEndRadius: '14px',
  borderBottomStartRadius: '14px',
  borderBottomEndRadius: '14px',
  color: 'typography.100',
  // color: colorMode === 'dark' ? 'white' : 'typography.100',
  h: 'auto',
  pt: '1rem',
  pb: '0.9375rem',
  px: '1.25rem',
  zIndex: 0,
  transition: 'all 100ms ease-in-out',
  _disabled: {
    cursor: 'not-allowed',
    backgroundColor: 'background.300',
    color: 'typography.400',
  },
  _focus: {
    outline: 'none !important',
    borderColor: 'primary.200 !important',
    boxShadow: '0px 1px 2px rgba(35, 174, 188, 0.05), 0px 0px 0px 4px rgba(35, 174, 188, 0.2);',
    // backgroundColor: colorMode === 'dark' ? 'background.box' : '#FFFFFF',
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },
  _invalid: {
    borderColor: 'primary.400',
  },
}

export const numberInputRecipe = defineSlotRecipe({
  slots: numberInputAnatomy.keys(),
  base: {
    root: {
      ...fieldStyle,
      p: 0,
      width: '100% !important',
    },
    input: { border: 'none' },
  },
  variants: {
    variant: {
      table: { root: table, input: { bg: 'background.300' } },
    },
    size: {
      sm: { root: sm },
      md: { root: md },
      lg: { root: lg },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const inputRecipe = defineRecipe({
  base: fieldStyle,
  variants: {
    size: {
      sm,
      md,
      lg,
    },
    variant: { table },
  },
  defaultVariants: {
    size: 'md',
  },
})
