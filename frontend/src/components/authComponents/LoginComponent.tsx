import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../context";
import { loginUser } from "../../context/actions/actions";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginComponent = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const cookies = new Cookies();

  const navigate = useNavigate();

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (values: any) => {
    console.log(values);

    const { username, email, password } = values;
    dispatch(loginUser({ username, email, password }));

    const toastId = "someId";
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
      toastId,
    });
    if (!cookies.get("auth-token")) return;
    // navigate("/");
  };

  return (
    <div className="auth-component register">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <div className="input-field flex-column">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Ex. john@domain.com"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email?.type ? (
            <span className="error">Email is required and must be valid.</span>
          ) : null}
        </div>
        <div className="input-container">
          <div className="input-field flex-column">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Ex. youraccountpassword"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password?.type ? (
            <span className="error">Password is required.</span>
          ) : null}
        </div>
        <div className="form-question">
          Not have an account yet? <Link to="/auth/sign-up">Register</Link>
        </div>
        <button
          type="submit"
          disabled={(errors.email || errors.password)?.type ? true : false}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
