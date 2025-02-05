import { useState } from "react";
import { useAuth } from "./AuthContext";
import "./Signup.css";

const Signup = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      alert("Signup successful! Check your email for verification.");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="signup-container">
        <h1 className="auth-title">User Authentication System</h1> 
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="signup-input"
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="signup-input"
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
