// hooks & modules
import { Modal, Box, Typography } from "@mui/material";
import { MODAL_STYLE } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../context";
import { setSelectedTask } from "../../../context/actions/tasksActions";

interface Props {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const TaskModal: React.FC<Props> = ({ onClose, open }) => {
  const { selectedTask } = useSelector((state: RootState) => state.tasks);

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
          <Typography
            sx={{ textAlign: "center", mb: 2 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {selectedTask?.taskName}
          </Typography>
          <Typography
            variant="caption"
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center", display: "block" }}
          >
            {selectedTask?.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default TaskModal;
