// hooks & modules
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../context/actions/authActions";
import { AppDispatch } from "../../../context";
import { ErrorMessage } from "@hookform/error-message";
import { Box, Button, Modal } from "@mui/material";
import { MODAL_STYLE } from "../../../utils/constants";
import { useAuthForms } from "../../../hooks/useAuthForms";

interface Props {
  open: boolean;
  onClose: () => void;
}

const RegisterComponent: React.FC<Props> = ({ open, onClose }) => {
  const { registerFormResolver } = useAuthForms()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<RegisterFormValues>({ resolver: registerFormResolver });

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (values: any) => {
    console.log(values, errors);

    const { username, email, password } = values;
    dispatch(registerUser(username, email, password));
  };

  return (
    <Modal
      sx={{ background: "rgba(0,0,0,.75)" }}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={MODAL_STYLE}>
        <div className="auth-component register">
          <h2>Register Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <div className="input-field flex-column">
                <label htmlFor="username">User name</label>
                <input
                  type="text"
                  placeholder="Ex. John Doe"
                  {...register("username")}
                />
              </div>
              <span className="error">
                {/* <ErrorMessage errors={errors} name="username" /> */}
                {errors?.username ? <p>{errors?.username?.message}</p> : null}
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
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password must contain 6 letters at least."
                    }
                  })}
                />
              </div>
              <span className="error">
                <ErrorMessage errors={errors} name="password" />
              </span>
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{
                margin: "auto",
                display: "block",
                textTransform: "capitalize",
              }}
            >
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default RegisterComponent;
