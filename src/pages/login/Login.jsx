import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to MeSo Social.</h1>
          <p>
            Welcome to Me-so-Social. This application is a social media page
            with the purpose of learning to create a social media application
            and how to manage it using React.
          </p>
          <span>Don't have an account?</span>
          <Link to="/meso-social/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to={`/meso-social/`}>
              <button onClick={login}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
