import { defineRecipe } from '@chakra-ui/react'

export const linkRecipe = defineRecipe({
  variants: {
    variant: {
      primary: {
        _hover: {
          textDecoration: 'none',
        },
        _focus: {
          outlineColor: 'primary.200',
          _hover: {
            outline: 'none',
          },
        },
      },
    },
  },
  defaultVariants: { variant: 'primary' },
})
