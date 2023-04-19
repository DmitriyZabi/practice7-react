import { useContext } from 'react'
import './modal.scss'
import { ModalContext } from './ModalContext'
import { CSSTransition } from 'react-transition-group'

export function Modal({ children }: { children: React.ReactNode }) {
  const { showModal, close } = useContext(ModalContext)
  const closeHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLButtonElement
    if (target.dataset.type === 'backdrop') {
      close()
    }
  }
  return (
    <>
      {
        <CSSTransition
          in={showModal}
          classNames="modal"
          timeout={150}
          unmountOnExit
        >
          <div className="modal" onClick={closeHandler} data-type="backdrop">
            <div className="modal__window">
              <div className="modal__window-content">{children}</div>
            </div>
          </div>
        </CSSTransition>
      }
    </>
  )
}
