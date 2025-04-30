import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  base: {
    height: 'auto !important',
    fontWeight: 600,
    borderColor: 'transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    _disabled: {
      cursor: 'not-allowed',
    },
    _hover: {
      _disabled: {
        bg: 'initial',
      },
    },
    _focus: {
      outline: 0,
      borderWidth: '0 !important',
    },
    _checked: {
      borderWidth: '0 !important',
    },
  },
  variants: {
    variant: {
      primary: {
        background: 'primary.200',
        color: 'white',
        py: '1.125rem',
        _hover: {
          _disabled: {
            background: 'stroke.100',
            _loading: {
              background: 'stroke.100',
            },
          },
        },
        _disabled: {
          background: 'stroke.100',
          _loading: {
            background: 'stroke.100',
          },
        },
      },
      secondary: {
        background: 'transparent',
        color: 'primary.200',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'primary.200 !important',
        px: '2.44rem',
        py: '1rem',
        _hover: {
          _disabled: {
            background: 'stroke.100',
            borderColor: 'stroke.100',
            _loading: {
              background: 'stroke.100',
              border: 'stroke.100',
            },
          },
        },
        _disabled: {
          background: 'stroke.100',
          border: 'stroke.100',
          _loading: {
            background: 'stroke.100',
            border: 'stroke.100',
          },
        },
        _focus: {
          borderColor: 'primary.200',
          textDecoration: 'underline',
        },
      },
      plain: {
        background: 'transparent',
        py: '0 !important',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        h: 'auto',
        minW: 'auto',
      },
    },
    size: {
      lg: {
        fontSize: '0.75rem',
        lineHeight: 1.08833333333,
        py: '0.875em !important',
        px: '3.25em',
        borderRadius: '10px',
      },
      md: {
        fontSize: '0.875rem',
        lineHeight: 1.08785714286,
        py: '1.1785714286em !important',
        px: '2.7857142857em',
        borderRadius: '14px',
      },
      sm: {
        fontSize: '0.75rem',
        lineHeight: 1.08833333333,
        py: '0.875em !important',
        px: '3.25em',
        borderRadius: '10px',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
