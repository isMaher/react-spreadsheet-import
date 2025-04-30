export const excelUploader = {
  '.rdg': {
    contain: 'size layout style paint',
    borderRadius: 'lg',
    border: 'none',
    borderTop: '1px solid var(--rdg-border-color)',
    blockSize: '100%',

    // we have to use vars here because chakra does not autotransform unknown props
    '--rdg-row-height': '40px',
    '--rdg-color': 'var(--chakra-colors-textColor)',
    '--rdg-background-color': 'var(--chakra-colors-background)',
    '--rdg-header-background-color': 'var(--chakra-colors-background)',
    '--rdg-row-hover-background-color': 'var(--chakra-colors-background)',
    '--rdg-selection-color': 'var(--chakra-colors-blue-400)',
    '--rdg-row-selected-background-color': '#edf2f7',
    '--row-selected-hover-background-color': '#edf2f7',
    '--rdg-error-cell-background-color': 'var(--chakra-colors-red-50)',
    '--rdg-warning-cell-background-color': 'var(--chakra-colors-orange-50)',
    '--rdg-info-cell-background-color': 'var(--chakra-colors-blue-50)',
    '--rdg-border-color': 'var(--chakra-colors-border)',
    '--rdg-frozen-cell-box-shadow': 'none',
    '--rdg-font-size': 'var(--chakra-fontSizes-sm)',
  },
  '.rdg-header-row .rdg-cell': {
    color: 'textColor',
    fontSize: 'xs',
    lineHeight: 10,
    fontWeight: 'bold',
    letterSpacing: 'wider',
    textTransform: 'uppercase',
    '&:first-of-type': {
      borderTopLeftRadius: 'lg',
    },
    '&:last-child': {
      borderTopRightRadius: 'lg',
    },
  },
  '.rdg-row:last-child .rdg-cell:first-of-type': {
    borderBottomLeftRadius: 'lg',
  },
  '.rdg-row:last-child .rdg-cell:last-child': {
    borderBottomRightRadius: 'lg',
  },
  '.rdg-row:last-child .rdg-cell': {
    borderBottom: '1px solid var(--rdg-border-color)',
  },
  ".rdg[dir='rtl']": {
    '.rdg-row:last-child .rdg-cell:first-of-type': {
      borderBottomRightRadius: 'lg',
      borderBottomLeftRadius: 'none',
    },
    '.rdg-row:last-child .rdg-cell:last-child': {
      borderBottomLeftRadius: 'lg',
      borderBottomRightRadius: 'none',
    },
  },
  '.rdg-cell': {
    contain: 'size layout style paint',
    borderRight: 'none',
    borderInlineEnd: 'none',
    borderBottom: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    "&[aria-selected='true']": {
      outline: 0,
      borderRadius: '14px',
      borderWidth: '1px',
      borderColor: 'primary.200',
      boxShadow: '0px 1px 2px rgba(35, 174, 188, 0.05), 0px 0px 0px 4px rgba(35, 174, 188, 0.2);',
    },
    '&:first-of-type': {
      boxShadow: 'none',
      borderInlineStart: '1px solid var(--rdg-border-color)',
    },
    '&:last-child': {
      borderInlineEnd: '1px solid var(--rdg-border-color)',
    },
  },
  '.rdg-cell-error': {
    backgroundColor: 'var(--rdg-error-cell-background-color)',
  },
  '.rdg-cell-warning': {
    backgroundColor: 'var(--rdg-warning-cell-background-color)',
  },
  '.rdg-cell-info': {
    backgroundColor: 'var(--rdg-info-cell-background-color)',
  },
  '.rdg-static': {
    cursor: 'pointer',
  },
  '.rdg-static .rdg-header-row': {
    display: 'none',
    height: '40px',
  },
  '.rdg-static .rdg-cell': {
    '--rdg-selection-color': 'none',
    height: '40px',
  },
  '.rdg-example .rdg-cell': {
    '--rdg-selection-color': 'none',
    borderBottom: 'none',
  },

  '.rdg-radio': {
    display: 'flex',
    alignItems: 'center',
  },
  '.rdg-checkbox': {
    '--rdg-selection-color': 'none',
    display: 'flex',
    alignItems: 'center',
  },
}
