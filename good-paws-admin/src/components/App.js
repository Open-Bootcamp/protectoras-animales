import Dashboard from '../pages/Dashboard'
import HomeLogin from '../pages/Home/HomeLogin';
import RegisterAdmin from '../pages/RegisterAdmin/RegisterAdmin';
import { Routes, Route } from "react-router-dom";
import '../styles/App.css';


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

export default App;
