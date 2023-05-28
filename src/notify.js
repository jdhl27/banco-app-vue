import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const Notify = (
  msg = "Algo pasó",
  type = "warn",
  position = toast.POSITION.TOP_LEFT
) => {
  switch (type) {
    case "info":
      toast.info(msg, {
        position,
      });
      break;
    case "success":
      toast.success(msg, {
        position,
      });
      break;
    case "error":
      toast.error(msg, {
        position,
      });
      break;
    case "warn":
      toast.warn(msg, {
        position,
      });
      break;

    default:
      toast.info(msg, {
        position,
      });
  }
};
