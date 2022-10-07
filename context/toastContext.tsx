import { useCallback, useContext, useState, createContext } from "react";
import Toast from "../components/toast";
import "../styles/Home.module.css";

interface IToastContextProvider {
  children: JSX.Element | JSX.Element[];
}

export interface IToastMsg {
  msg: string;
  type: "success" | "error";
}

interface IToastContext {
  addToast: ({ msg, type }: IToastMsg) => void;
}

const ToastContext = createContext({} as IToastContext);

export default ToastContext;

export const ToastContextProvider = ({ children }: IToastContextProvider) => {
  const [toasts, setToasts] = useState<IToastMsg[]>([]);
  const timeOut = 6000;

  const addToast = useCallback(
    (toast: IToastMsg) => {
      setToasts([]);
      setToasts((toasts) => [...toasts, toast]);
      setTimeout(() => {
        document.querySelector("#toast")?.classList.remove("show");
      }, timeOut - 1000);
      setTimeout(() => setToasts((toasts) => toasts.slice(1)), timeOut);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <Toast toasts={toasts} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
