// components
import { HomeComponent } from "../components/pagesComponents/homeComponents";
// styles
import "../styles/tasks.scss";
import "../styles/home.scss";

const HomePage = () => {
  return (
    <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
      <HomeComponent />
    </section>
  );
};

export default HomePage;
