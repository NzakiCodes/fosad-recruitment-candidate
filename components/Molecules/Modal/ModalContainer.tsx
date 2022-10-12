import { JSXElementConstructor, ReactElement, ReactNode } from "react";

function ModalContainer({
  children,
  onClose,
  className,
}: {
  children: ReactElement | ReactNode | ReactElement<any, string | JSXElementConstructor<any>>;
  onClose: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={onClose}
      className={`${className} w-screen h-screen top-0 fixed z-[999] bg-[rgba(0,0,0,0.5)] flex justify-center content-center items-center py-5`}
    >
      {children}
    </div>
  );
}

export default ModalContainer;
