// hooks & modules
import { useAuth } from "../../../hooks/useAuth";
import { useTasks } from "../../../hooks/useTasks";
import { useToast } from "../../../hooks/useToast";
import { useNavigate } from 'react-router-dom'
// mui & styles
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { MODAL_STYLE } from "../../../utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../context";

interface Props {
  open: boolean;
  onClose: () => void;
  question: string;
  purpose: CONFIRMATION_PURPOSE
}

const ConfirmComponent: React.FC<Props> = ({
  purpose,
  question,
  open,
  onClose,
}) => {
  const { logoutHandler } = useAuth();
  const { deleteTaskHandler } = useTasks();

  const navigate = useNavigate()

  const tasksState = useSelector((state: RootState) => state.tasks);

  const onClickYes = () => {
    switch (purpose) {
      case "DELETE_TASK":
        tasksState?.selectedTask
          ? deleteTaskHandler(tasksState?.selectedTask?._id)
          : useToast("error", "Task ID is required.");
        break;
      case "LOGOUT":
        logoutHandler();
        navigate('/')
        break;
      default:
        return 0;
    }

    onClose();
  };

  const onClickNo = () => onClose();

  return (
    <Modal
      sx={{ background: "rgba(0,0,0,.75)" }}
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
          <Button
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
            onClick={onClickNo}
          >
            No, cancel.
          </Button>
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize" }}
            onClick={onClickYes}
          >
            Yes, I'm sure.
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ConfirmComponent;
