import { useSelector } from "react-redux";
import { HomeComponent } from "../components/homeComponents";
import { useAuth } from "../hooks/useAuth";
import NotAuthComponent from "../shared/components/NotAuthComponent";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../context";

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
