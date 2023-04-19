import { useState } from 'react'
import { HOC } from '../components/hoc/HOC'
import { Select } from '../components/select/Select'
import { IData, IProps } from '../components/select/select.model'
export function SelectPage() {
  const [selectedData, setSelectedData] = useState<IData[]>([])
  const [selectedData2, setSelectedData2] = useState<IData[]>([])

  const selectProps: IProps = {
    data: [
      { id: 1, value: 'React' },
      { id: 2, value: 'Angular' },
      { id: 3, value: 'Vue' },
    ],
    placeholder: 'Select JS framework',
    selectedData: selectedData,
    onSelectData: setSelectedData,
    clear: true,
  }

  return (
    <>
      <h1>Select</h1>
      {HOC(Select, selectProps)}
    </>
  )
}
