import { Box, Button, Dialog, Heading, Switch, Toaster } from "@chakra-ui/react"
import { useCallback, useMemo, useState } from "react"
import type { RowsChangeData } from "react-data-grid"
import { SubmitDataAlert } from "../../components/Alerts/SubmitDataAlert"
import { ContinueButton } from "../../components/ContinueButton"
import { Table } from "../../components/Table"
import { useRsi } from "../../hooks/useRsi"
import type { Data } from "../../types"
import { generateColumns } from "./components/columns"
import type { Meta } from "./types"
import { addErrorsAndRunHooks } from "./utils/dataMutations"

type Props<T extends string> = {
  initialData: (Data<T> & Meta)[]
  file: File
  onBack?: () => void
}

export const ValidationStep = <T extends string>({ initialData, file, onBack }: Props<T>) => {
  const { translations, fields, onClose, onSubmit, rowHook, tableHook } = useRsi<T>()

  const [data, setData] = useState<(Data<T> & Meta)[]>(initialData)

  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number | string>>(new Set())
  const [filterByErrors, setFilterByErrors] = useState(false)
  const [showSubmitAlert, setShowSubmitAlert] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)

  const updateData = useCallback(
    async (rows: typeof data, indexes?: number[]) => {
      // Check if hooks are async - if they are we want to apply changes optimistically for better UX
      if (rowHook?.constructor.name === "AsyncFunction" || tableHook?.constructor.name === "AsyncFunction") {
        setData(rows)
      }
      addErrorsAndRunHooks<T>(rows, fields, rowHook, tableHook, indexes).then((data) => setData(data))
    },
    [rowHook, tableHook, fields],
  )

  const deleteSelectedRows = () => {
    if (selectedRows.size) {
      const newData = data.filter((value) => !selectedRows.has(value.__index))
      updateData(newData)
      setSelectedRows(new Set())
    }
  }

  const updateRows = useCallback(
    (rows: typeof data, changedData?: RowsChangeData<(typeof data)[number]>) => {
      const changes = changedData?.indexes.reduce((acc, index) => {
        // when data is filtered val !== actual index in data
        const realIndex = data.findIndex((value) => value.__index === rows[index].__index)
        acc[realIndex] = rows[index]
        return acc
      }, {} as Record<number, (typeof data)[number]>)
      const realIndexes = changes && Object.keys(changes).map((index) => Number(index))
      const newData = Object.assign([], data, changes)
      updateData(newData, realIndexes)
    },
    [data, updateData],
  )

  const columns = useMemo(() => generateColumns(fields), [fields])

  const tableData = useMemo(() => {
    if (filterByErrors) {
      return data.filter((value) => {
        if (value?.__errors) {
          return Object.values(value.__errors)?.filter((err) => err.level === "error").length
        }
        return false
      })
    }
    return data
  }, [data, filterByErrors])

  const rowKeyGetter = useCallback((row: Data<T> & Meta) => row.__index, [])

  const submitData = async () => {
    const calculatedData = data.reduce(
      (acc, value) => {
        const { __index, __errors, ...values } = value
        if (__errors) {
          for (const key in __errors) {
            if (__errors[key].level === "error") {
              acc.invalidData.push(values as unknown as Data<T>)
              return acc
            }
          }
        }
        acc.validData.push(values as unknown as Data<T>)
        return acc
      },
      { validData: [] as Data<T>[], invalidData: [] as Data<T>[], all: data },
    )
    setShowSubmitAlert(false)
    setSubmitting(true)
    const response = onSubmit(calculatedData, file)
    if (response?.then) {
      response
        .then(() => {
          onClose()
        })
        .catch((err: Error) => {
          Toaster({
            status: "error",
            variant: "left-accent",
            position: "bottom-left",
            title: `${translations.alerts.submitError.title}`,
            description: err?.message || `${translations.alerts.submitError.defaultMessage}`,
            isClosable: true,
          })
        })
        .finally(() => {
          setSubmitting(false)
        })
    } else {
      onClose()
    }
  }
  const onContinue = () => {
    const invalidData = data.find((value) => {
      if (value?.__errors) {
        return !!Object.values(value.__errors)?.filter((err) => err.level === "error").length
      }
      return false
    })
    if (!invalidData) {
      submitData()
    } else {
      setShowSubmitAlert(true)
    }
  }

  return (
    <>
      <SubmitDataAlert isOpen={showSubmitAlert} onClose={() => setShowSubmitAlert(false)} onConfirm={submitData} />
      <Dialog.Body pb={0}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb="2rem" flexWrap="wrap" gap="8px">
          <Heading
            css={{
              color: "textColor",
              fontSize: "3xl",
            }}
          >
            {translations.validationStep.title}
          </Heading>
          <Box display="flex" gap="16px" alignItems="center" flexWrap="wrap">
            <Button variant="outline" size="sm" onClick={deleteSelectedRows}>
              {translations.validationStep.discardButtonTitle}
            </Button>
            <Switch.Root
              display="flex"
              alignItems="center"
              isChecked={filterByErrors}
              onChange={() => setFilterByErrors(!filterByErrors)}
            >
              <Switch.HiddenInput />
              <Switch.Control />
              <Switch.Label> {translations.validationStep.filterSwitchTitle}</Switch.Label>
            </Switch.Root>
          </Box>
        </Box>
        <Table
          rowKeyGetter={rowKeyGetter}
          rows={tableData}
          onRowsChange={updateRows}
          columns={columns}
          selectedRows={selectedRows}
          onSelectedRowsChange={setSelectedRows}
          components={{
            noRowsFallback: (
              <Box display="flex" justifyContent="center" gridColumn="1/-1" mt="32px">
                {filterByErrors
                  ? translations.validationStep.noRowsMessageWhenFiltered
                  : translations.validationStep.noRowsMessage}
              </Box>
            ),
          }}
        />
      </Dialog.Body>
      <ContinueButton
        isLoading={isSubmitting}
        onContinue={onContinue}
        onBack={onBack}
        title={translations.validationStep.nextButtonTitle}
        backTitle={translations.validationStep.backButtonTitle}
      />
    </>
  )
}
