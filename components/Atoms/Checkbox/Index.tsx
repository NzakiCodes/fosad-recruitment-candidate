import React, { ChangeEventHandler } from "react";

interface CheckboxProps {
  name?: string;
  id?: string;
  type: "rounded" | "squared";
  size: "small" | "medium" | "large";
  color: "primary" | "secondary" | "black";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked:boolean;
}

function Checkbox({ id, name, onChange, type, color, size, checked }: CheckboxProps) {

  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      onChange={onChange}
      checked={checked}
      className={`${
        type === "rounded" ? "rounded-full" : "rounded"
      } border border-[#C3C9CE] ${
        color === "primary"
          ? "text-primary ring-primary active:ring-primary focus:ring-primary"
          : color === "secondary"
          ? "text-secondary ring-secondary active:ring-secondary focus:ring-secondary"
          : color === "black"
          ? "text-black ring-black active:ring-black focus:ring-black"
          : "text-gray-700"
      } ${
        size === "small"
          ? "p-3 w-5 h-5"
          : size === "medium"
          ? "p-4"
          : size === "large"
          ? "p-5"
          : "p-4"
      }`}
    />
  );
}

export default Checkbox;
