import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddServices from './Pages/DashboardPage/AdminDashboard/AddServices/AddServices';
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
            <AddServices></AddServices>
          </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
