// hooks & modules
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../context/actions/authActions";
import { AppDispatch } from "../../../context";
import { ErrorMessage } from "@hookform/error-message";

const RegisterComponent = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (values: any) => {
    console.log(values);

    const { username, email, password } = values;
    dispatch(registerUser(username, email, password));
  };

  return (
    <div className="auth-component register">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <div className="input-field flex-column">
            <label htmlFor="username">User name</label>
            <input
              type="text"
              placeholder="Ex. John Doe"
              {...register("username", {
                required: "Username is required.",
                minLength: 3,
                maxLength: 30,
              })}
            />
          </div>
          <span className="error">
            <ErrorMessage errors={errors} name="username" />
          </span>
        </div>
        <div className="input-container">
          <div className="input-field flex-column">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Ex. john@domain.com"
              {...register("email", { required: "Email is required." })}
            />
          </div>
          <span className="error">
            <ErrorMessage errors={errors} name="email" />
          </span>
        </div>
        <div className="input-container">
          <div className="input-field flex-column">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Ex. youraccountpassword"
              {...register("password", { required: "Password is required." })}
            />
          </div>
          <span className="error">
            <ErrorMessage errors={errors} name="password" />
          </span>
        </div>

        <button
          type="submit"
          disabled={
            (errors.username || errors.email || errors.password)?.type
              ? true
              : false
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterComponent;
