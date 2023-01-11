import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastifyContainer = (props: any) => {
  const { children, text } = props;

  const notify = () => toast(text);

  return (
    <div className="toastify-container">
      {children}
      <ToastContainer />
    </div>
  );
};
