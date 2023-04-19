export interface IProps {
  data: IData[]
  selectedData: IData[]
  onSelectData: (data: IData[]) => void
  placeholder: string
  clear?: boolean
}

export const selectDefaultProps: IProps = {
  data: [],
  selectedData: [],
  onSelectData: () => void 0,
  placeholder: '',
  clear: false,
}

export interface IData {
  id: number
  value: string
}
