// Hooks & modules
import { useAuth } from "../hooks/useAuth";
// components
import { HomeComponent } from "../components/pagesComponents/homeComponents";
import NotAuthComponent from "../components/sharedComponents/NotAuthComponent";
import { useEffect } from "react";

const HomePage = () => {
  const { isAuthenticated, getMeHandler } = useAuth();

  useEffect(() => {
    getMeHandler();
  }, []);

  if (!isAuthenticated) return <NotAuthComponent />;

  return (
    <div className="home-page">
      <HomeComponent />
    </div>
  );
};

export default HomePage;
