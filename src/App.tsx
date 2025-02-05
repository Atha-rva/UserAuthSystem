import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import ResetPassword from "./ResetPassword";
import UpdatePassword from "./UpdatePassword";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
