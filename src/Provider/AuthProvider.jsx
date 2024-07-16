import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [LSUser, setUser] = useState(localStorage.getItem('user'));
  const user = JSON.parse(LSUser)
  console.log(user);
  const authInfo = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
