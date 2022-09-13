import HomeLogin from '../pages/Home/HomeLogin';
import RegisterAdmin from '../pages/RegisterAdmin/RegisterAdmin';
import { Routes, Route } from "react-router-dom";
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="register" element={<RegisterAdmin />} />
      </Routes>
    </div>
  )
}

export default App;
