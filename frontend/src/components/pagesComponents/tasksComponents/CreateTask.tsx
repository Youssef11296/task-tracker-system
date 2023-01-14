// hooks & modules
import { useForm } from "react-hook-form";
import { useTasks } from "../../../hooks/useTasks";
import { ErrorMessage } from "@hookform/error-message";
// constants
import { MODAL_STYLE, TASK_SATUS } from "../../../utils/constants";
import { Modal, Box, Button } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CreateTask: React.FC<Props> = ({ open, onClose }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();
  const { setSelectedTaskHandler, selectedTask } = useTasks();

  const { createTaskHandler, getAllTasksHandler } = useTasks();

  const closeHandler = () => {
    setSelectedTaskHandler(null);
    onClose();
  };

  const onSubmit = (values: any) => {
    const { taskName, description } = values;
    createTaskHandler(taskName, description, TASK_SATUS.TODO);

    getAllTasksHandler();

    reset();
    closeHandler();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={MODAL_STYLE}>
        <div className="create-task-component">
          <h2>Let's create your new task, fill the form below</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <div className="input-field flex-column flex-column">
                <label htmlFor="taskName">Task Name</label>
                <input
                  type="text"
                  placeholder="ex. First task.."
                  defaultValue={selectedTask ? selectedTask?.taskName : ""}
                  {...register("taskName", {
                    required: "Task name is required",
                    minLength: 3,
                    maxLength: 50,
                  })}
                />
              </div>
              <span className="error">
                <ErrorMessage errors={errors} name="taskName" />
              </span>
            </div>
            <div className="input-container">
              <div className="input-field flex-column">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  placeholder="ex. First task.."
                  defaultValue={selectedTask ? selectedTask?.description : ""}
                  {...register("description", {
                    required: "Task description is required",
                    minLength: 10,
                    maxLength: 500,
                  })}
                />
              </div>
              <span className="error">
                <ErrorMessage errors={errors} name="description" />
              </span>
            </div>
            <div className="input-container">
              <div className="input-field flex-column">
                <label htmlFor="taskName">Status</label>
                <input
                  type="text"
                  placeholder="TODO"
                  {...register("status")}
                  disabled={true}
                />
              </div>
              <span className="error">
                <ErrorMessage errors={errors} name="status" />
              </span>
            </div>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                margin: "auto",
                display: "block",
                width: "150px",
              }}
              type="submit"
              disabled={
                (errors.username || errors.email || errors.password)?.type
                  ? true
                  : false
              }
            >
              {selectedTask ? "Save" : "Add"}
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateTask;
