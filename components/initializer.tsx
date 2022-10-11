import React, { FC } from "react";

interface IProps {
  text?: string;
}

const Initializer: FC<IProps> = ({ text = "Loading..." }) => {
  return (
    <div className="justify-center content-center h-[100vh]">
      <div className="grid justify-center auto-cols-auto auto-rows-auto">
        <div className="justify-center">
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Initializer;
