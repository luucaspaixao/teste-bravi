import { toast, Id } from "react-toastify";

export const toastPromiseSuccess = (toastId: Id, message: string) => {
  toast.update(toastId, {
    render: message,
    type: "success",
    isLoading: false,
    autoClose: 5000,
  });
};

export const toastPromiseError = (toastId: Id, message: string) => {
  toast.update(toastId, {
    render: message,
    type: "error",
    isLoading: false,
    autoClose: 5000,
  });
};

export const toastPromiseLoading = (message: string) => {
  return toast.loading(message);
};

export const toastError = (message: string) => {
  toast.error(message),
    {
      autoClose: 5000,
    };
};
