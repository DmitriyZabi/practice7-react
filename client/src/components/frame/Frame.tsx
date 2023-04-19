import './frame.scss'
import { Nav } from './nav/Nav'

interface IFrame {
  children: React.ReactNode
}

export function Frame({ children }: IFrame) {
  return (
    <div className="frame">
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}
