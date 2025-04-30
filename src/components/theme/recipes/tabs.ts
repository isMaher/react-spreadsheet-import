import { defineSlotRecipe } from '@chakra-ui/react'
import { tabsAnatomy } from '@chakra-ui/react/anatomy'

export const tabsRecipe = defineSlotRecipe({
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      transform: 'translateY(-0.6em)',
    },
    list: {
      overflowY: 'hidden',
      overflowX: 'auto',
      textStyle: 'body3',
      width: '100%',
      gap: '0.75em',
      border: 'none',
    },
    trigger: {
      _selected: {
        outline: 'none',
      },
    },
  },
  variants: {
    variant: {
      primary: {
        trigger: {
          textStyle: 'body3',
          position: 'relative',
          flexShrink: 0,
          px: '2em',
          py: '0.69em',
          borderRadius: '14px',
          borderBottomStartRadius: 'none',
          borderBottomEndRadius: 'none',
          color: 'background.400',
          _after: {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.30)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'stroke.100',
            borderBottom: 'none',
            opacity: '0.4000000059604645',
            borderRadius: '14px',
            borderBottomStartRadius: 'none',
            borderBottomEndRadius: 'none',
          },
          _selected: {
            borderColor: 'transparent',
            color: 'primary.200',
            background: 'background.400',
          },
        },
      },
      secondary: {
        list: {
          gap: 0,
        },
        trigger: {
          width: '50%',
          color: 'typography.300',
          fontWeight: 500,
          border: 'none',
          position: 'relative',
          _after: {
            content: "''",
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'stroke.100',
          },
          flexShrink: 0,
          _selected: {
            color: 'typography.100',
            _after: {
              height: '3px',
              background: 'primary.200',
              borderTopStartRadius: '14px',
              borderTopEndRadius: '14px',
              borderBottomStartRadius: '0',
              borderBottomEndRadius: '0',
            },
          },
        },
      },
    },
  },
})
