import { defineSlotRecipe } from '@chakra-ui/react'
import { fieldAnatomy } from '@chakra-ui/react/anatomy'

export const fieldRecipe = defineSlotRecipe({
  slots: fieldAnatomy.keys(),
  base: {
    helperText: {
      mt: '0.1875rem',
      fontWeight: 600,
      color: 'typography.300',
    },
    label: {
      color: 'typography.300',
    },
    errorText: {
      color: 'primary.400',
      marginTop: '0.2em',
    },
  },
  variants: {
    size: {
      sm: {
        helperText: {
          fontSize: '0.6875rem',
        },
        label: {
          fontSize: '0.8125rem',
          lineHeight: '1.08769230769',
        },
      },
      md: {
        helperText: {
          fontSize: '0.75rem',
        },
        label: {
          fontSize: '0.875rem',
          lineHeight: '1.08785714286',
        },
      },
      lg: {
        helperText: {
          fontSize: '0.875rem',
        },
        label: {
          fontSize: '1rem',
          lineHeight: '1.088125',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
