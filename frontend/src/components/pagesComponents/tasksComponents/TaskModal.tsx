// hooks & modules
import { Modal, Box, Typography, Chip } from "@mui/material";
import { MODAL_STYLE, TASK_SATUS } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../context";
import { setSelectedTask } from "../../../context/actions/tasksActions";

interface Props {
  open: boolean;
  onClose: () => void;
  onOpen?: () => void;
}

const TaskModal: React.FC<Props> = ({ onClose, open }) => {
  const tasksState = useSelector((state: RootState) => state.tasks);

  const dispatch: AppDispatch = useDispatch();

  const closeHandler = () => {
    dispatch(setSelectedTask(null));
    onClose();
  };

  return (
    <div>
      <Modal
        sx={{ background: "rgba(0,0,0,.75)" }}
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={MODAL_STYLE}>
          <Chip label={tasksState?.selectedTask?.status}
            sx={{
              fontWeight: 900,
              padding: '1.2rem 1rem',
              position: 'relative',
              left: '70%',
              mb: 2,
              color: tasksState?.selectedTask?.status === TASK_SATUS.TODO ? "#000" : '#fff',
              background: tasksState?.selectedTask?.status === TASK_SATUS.COMPLETED ? '#6ab04c'
                : tasksState?.selectedTask?.status === TASK_SATUS.IN_PROGRESS ? 'rgb(45, 159, 217)' : ''
            }} />
          <Typography
            sx={{ textAlign: "center", mb: 2 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {tasksState?.selectedTask?.taskName}
          </Typography>
          <Typography
            variant="caption"
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center", display: "block" }}
          >
            {tasksState?.selectedTask?.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default TaskModal;
