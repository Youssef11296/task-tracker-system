// Hooks & modules
import { useAuth } from "../hooks/useAuth";
// components
import { HomeComponent } from "../components/pagesComponents/homeComponents";
import NotAuthComponent from "../components/sharedComponents/NotAuthComponent";

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <NotAuthComponent />;

  return (
    <div className="home-page">
      <HomeComponent />
    </div>
  );
};

export default HomePage;
