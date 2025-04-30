import { defineSlotRecipe } from '@chakra-ui/react'
import { tableAnatomy } from '@chakra-ui/react/anatomy'

export const tableRecipe = defineSlotRecipe({
  slots: tableAnatomy.keys(),
  base: {
    root: {
      borderSpacing: '0 0.31em',
      tableLayout: 'fixed',
      width: '100%',
    },
    caption: {
      padding: '0px !important',
      margin: '0px',
      textAlign: 'start',
    },
  },
  variants: {
    variant: {
      rounded: {
        root: {
          borderCollapse: 'separate',
        },
        header: {
          background: 'white',
          p: '1rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'typography.300',
        },
        columnHeader: {
          fontWeight: 700,
          _first: {
            borderTopStartRadius: '10px',
            borderBottomStartRadius: '10px',
          },
          _last: {
            borderTopEndRadius: '10px',
            borderBottomEndRadius: '10px',
          },
        },
        cell: {
          background: 'white',
          p: '1rem',
          fontSize: '0.875rem',
          fontWeight: 700,
          color: 'typography.100',
          _first: {
            borderTopStartRadius: '10px',
            borderBottomStartRadius: '10px',
          },
          _last: {
            borderTopEndRadius: '10px',
            borderBottomEndRadius: '10px',
          },
        },
      },
      stick: {
        root: {
          borderCollapse: 'collapse',
        },
        row: {
          borderBottom: '1px solid #F2F2F4',
        },
        header: {
          background: '#EAF0FC',
          py: '1.4166666667em',
        },
        columnHeader: {
          fontSize: '0.75rem',
          color: 'primary.300',
          lineHeight: 1.08833333333,
          fontWeight: 700,
          ps: '1.25rem !important',
          _first: {
            borderTopStartRadius: '12px',
          },
          _last: {
            borderTopEndRadius: '12px',
          },
        },
        cell: {
          // h: '2.9375rem',
          p: '0 !important',
          ps: '1.25rem !important',
          lineHeight: 1.08833333333,
          fontWeight: 600,
          color: 'typography.100',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'rounded',
  },
})
