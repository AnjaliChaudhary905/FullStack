import { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuth from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const { fetchUser } = useAuth();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      fetchUser().catch(() => {});
    }
  }, []);

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
};

export default App;