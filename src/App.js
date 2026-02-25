import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

      </Routes>

    </Router>

  );

}

export default App;