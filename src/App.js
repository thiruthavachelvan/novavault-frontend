import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="//reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

    </Router>

  );

}

export default App;