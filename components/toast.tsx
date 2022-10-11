import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IToastMsg } from "../context/toastContext";
import "../styles/Home.module.css";

const Toast = ({ toasts }: { toasts: IToastMsg[] }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    ref.current = document.body;
    setMount(true);
  }, []);

  return mount
    ? createPortal(
        <div
          id="toast"
          className={`toasts-wrapper ${toasts.length > 0 ? "show" : "hide"}`}
        >
          {toasts.map((toast, index: number) => (
            <div
              className={`toast ${
                toast.type === "success" ? "success" : "error"
              }`}
              key={`toast${index}`}
            >
              <div className="m-auto px-[10px] xl:max-width-[1200px] lg:max-width-[1140px] max-width-[100%]">
                <div className="justify-center">
                  <div>{toast.msg}</div>
                </div>
              </div>
            </div>
          ))}
        </div>,
        ref.current!
      )
    : null;
};

export default Toast;
