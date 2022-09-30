import { Route, Routes } from 'react-router-dom';
import RegisterAdmin from '../pages/RegisterAdmin/RegisterAdmin';
import Notfound from '../pages/Notfound';
import Panel from '../pages/Panel';
import Petlist from '../pages/Petlist';
import Dashboard from '../pages/Dashboard';
import Adoptions from '../pages/Adoptions';
import Requests from '../pages/Requests';
import Reviews from '../pages/Reviews';
import Settings from '../pages/Settings';
import LoginForm from '../pages/Home/LoginForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/register" element={<RegisterAdmin />} />
        <Route path="/dashboard/*" element={<Panel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="petlist" element={<Petlist />} />
          <Route path="adoptions" element={<Adoptions />} />
          <Route path="requests" element={<Requests />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App;
