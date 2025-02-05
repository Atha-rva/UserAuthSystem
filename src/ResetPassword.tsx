import { useState } from "react";
import { useAuth } from "./AuthContext";
import "./ResetPassword.css";

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2 className="reset-title">Reset Password</h2>
        <form onSubmit={handleReset} className="reset-form">
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="reset-input"
            />
          </div>
          <button type="submit" className="reset-button">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
