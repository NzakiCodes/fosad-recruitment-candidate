import { ChangeEventHandler } from "react";

const SelectableLabel = ({
  label,
  value,
  isChecked,
  onChange,
}: {
  label: string;
  value: string;
  isChecked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <label className="selectable-label">
      <input
        type="checkbox"
        name="radio"
        checked={isChecked}
        onChange={onChange}
        value={value}
      />
      <span>{label}</span>
    </label>
  );
};

export default SelectableLabel;
