import { createContext, useState } from 'react'

interface IModal {
  showModal: boolean
  open: () => void
  close: () => void
}

export const ModalContext = createContext<IModal>({
  showModal: false,
  open: () => void 0,
  close: () => void 0,
})

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false)
  const open = () => setShowModal(true)
  const close = () => setShowModal(false)
  return (
    <ModalContext.Provider value={{ showModal, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}
