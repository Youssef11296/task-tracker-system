import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";
import TasksPage from "./pages/TasksPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <div className="app container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-tasks" element={<TasksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth/sign-up" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
