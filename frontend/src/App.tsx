// hooks & modules
import { Routes, Route } from "react-router-dom";
// pages & components
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import AboutPage from "./pages/AboutPage";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import { useSelector } from "react-redux";
import { RootState } from "./context";
import { Box } from "@mui/material";
import NotAuthComponent from "./components/sharedComponents/NotAuthComponent";

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
        <Route path="/" element={<HomePage />} />
        <Route path="/my-tasks" element={<TasksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
