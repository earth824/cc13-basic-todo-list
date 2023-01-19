import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true);
    }
  }, []);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
