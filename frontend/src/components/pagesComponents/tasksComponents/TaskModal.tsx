// hooks & modules
import { Modal, Box, Typography } from "@mui/material";
import { MODAL_STYLE } from "../../../utils/constants";

interface Props {
  selectedTask: Task | null;
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const TaskModal: React.FC<Props> = ({ onClose, open, selectedTask }) => {
  return (
    <div>
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
