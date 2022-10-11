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
import Profile from '../pages/Profile';
import { ScaleFade } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ScaleFade initialScale={0.9} in="false">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterAdmin />} />
          <Route path="/dashboard/*" element={<Panel />}>
            <Route path="" element={<Dashboard />} />
            <Route path="petlist" element={<Petlist />} />
            <Route path="adoptions" element={<Adoptions />} />
            <Route path="requests" element={<Requests />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </ScaleFade>
    </div>
  )
}

export default App;
