import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="auth-component register">
      <h2>Register Form</h2>
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
