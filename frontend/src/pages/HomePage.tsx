import { HomeComponent } from "../components/homeComponents";
import {
  LoginComponent,
  RegisterComponent,
} from "../components/authComponents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../hooks/useAuth";
import NotAuthComponent from "../shared/components/NotAuthComponent";

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <NotAuthComponent />;

  return (
    <div className="home-page">
      <HomeComponent />
      <ToastContainer />
    </div>
  );
};

export default HomePage;
