// hooks & modules
import { useForm } from "react-hook-form";
import { useTasks } from "../../../hooks/useTasks";
import { ErrorMessage } from "@hookform/error-message";
// constants
import { TASK_SATUS } from "../../../utils/constants";

interface Props {
  openCreateTaskHandler: () => void;
}

const CreateTask: React.FC<Props> = ({ openCreateTaskHandler }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const { createTaskHandler, getAllTasksHandler } = useTasks();

  const onSubmit = (values: any) => {
    console.log(values);

    const { taskName, description } = values;
    createTaskHandler(taskName, description, TASK_SATUS.TODO);

    openCreateTaskHandler();

    getAllTasksHandler();
  };

  console.log({ errors });

  return (
    <div className="create-task-component">
      <h2>Let's create your new task, fill the form below</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <div className="input-field flex-column flex-column">
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              placeholder="ex. First task.."
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
              placeholder="ex. First task.."
              {...register("status")}
              disabled={true}
            />
          </div>
          <span className="error">
            <ErrorMessage errors={errors} name="status" />
          </span>
        </div>
        <button
          type="submit"
          disabled={
            (errors.username || errors.email || errors.password)?.type
              ? true
              : false
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTask;