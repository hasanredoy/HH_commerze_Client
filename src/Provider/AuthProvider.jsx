import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [logoutModal, setLogoutModal] = useState(false);

  const [user, setUser] = useState({});
  useEffect(()=>{
    const lsUser = localStorage.getItem("user")
    const parsedUser = JSON.parse(lsUser);
      setUser(parsedUser)
  },[])
  console.log(user);
  const authInfo = {
    user,
    setUser,
    logoutModal,
    setLogoutModal,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
