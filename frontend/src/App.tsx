// hooks & modules
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import { Box, Typography } from "@mui/material";
// components
import NotAuthComponent from "./components/uiComponents/sharedComponents/NotAuthComponent";
// redux
import { useSelector } from "react-redux";
import { RootState } from "./context";
// configs
import { ROUTES } from "./configs/routesConfig";

const App = () => {
  const { isAuthenticated, getMeHandler, user } = useAuth();

  useEffect(() => {
    isAuthenticated && getMeHandler();
  }, [isAuthenticated]);

  const { loading } = useSelector((state: RootState) => state.ui)

  if (loading) return (
    <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
      <Box sx={{ margin: 'auto', width: 'fit-content' }}>
        <img src="../src/assets/images/spinner.gif" alt="loading" />
      </Box>
    </section>
  )

  if (!isAuthenticated || !user)
    return (
      <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
        <NotAuthComponent />
      </section>
    );

  return (
    <div className="app">
      <Routes>
        {
          ROUTES.map(({ path, Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))
        }
      </Routes>
    </div>
  );
};

export default App;
