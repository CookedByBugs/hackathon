import axios from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Loader from "../../components/Loader";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState({});
  const fetchProfile = useCallback(async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return setIsLoading(false);
    // console.log(token);
    await axios
      .get("http://localhost:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("res.data ", res.data);
        setIsAuth(true);
        setData(res.data);
        setUser(res.data.user);
        setSession(res.data.session);
        
        // console.log("session: ", res.data.session);
      })
      .catch((error) => {
        console.error("Invalid token", error);
        setIsAuth(false);
        setIsLoading(false);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuth(false);
    setUser(null);
  };
  useEffect(() => {
    fetchProfile();
    if (session?.exp && session.exp * 1000 <= Date.now()) {
      handleLogout();
    }
  }, [isAuth]);

  if (isLoading) return <Loader />;
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, user, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
