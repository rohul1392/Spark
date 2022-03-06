import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLogedin, setIsLogedin] = useState(false);
  const updateLoginStatus = (status) => {
    setIsLogedin(status)
  }
  return (
    <AuthContext.Provider value={{ isLogedin, updateLoginStatus }}>
      {props.children}
    </AuthContext.Provider>
  );
}
 
export default AuthContextProvider;