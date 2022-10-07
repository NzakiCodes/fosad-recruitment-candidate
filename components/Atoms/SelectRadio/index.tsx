declare type SelectRadioType = {
  selected: boolean;
  text: string;
  onClick?: () => void;
  styled?: boolean;
  noBorder?: boolean;
  className?:string;
};

const SelectRadio = ({
  selected,
  text,
  onClick,
  styled,
  noBorder,
}: SelectRadioType) => {
  const handleEvent = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick && onClick();
  };
  return (
    <button
      className={` ${
        styled
          ? "bg-[#E1EEFB] group hover:bg-secondary hover:text-white text-secondary"
          : `text-[#63748A] ${
              !noBorder
                ? "border-[#DEE3E9] border hover:border-secondary hover:text-secondary"
                : ""
            }`
      } ${
        selected
          ? `${
              styled
                ? "hover:!text-white !border-secondary"
                : "!border-secondary"
            } border-secondary !text-secondary`
          : ""
      } rounded-lg py-5 px-8 w-full transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3`}
      onClick={handleEvent}
    >
      {selected ? (
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.5"
            width="28"
            height="28"
            rx="14"
            className="fill-secondary group-hover:fill-white transition-colors hover:transition-colors"
          />
          <path
            d="M19.5917 10.5083C19.5142 10.4302 19.4221 10.3682 19.3205 10.3259C19.219 10.2836 19.11 10.2618 19 10.2618C18.89 10.2618 18.7811 10.2836 18.6796 10.3259C18.578 10.3682 18.4858 10.4302 18.4084 10.5083L12.2 16.725L9.59171 14.1083C9.51127 14.0306 9.41632 13.9695 9.31227 13.9285C9.20823 13.8875 9.09713 13.8674 8.98531 13.8694C8.87349 13.8713 8.76315 13.8952 8.66058 13.9398C8.55802 13.9844 8.46524 14.0487 8.38754 14.1292C8.30984 14.2096 8.24875 14.3046 8.20774 14.4086C8.16674 14.5127 8.14663 14.6238 8.14856 14.7356C8.1505 14.8474 8.17444 14.9577 8.21902 15.0603C8.2636 15.1629 8.32794 15.2556 8.40837 15.3333L11.6084 18.5333C11.6858 18.6114 11.778 18.6734 11.8796 18.7157C11.9811 18.7581 12.09 18.7798 12.2 18.7798C12.3101 18.7798 12.419 18.7581 12.5205 18.7157C12.6221 18.6734 12.7142 18.6114 12.7917 18.5333L19.5917 11.7333C19.6763 11.6553 19.7438 11.5606 19.79 11.4552C19.8361 11.3498 19.86 11.2359 19.86 11.1208C19.86 11.0058 19.8361 10.8919 19.79 10.7865C19.7438 10.6811 19.6763 10.5864 19.5917 10.5083Z"
            className="group-hover:fill-secondary fill-white transition-colors hover:transition-colors"
          />
        </svg>
      ) : (
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1"
            width="27"
            height="27"
            rx="13.5"
            stroke="#C3C9CE"
          />
        </svg>
      )}
      <span>{text}</span>
    </button>
  );
};

export default SelectRadio;
