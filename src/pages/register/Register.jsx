import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Me So Social</h1>
          <p>
            Welcome to Me So Social. This application is a social media page
            with the purpose of learning to create a social media page and how
            to manage it using React.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
