import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsX';
import Register from './Pages/Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import Login from './Pages/Login.jsx';
import EmailVerification from './Pages/Verify.jsx';
import ForgotPassword from './Pages/Forgotpassword.jsx';
import ResetPassword from './Pages/Resetpage.jsx';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<ProtectedRoute component={<Home />} />} />
     <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />
     <Route path="/verify/:token" element={<EmailVerification />} />
     <Route path="/forgot-password" element={<ForgotPassword />} />
     <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
   </BrowserRouter>  
   );
};

export default App
