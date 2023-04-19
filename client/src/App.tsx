import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom'
import './scss/styles.scss'
import { HomePage } from './pages/HomePage'
import { ItemsPage } from './pages/ItemsPage'
import { Frame } from './components/frame/Frame'
import { ModalPage } from './pages/ModalPage'
import { SelectPage } from './pages/SelectPage'

function App() {
  return (
    <Router>
      <Frame>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </Frame>
    </Router>
  )
}

export default App
