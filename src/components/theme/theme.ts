import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTextStyles,
  defineTokens,
  ThemingConfig,
} from "@chakra-ui/react"
import { buttonRecipe } from "./recipes/button"
import { cardRecipe } from "./recipes/card"
import { checkboxRecipe } from "./recipes/checkbox"
import { dialogRecipe } from "./recipes/dialog"
import { drawerRecipe } from "./recipes/drawer"
import { excelUploader } from "./recipes/excelUploader"
import { fieldRecipe } from "./recipes/field"
import { inputRecipe, numberInputRecipe } from "./recipes/input"
import { linkRecipe } from "./recipes/link"
import { menuRecipe } from "./recipes/menu"
import { progressRecipe } from "./recipes/progress"
import { stepsRecipe } from "./recipes/steps"
import { switchRecipe } from "./recipes/switch"
import { tableRecipe } from "./recipes/table"
import { tabsRecipe } from "./recipes/tabs"
import { tooltipRecipe } from "./recipes/tooltip"

const tokens = defineTokens({
  breakpoints: {
    sm: { value: "30em" }, // 480px
    md: { value: "48em" }, // 768px
    md_lg: { value: "59.375em" },
    lg: { value: "62em" }, // 992px
    xl: { value: "80em" }, // 1280px
    "2xl": { value: "96em" }, // 1536px
  },
  fonts: {
    heading: { value: "var(--font-nekst), var(--font-cairo)" },
    body: { value: "var(--font-nekst), var(--font-cairo)" },
  },
  colors: {
    primary: {
      100: { value: "#6490EB" },
      200: { value: "#00BFB2" },
      300: { value: "#003B5C" },
      400: { value: "#FF5630" },
      500: { value: "#00BFB2" },
      600: { value: "#5858FF" },
    },
    secondary: {
      100: { value: "#DEF0F8" },
      200: { value: "#F4F8FF" },
      300: { value: "#E0EEF5" },
      400: { value: "#FFF6F4" },
    },
    typography: {
      100: { value: "#00263A" },
      200: { value: "#4E5D78" },
      300: { value: "#8A94A6" },
      400: { value: "#B0B7C3" },
    },
    background: {
      100: { value: "#C1C7D0" },
      200: { value: "#F7F7FA" },
      300: { value: "#FAFBFC" },
      400: { value: "#FFFFFF" },
    },
    stroke: {
      100: { value: "#DADDE4" },
      200: { value: "#F7F7FA" },
      300: { value: "#FAFBFC" },
      400: { value: "#FFFFFF" },
    },
  },
})

export const theme: ThemingConfig = {
  slotRecipes: {
    dialog: dialogRecipe,
    card: cardRecipe,
    toolTip: tooltipRecipe,
    field: fieldRecipe,
    table: tableRecipe,
    tabs: tabsRecipe,
    menu: menuRecipe,
    switch: switchRecipe,
    progress: progressRecipe,
    steps: stepsRecipe,
    drawer: drawerRecipe,
    checkbox: checkboxRecipe,
    numberInput: numberInputRecipe,
  },
  recipes: {
    button: buttonRecipe,
    input: inputRecipe,
    link: linkRecipe,
  },
  textStyles: defineTextStyles({
    h1: {
      value: {
        fontSize: "2.25rem",
        lineHeight: "2.875rem",
      },
    },
    h2: {
      value: { fontSize: "1.875rem", lineHeight: "2.5rem" },
    },
    h3: {
      value: { fontSize: "1.5rem", lineHeight: "2.125rem" },
    },
    h4: {
      value: { fontSize: "1.125rem", lineHeight: "1.5rem" },
    },
    h5: {
      value: { fontSize: "0.875rem", lineHeight: "1.375rem" },
    },
    h6: {
      value: { fontSize: "0.875rem", lineHeight: "normral" },
    },
    body1: {
      value: { fontSize: "1.25rem", lineHeight: "1.875em" },
    },
    body2: {
      value: { fontSize: "1.125rem", lineHeight: "1.75em" },
    },
    body3: {
      value: { fontSize: "1rem", lineHeight: 1.625 },
    },
    body4: {
      value: { fontSize: "0.875rem", lineHeight: 1.5714285714 },
    },
    body5: {
      value: { fontSize: "0.75rem", lineHeight: "1.25em" },
    },
    tableHead1: {
      value: { fontSize: "0.6875rem", fontWeight: "500" },
    },
    tableHead2: {
      value: { fontSize: "0.625rem", fontWeight: "500" },
    },
    btnLg: {
      value: { fontSize: "1.125rem", fontWeight: "600" },
    },
    btnMd: {
      value: { fontSize: "0.875rem", fontWeight: "600" },
    },
    btnSm: {
      value: { fontSize: "0.8125rem", fontWeight: "600" },
    },
    tagMd: {
      value: { fontSize: "0.625rem", fontWeight: "600" },
    },
    tagSm: {
      value: { fontSize: "0.625rem", fontWeight: "600" },
    },
    inputLg: {
      value: { fontSize: "1rem", fontWeight: "500" },
    },
    inputMd: {
      value: { fontSize: "0.875rem", fontWeight: "500" },
    },
    inputSm: {
      value: { fontSize: "0.8125rem", fontWeight: "500" },
    },
  }),
  tokens,
  semanticTokens: {
    colors: {
      turquoise: { value: "primary.200" },
      softBlue: { value: "primary.100" },
      darkBlue: { value: "primary.300" },
      vividBlue: { value: "primary.600" },
      danger: { value: "primary.400" },
      background: {
        container: {
          value: {
            base: "{colors.background.400}",
            _dark: "rgba(25, 33, 51, 0.3)",
          },
        },
        box: {
          value: {
            base: "{colors.background.400}",
            _dark: "rgba(78, 93, 120, 0.5)",
          },
        },
      },
      border: {
        container: {
          value: {
            base: "white",
            _dark: "rgba(78, 93, 120, 0.5)",
          },
        },
        box: {
          value: {
            base: "{colors.stroke.100}",
            _dark: "rgba(78, 93, 120, 0.5)",
          },
        },
      },
      text: {
        primary: {
          value: {
            base: "{colors.primary.200}",
            _dark: "white",
          },
        },
        typo1: {
          value: {
            base: "{colors.typography.100}",
            _dark: "white",
          },
        },
        typo2: {
          value: {
            base: "{colors.typography.200}",
            _dark: "white",
          },
        },
        typo3: {
          value: {
            base: "{colors.typography.300}",
            _dark: "white",
          },
        },
      },
    },
  },
}

export const system = createSystem(
  defaultConfig,
  defineConfig({
    globalCss: {
      ":root": {
        fontSize: "calc(0.95rem + 0.0554vw) !important",
      },
      body: { transition: "all 0.2s ease-in-out" },
      // ".chakra-button": buttonRecipe.base,
      ".ps-sidebar-root.ps-collapsed": {
        width: "5em !important",
        minWidth: "5em !important",
      },
      ...excelUploader,
    },
    theme: theme,
  }),
)
