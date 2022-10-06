import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

declare type TextInputType =  {};

function TextInput(props: InputHTMLAttributes<HTMLInputElement> & TextInputType) {
  return (
    <input
      type="text"
      className={`w-full rounded-lg py-5 px-8 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3`}
      placeholder="Full Name"
      {...props}
    />
  );
}

export default TextInput;
