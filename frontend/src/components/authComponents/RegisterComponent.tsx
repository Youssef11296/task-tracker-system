import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../context/actions/actions";
import { AppDispatch } from "../../context";

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
    dispatch(registerUser({ username, email, password }));
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
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
          </div>
          {errors.username?.type ? (
            <span className="error">
              User name is required and must contain in range from 3 to 30
              letters.
            </span>
          ) : null}
        </div>
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
