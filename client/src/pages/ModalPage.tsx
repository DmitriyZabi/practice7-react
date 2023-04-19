import { useContext } from 'react'
import { Modal } from '../components/modal/Modal'
import { ModalContext } from '../components/modal/ModalContext'

export function ModalPage() {
  const { open } = useContext(ModalContext)
  const openModalClickhandler = () => {
    open()
  }
  return (
    <>
      <h1>Modal</h1>
      <button onClick={openModalClickhandler}>Open modal</button>
      <Modal>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
        laboriosam ex nemo voluptas provident ipsum adipisci minus vero
        doloribus ipsa explicabo iste repellendus beatae ducimus, aperiam dicta
        temporibus eligendi totam? Maiores molestias impedit necessitatibus illo
        accusantium repellat aliquid rem mollitia laudantium. Esse eveniet culpa
        ipsa ad iure repudiandae id?
      </Modal>
    </>
  )
}
