import { Box, Dialog, Flex, Heading, Text } from "@chakra-ui/react"
import type React from "react"
import { ContinueButton } from "../../../components/ContinueButton"
import { FadingWrapper } from "../../../components/FadingWrapper"
import { useRsi } from "../../../hooks/useRsi"
import type { themeOverrides } from "../../../theme"
import type { Column, Columns } from "../MatchColumnsStep"

type ColumnGridProps<T extends string> = {
  columns: Columns<T>
  userColumn: (column: Column<T>) => React.ReactNode
  templateColumn: (column: Column<T>) => React.ReactNode
  onContinue: (val: Record<string, string>[]) => void
  onBack?: () => void
  isLoading: boolean
}

export type Styles = (typeof themeOverrides)["components"]["MatchColumnsStep"]["baseStyle"]

export const ColumnGrid = <T extends string>({
  columns,
  userColumn,
  templateColumn,
  onContinue,
  onBack,
  isLoading,
}: ColumnGridProps<T>) => {
  const { translations } = useRsi()

  return (
    <>
      <Dialog.Body flexDir="column" p={8} overflow="auto">
        <Heading css={{ color: "textColor", mb: 8, fontSize: "3xl" }}>{translations.matchColumnsStep.title}</Heading>
        <Flex
          flex={1}
          display="grid"
          gridTemplateRows="auto auto auto 1fr"
          gridTemplateColumns={`0.75rem repeat(${columns.length}, minmax(18rem, auto)) 0.75rem`}
        >
          <Box gridColumn={`1/${columns.length + 3}`}>
            <Text
              css={{
                fontSize: "2xl",
                lineHeight: 8,
                fontWeight: "semibold",
                color: "textColor",
              }}
            >
              {translations.matchColumnsStep.userTableTitle}
            </Text>
          </Box>
          {columns.map((column, index) => (
            <Box gridRow="2/3" gridColumn={`${index + 2}/${index + 3}`} pt={3} key={column.header + index}>
              {userColumn(column)}
            </Box>
          ))}
          <FadingWrapper gridColumn={`1/${columns.length + 3}`} gridRow="2/3" />
          <Box gridColumn={`1/${columns.length + 3}`} mt={7}>
            <Text
              css={{
                fontSize: "2xl",
                lineHeight: 8,
                fontWeight: "semibold",
                color: "textColor",
              }}
            >
              {translations.matchColumnsStep.templateTitle}
            </Text>
          </Box>
          <FadingWrapper gridColumn={`1/${columns.length + 3}`} gridRow="4/5" />
          {columns.map((column, index) => (
            <Box
              gridRow="4/5"
              gridColumn={`${index + 2}/${index + 3}`}
              key={column.header + index}
              py="1.125rem"
              pl={2}
              pr={3}
            >
              {templateColumn(column)}
            </Box>
          ))}
        </Flex>
      </Dialog.Body>
      <ContinueButton
        isLoading={isLoading}
        onContinue={onContinue}
        onBack={onBack}
        title={translations.matchColumnsStep.nextButtonTitle}
        backTitle={translations.matchColumnsStep.backButtonTitle}
      />
    </>
  )
}
