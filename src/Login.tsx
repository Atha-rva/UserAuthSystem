import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import "./Login.css";  // Add this import

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login successful!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="login-input"
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <Link to="/reset-password" className="forgot-password">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
