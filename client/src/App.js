import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Login from './pages/authentication/login';
import Signup from './pages/authentication/signup';
import ForgetPassword from './pages/authentication/forgotPassword';
import ResetPassword from './pages/authentication/resetPassword';
import IsActive from './pages/authentication/isActive';
import Dashboard from './pages/private/dashboard';
import Layout from "./layouts/layout"

function App() {

  const protectRoute = () => {
    return !!localStorage.getItem("token");
  };

  const ProtectedRoute = ({ children }) => {
    return protectRoute() ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
        <Route path='/active' element={<IsActive />} />
        <Route path='/' element={<Layout />}>
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
