import {
  LoginComponent,
  RegisterComponent,
} from "../../components/authComponents";
import { useAuth } from "../../hooks/useAuth";

const NotAuthComponent = () => {
  const {
    isAuthenticated,
    openLogin,
    openRegister,
    openLoginForm,
    openRegisterForm,
  } = useAuth();

  return (
    <div className="home-not-auth">
      <>
        <p>It seems you're not authenticated!</p>
        <button onClick={openLoginForm}>Login</button>
        <button onClick={openRegisterForm}>Register</button>
      </>
      {openLogin ? (
        <LoginComponent />
      ) : openRegister ? (
        <RegisterComponent />
      ) : null}
    </div>
  );
};

export default NotAuthComponent;
