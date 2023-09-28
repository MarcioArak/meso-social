import { createContext, useState, useEffect } from "react";
import profile from "./../assets/pictures/Profile.jpg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = () => {
    // TO DO
    setCurrentUser({
      id: 1,
      name: "Marcio Arakaki",
      profilePic: profile,
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
