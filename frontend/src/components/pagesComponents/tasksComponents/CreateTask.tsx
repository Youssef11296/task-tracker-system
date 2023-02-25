// hooks & modules
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../../../hooks/useTasks";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../context";
import { setSelectedTask } from "../../../context/actions/tasksActions";
// constants
import { MODAL_STYLE, TASK_SATUS } from "../../../services/constants";
// mui
import {
  Modal,
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  FormControl,
} from "@mui/material";

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

  const { createTaskHandler, getAllTasksHandler, updatTaskHandler } = useTasks();

  const selectedTask = useSelector((state: RootState) => state.tasks?.selectedTask);

  const dispatch: AppDispatch = useDispatch();

  const closeHandler = () => {
    reset()
    onClose()
  }

  const onSubmit = async (values: any) => {
    const { taskName, description, status } = values;

    selectedTask ?
      await updatTaskHandler({ ...values }, selectedTask?._id)
      : await createTaskHandler(taskName, description, status);

    await getAllTasksHandler();
    dispatch(setSelectedTask(null));

    closeHandler();
  };


  return (
    <Modal
      sx={{ background: "rgba(0,0,0,.75)" }}
      open={open}
      onClose={closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={MODAL_STYLE}>
        <div className="create-task-component">
          <h2>{selectedTask ? "Edit Task" : "Create Task"}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <div className="input-field flex-column flex-column">
                <label htmlFor="taskName">Task Name</label>
                <TextField
                  type="text"
                  placeholder="ex. First task.."
                  defaultValue={selectedTask ? selectedTask?.taskName : ''}
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
                <TextField
                  type="text"
                  placeholder="ex. First task.."
                  defaultValue={selectedTask ? selectedTask?.description : ''}
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
                <Box>
                  <FormControl>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label={null}
                      sx={{ fontSize: ".8rem", minWidth: "200px" }}
                      defaultValue={selectedTask ? selectedTask?.status : TASK_SATUS.TODO}
                      {...register('status')}
                    >
                      <MenuItem
                        sx={{ fontSize: ".8rem" }}
                        value={TASK_SATUS.TODO}
                      >
                        {TASK_SATUS.TODO}
                      </MenuItem>
                      <MenuItem
                        sx={{ fontSize: ".8rem" }}
                        value={TASK_SATUS.IN_PROGRESS}
                      >
                        {TASK_SATUS.IN_PROGRESS}
                      </MenuItem>
                      <MenuItem
                        sx={{ fontSize: ".8rem" }}
                        value={TASK_SATUS.COMPLETED}
                      >
                        {TASK_SATUS.COMPLETED}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
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
                mt: 4,
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
