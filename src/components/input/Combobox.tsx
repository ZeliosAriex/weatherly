import { Combobox } from '@headlessui/react'
import { IconCheck, IconSelector } from '@tabler/icons-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

interface ComboBoxProps<T> {
  items: T[]
  itemToString: (item: T) => string
  itemToKey: (item: T) => string | number
  label: string
  value?: T | string | undefined
  onChange: (value: T) => void
  loading?: boolean
  selectOnFocus?: boolean
}

const ComboBox = <T,>(props: ComboBoxProps<T>) => {
  const {
    items,
    itemToString,
    itemToKey,
    label,
    value = '',
    onChange,
    loading,
    selectOnFocus = false,
  } = props

  const { t } = useTranslation()
  const [query, setQuery] = useState('')

  // Filter items based on the query input by the user
  const filteredItems: T[] =
    query === ''
      ? items
      : items.filter((item) =>
          itemToString(item).toLowerCase().includes(query.toLowerCase()),
        )

  // If loading, display the ComboBoxSkeleton component
  if (loading) return <ComboBoxSkeleton />

  return (
    <Combobox as='div' value={value} onChange={onChange}>
      <Combobox.Label className='block text-sm font-medium leading-6 text-gray-900'>
        {label}
      </Combobox.Label>
      <div className='relative mt-2'>
        <Combobox.Input
          className='text-sm w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-500'
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          onFocus={(event) => {
            if (selectOnFocus) event.target.select()
          }}
          displayValue={itemToString}
          placeholder={!value ? t('startTyping') : undefined}
        />
        <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
          <IconSelector className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </Combobox.Button>

        {filteredItems.length > 0 && (
          <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm'>
            {filteredItems.map((item) => (
              <Combobox.Option
                key={itemToKey(item)}
                value={item}
                className={({ active }) =>
                  twMerge(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-orange-500 text-white' : 'text-gray-900',
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={twMerge(
                        'block truncate',
                        selected ? 'font-semibold' : '',
                      )}
                    >
                      {itemToString(item)}
                    </span>

                    {selected && (
                      <span
                        className={twMerge(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-orange-500',
                        )}
                      >
                        <IconCheck className='h-5 w-5' aria-hidden='true' />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}

// Skeleton loader for the ComboBox component
const ComboBoxSkeleton = () => (
  <div>
    <div className='bg-gray-300 h-5 w-2/12 mb-3 rounded animate-pulse' />
    <div className='relative mt-2'>
      <div className='bg-gray-300 h-7 w-full rounded animate-pulse' />
    </div>
  </div>
)

export default ComboBox
