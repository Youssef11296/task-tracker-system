// hooks & modules
import { Button, Modal, Box, Typography } from "@mui/material";

// styles
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
        <Box sx={style}>
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
