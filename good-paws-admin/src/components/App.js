import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import HomeLogin from '../pages/Home/HomeLogin'
import RegisterAdmin from '../pages/RegisterAdmin/RegisterAdmin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<HomeLogin />} />
        <Route path="/register" element={<RegisterAdmin />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
