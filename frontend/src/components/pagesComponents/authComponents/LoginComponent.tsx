// hooks & modules
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../context";
// redux
import { loginUser } from "../../../context/actions/actions";

const LoginComponent = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (values: any) => {
    console.log(values);

    const { email, password } = values;
    dispatch(loginUser(email, password));
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
