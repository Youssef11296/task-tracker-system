import {
  LoginComponent,
  RegisterComponent,
} from "../../pagesComponents/authComponents";
import { useAuth } from "../../../hooks/useAuth";
import { Button, Grid, Typography } from "@mui/material";

const NotAuthComponent = () => {
  const {
    openLogin,
    openRegister,
    onOpenLoginForm,
    onOpenRegisterForm,
    onCloseLoginForm,
    onCloseRegisterForm,
  } = useAuth();

  return (
    <div className="home-not-auth">
      <Grid container justifyContent="center" alignItems="center">
        <Typography variant="h4">It seems you're not authenticated!</Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Button
            variant="contained"
            onClick={onOpenLoginForm}
            sx={{ mr: 2, textTransform: "capitalize" }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            onClick={onOpenRegisterForm}
            sx={{ textTransform: "capitalize" }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
      {openLogin ? (
        <LoginComponent open={openLogin} onClose={onCloseLoginForm} />
      ) : openRegister ? (
        <RegisterComponent open={openRegister} onClose={onCloseRegisterForm} />
      ) : null}
    </div>
  );
};

export default NotAuthComponent;
