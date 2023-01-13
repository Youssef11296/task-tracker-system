import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import { MODAL_STYLE } from "../../utils/constants";

interface Props {
  open: boolean;
  onClose: () => void;
  question: string;
}

const ConfirmComponent: React.FC<Props> = ({ question, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={MODAL_STYLE}>
        <Typography
          sx={{ textAlign: "center", mb: 2 }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {question}
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          <Button variant="outlined" sx={{ textTransform: "capitalize" }}>
            No, cancel.
          </Button>
          <Button variant="contained" sx={{ textTransform: "capitalize" }}>
            Yes, I'm sure.
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ConfirmComponent;
