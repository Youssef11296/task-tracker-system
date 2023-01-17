// components
import { HomeComponent } from "../components/pagesComponents/homeComponents";
// styles
import "../styles/tasks.scss";
import "../styles/home.scss";

const HomePage = () => {
  return (
    <div className="home-page page container">
      <HomeComponent />
    </div>
  );
};

export default HomePage;
