import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<ForgotPassword />} />

        <Route path="/reset-password/:token" element={<ResetPassword />} />

      </Routes>

    </Router>

  );

}

export default App;