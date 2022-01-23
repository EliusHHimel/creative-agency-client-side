
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddServices from './Pages/DashboardPage/AdminDashboard/AddServices/AddServices';
import MakeAdmin from './Pages/DashboardPage/AdminDashboard/MakeAdmin/MakeAdmin';
import ServiceList from './Pages/DashboardPage/AdminDashboard/ServiceList/ServiceList';
import DashboardRoot from './Pages/DashboardPage/DashboardRoot/DashboardRoot';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/LoginPage/Login';
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute';
import Signup from './Pages/SignupPage/Signup';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/dashboard' element={<ProtectedRoute>
            <DashboardRoot></DashboardRoot>
          </ProtectedRoute>}>
            <Route path='serviceList' element={<ServiceList />} />
            <Route path='addService' element={<AddServices />} />
            <Route path='makeAdmin' element={<MakeAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
