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
      className={`${className} w-full h-full lg:p-4 top-[80px] lg:top-0 fixed z-[999] bg-white lg:bg-[rgba(0,0,0,0.5)] flex justify-center content-center lg:items-center lg:py-5`}
    >
      {children}
    </div>
  );
}

export default ModalContainer;
