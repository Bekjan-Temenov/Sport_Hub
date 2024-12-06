import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './router'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter >
      <MyRoutes/>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App