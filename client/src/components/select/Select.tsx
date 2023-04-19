import { useState } from 'react'
import { IProps, selectDefaultProps } from './select.model'
import './select.scss'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown as ArrowIcon } from '@fortawesome/free-solid-svg-icons'

export function Select(props: IProps) {
  props = { ...selectDefaultProps, ...props }

  const [opened, setOpened] = useState<boolean>(false)

  const selectClasses = ['select', opened ? 'select-opened' : ''].filter(
    (x) => x !== ''
  )

  const open = () => {
    setOpened(true)
  }

  const close = () => {
    setOpened(false)
  }

  const toggle = () => {
    opened ? close() : open()
  }

  const select = (id: number) => {
    props.onSelectData(props.data.filter((x) => x.id === id))
    close()
  }

  const clear = () => {
    props.onSelectData([])
    close()
  }

  return (
    <div className={selectClasses.join(' ')}>
      <div className="select__input" onClick={toggle}>
        <div className="select__input-value">
          {props.selectedData.length === 0
            ? props.placeholder
            : props.selectedData[0].value}
        </div>
        <FontAwesomeIcon icon={ArrowIcon} className="select__arrow" />
      </div>
      {opened && <div className="select__backdrop" onClick={close}></div>}
      <CSSTransition
        in={opened}
        classNames="select__dropdown"
        timeout={200}
        unmountOnExit
      >
        <div className="select__dropdown disable-close-animation">
          <ul>
            <>
              {props.clear && <li onClick={clear}>None</li>}
              {props.data.map((item) => (
                <li key={item.id} onClick={() => select(item.id)}>
                  {item.value}
                </li>
              ))}
            </>
          </ul>
        </div>
      </CSSTransition>
    </div>
  )
}
