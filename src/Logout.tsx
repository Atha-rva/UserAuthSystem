import { useAuth } from "./AuthContext";
import "./Logout.css";

const Logout = () => {
  const { logout } = useAuth();

  return <button className="logout-button" onClick={logout}>Logout</button>;
};

export default Logout;
