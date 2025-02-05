import { useState } from "react";
import { supabase } from "./supabase";
import { useSearchParams } from "react-router-dom";
import "./UpdatePassword.css";

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();

  const handlePasswordReset = async () => {
    const access_token = searchParams.get("eyJhbGciOiJIUzI1NiIsImtpZCI6ImpoM2FCNkJUM1FGaldQeDIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2Vucmt5bGpteXBlbGxodHFld2RsLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI4ZDBhMDg3Ni0zYzVmLTQ5NzQtODVjYy04M2YzMjk5OGEyMjkiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM4NzIwMDU5LCJpYXQiOjE3Mzg3MTY0NTksImVtYWlsIjoiZGVzaG11a2hhdGhhcnZhMDI0QGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJkZXNobXVraGF0aGFydmEwMjRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiOGQwYTA4NzYtM2M1Zi00OTc0LTg1Y2MtODNmMzI5OThhMjI5In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib3RwIiwidGltZXN0YW1wIjoxNzM4NzE2NDU5fV0sInNlc3Npb25faWQiOiI5ZjgyNDc3ZS1iNGYwLTRmYmUtOTU4ZC0xNjFhNWNiNzliOWQiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.q4a0C-zv22pX1Z2-p3jxGnBSpRrGdl1UtIqqkg3tGVo&expires_at=1738720059&expires_in=3600&refresh_token=GITbD_5mlX7HGw-0PnF0iA&token_type=bearer&type=recovery"); 
    if (!access_token) {
      setMessage("Invalid or expired reset link.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password reset successful! You can now log in.");
    }
  };

  return (
    <div className="update-password-container">
      <div className="update-password-card">
        <h2 className="update-password-title">Reset Your Password</h2>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="update-password-input"
          />
        </div>
        <button onClick={handlePasswordReset} className="update-password-button">
          Update Password
        </button>
        {message && <p className="update-password-message">{message}</p>}
      </div>
    </div>
  );
};

export default UpdatePassword;
