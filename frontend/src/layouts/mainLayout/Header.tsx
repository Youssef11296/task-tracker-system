import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../context/actions/actions";
import { RootState } from "../../context";
const MainHeader = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const logoutHandler = () => dispatch(logoutUser());

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
