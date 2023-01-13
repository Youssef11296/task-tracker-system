// Hooks & modules
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
// components
import { HomeComponent } from "../components/pagesComponents/homeComponents";
import NotAuthComponent from "../components/sharedComponents/NotAuthComponent";
// styles
import "../styles/home.scss";

const HomePage = () => {
  const { isAuthenticated, getMeHandler, user } = useAuth();

  useEffect(() => {
    isAuthenticated && !user && getMeHandler();
  }, [isAuthenticated, user]);

  if (!isAuthenticated)
    return (
      <div className="home-page page container">
        <NotAuthComponent />
      </div>
    );

  return (
    <div className="home-page page container">
      Welcome, {user?.username}
      <HomeComponent />
    </div>
  );
};

export default HomePage;
