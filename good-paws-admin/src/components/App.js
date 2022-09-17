import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import HomeLogin from '../pages/Home/HomeLogin'
import RegisterAdmin from '../pages/RegisterAdmin/RegisterAdmin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<HomeLogin />} />
      </Routes>
    </div>
  )
}

export default App
