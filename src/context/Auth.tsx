import { useContext, createContext, useState, ReactNode, useEffect } from "react";
import { decodeToken, isExpired } from "react-jwt";

const useAuthController = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  const checkJwtValid = (): boolean => {
    return decodeToken(localStorage.getItem("token") || "") !== null && !isExpired(localStorage.getItem("token") || "");
  };

  useEffect(() => {
    if (checkJwtValid()) {
      setIsLogin(true);
      setAuthLoading(false);
    } else {
      setAuthLoading(false);
    }
  }, []);

  return {
    isLogin,
    setIsLogin,
    authLoading,
  };
};

const AuthContext = createContext<ReturnType<typeof useAuthController>>({
  isLogin: false,
  setIsLogin: () => {},
  authLoading: true,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <AuthContext.Provider value={useAuthController()}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
