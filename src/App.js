import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import "./style2.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  console.log(darkMode);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div className="page" style={{ display: "flex" }}>
          <LeftBar />
          <div className="midPage" style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/meso-social/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/meso-social",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/meso-social/login",
      element: <Login />,
    },
    {
      path: "/meso-social/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// Modules to install
//
// 1. npm install react-router-dom
// 2. npm install sass
// 3. npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
// 4. npm install gh-pages --save-dev
