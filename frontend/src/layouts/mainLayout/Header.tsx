import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const MainHeader = () => {
  const { isAuthenticated, logoutHandler } = useAuth();

  return (
    <header>
      <h2>LOGO</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-tasks">My Tasks</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
