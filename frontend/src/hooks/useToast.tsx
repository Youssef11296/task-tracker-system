import { toast } from "react-toastify";

export const useToast = (
  type: "success" | "error" | "warning" | "info",
  text: string
) => {
  const toastId = "someId";

  type === "success"
    ? toast.success(text, {
        position: toast.POSITION.TOP_RIGHT,
        style: { outerWidth: 500 },
      })
    : type === "error"
    ? toast.error(text, {
        position: toast.POSITION.TOP_RIGHT,
      })
    : type === "warning"
    ? toast.warning(text, {
        position: toast.POSITION.TOP_RIGHT,
      })
    : type === "info" && toast.info(text);
};
