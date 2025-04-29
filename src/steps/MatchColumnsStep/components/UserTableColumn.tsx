import { Box, Flex, IconButton, Text } from "@chakra-ui/react"
import { dataAttr } from "@chakra-ui/utils"
import { CgClose, CgUndo } from "react-icons/cg"
import type { RawData } from "../../../types"
import type { Column } from "../MatchColumnsStep"
import { ColumnType } from "../MatchColumnsStep"

type UserTableColumnProps<T extends string> = {
  column: Column<T>
  entries: RawData
  onIgnore: (index: number) => void
  onRevertIgnore: (index: number) => void
}

export const UserTableColumn = <T extends string>(props: UserTableColumnProps<T>) => {
  const {
    column: { header, index, type },
    entries,
    onIgnore,
    onRevertIgnore,
  } = props
  const isIgnored = type === ColumnType.ignored
  return (
    <Box>
      <Flex px={6} justifyContent="space-between" alignItems="center" mb={4}>
        <Text css={{ bg: "secondaryBackground", px: "2rem", py: "1.5rem" }} data-ignored={dataAttr(isIgnored)}>
          {header}
        </Text>
        {type === ColumnType.ignored ? (
          <IconButton
            aria-label="Ignore column"
            onClick={() => onRevertIgnore(index)}
            size="xs"
            colorScheme="gray"
            color="textColor"
          >
            <CgUndo />
          </IconButton>
        ) : (
          <IconButton
            aria-label="Ignore column"
            onClick={() => onIgnore(index)}
            size="xs"
            colorScheme="gray"
            color="textColor"
          >
            <CgClose />
          </IconButton>
        )}
      </Flex>
      {entries.map((entry, index) => (
        <Text
          key={(entry || "") + index}
          css={{
            fontSize: "sm",
            lineHeight: 5,
            fontWeight: "medium",
            color: "textColor",
            px: 6,
            py: 4,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            ["&[data-ignored]"]: {
              color: "inactiveColor",
            },
          }}
          data-ignored={dataAttr(isIgnored)}
        >
          {entry}
        </Text>
      ))}
    </Box>
  )
}
