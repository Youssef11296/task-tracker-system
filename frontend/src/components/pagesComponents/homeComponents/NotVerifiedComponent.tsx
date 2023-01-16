import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Button, Grid, Stack, Typography } from "@mui/material";
import VerificationForm from "./VerificationForm";

const NotVerifiedComponent = () => {
  const { user }: { user: User | null } = useAuth();

  const [openVerificationForm, setOpenVerificationForm] = useState<boolean>(false)
  const onOpenVerificationForm = () => setOpenVerificationForm(true)
  const onCloseVerificationForm = () => setOpenVerificationForm(false)

  return (
    <Stack>
      <Grid container flexDirection='column' justifyContent="center" alignItems="center" margin="auto">
        <Typography variant="h4">
          You're account is not verified yet!
        </Typography>
        <Button variant="contained" onClick={onOpenVerificationForm} sx={{ width: 'fit-content', mt: 3, textTransform: 'capitalize' }}>Verify Me</Button>
        <VerificationForm open={openVerificationForm} onClose={onCloseVerificationForm} />
      </Grid>
    </Stack>
  );
};

export default NotVerifiedComponent;
