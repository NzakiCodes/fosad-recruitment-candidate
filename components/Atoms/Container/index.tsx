import React, { ReactNode } from "react";

declare type ContainerType = {
  children: ReactNode;
  className?: string;
};

/* 
* Todo: add this class name 2xl:max-w-screen-2xl 2xl:px-20
*/

function Container({ children, className }: ContainerType) {
  return (
    <div className={`max-w-screen-xl px-5  md:px-10 mx-auto ${className ? className : ""}`}>
      {children}
    </div>
  );
}

export default Container;
