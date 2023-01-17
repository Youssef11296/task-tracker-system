// hooks & modules
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import { Box } from "@mui/material";
// components
import NotAuthComponent from "./components/sharedComponents/NotAuthComponent";
// redux
import { useSelector } from "react-redux";
import { RootState } from "./context";
// configs
import { ROUTES } from "./configs/routesConfig";

const App = () => {
  const { isAuthenticated, getMeHandler, user } = useAuth();

  useEffect(() => {
    isAuthenticated && !user && getMeHandler();
  }, [isAuthenticated, user]);

  const { loading } = useSelector((state: RootState) => state.auth)


  if (loading) return (
    <div className="home-page page container">
      <Box sx={{ margin: 'auto', width: 'fit-content' }}>
        <img src="../src/assets/images/spinner.gif" alt="loading" />
      </Box>
    </div>
  )

  if (!isAuthenticated || !user)
    return (
      <div className="home-page page container">
        <NotAuthComponent />
      </div>
    );

  return (
    <div className="app">
      <Routes>
        {
          ROUTES.map(({ path, Page }) => (
            <Route path={path} element={<Page />} />
          ))
        }
      </Routes>
    </div>
  );
};

export default App;
