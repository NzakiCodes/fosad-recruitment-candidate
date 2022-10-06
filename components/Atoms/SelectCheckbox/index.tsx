declare type SelectCheckboxType = {
  selected: boolean;
  text: string;
  onClick?: () => void;
  styled?: boolean;
};

const SelectCheckbox = ({
  selected,
  text,
  onClick,
  styled,
}: SelectCheckboxType) => {
  const handleEvent = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick && onClick();
  };

  return (
    <button
      className={` flex justify-between ${
        styled
          ? "bg-[#E1EEFB] group hover:bg-secondary hover:text-white text-secondary"
          : "text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary"
      } ${
        selected
          ? `${
              styled
                ? "hover:!text-white !border-secondary"
                : "!border-secondary"
            }   !text-secondary`
          : ""
      } rounded-lg py-5 px-8 w-full transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3`}
      onClick={handleEvent}
    >
      <span>{text}</span>
      {selected ? (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="fill-secondary group-hover:fill-white transition-colors hover:transition-colors"
            x="0.5"
            y="1.02905"
            width="23"
            height="23"
            rx="3.5"
            fill="#002D5B"
          />
          <path
            className="group-hover:fill-secondary fill-white transition-colors hover:transition-colors"
            d="M18.7104 7.73904C18.6175 7.64531 18.5069 7.57091 18.385 7.52014C18.2632 7.46938 18.1324 7.44324 18.0004 7.44324C17.8684 7.44324 17.7377 7.46938 17.6159 7.52014C17.494 7.57091 17.3834 7.64531 17.2904 7.73904L9.84044 15.199L6.71044 12.059C6.61392 11.9658 6.49998 11.8925 6.37512 11.8433C6.25026 11.7941 6.11694 11.7699 5.98276 11.7723C5.84858 11.7746 5.71617 11.8033 5.59309 11.8568C5.47001 11.9103 5.35868 11.9875 5.26544 12.084C5.1722 12.1806 5.09889 12.2945 5.04968 12.4194C5.00048 12.5442 4.97635 12.6775 4.97867 12.8117C4.98099 12.9459 5.00972 13.0783 5.06321 13.2014C5.1167 13.3245 5.19392 13.4358 5.29044 13.529L9.13044 17.369C9.2234 17.4628 9.334 17.5372 9.45586 17.5879C9.57772 17.6387 9.70843 17.6648 9.84044 17.6648C9.97245 17.6648 10.1032 17.6387 10.225 17.5879C10.3469 17.5372 10.4575 17.4628 10.5504 17.369L18.7104 9.20904C18.8119 9.11539 18.893 9.00174 18.9484 8.87524C19.0038 8.74874 19.0324 8.61214 19.0324 8.47404C19.0324 8.33593 19.0038 8.19933 18.9484 8.07283C18.893 7.94633 18.8119 7.83268 18.7104 7.73904Z"
            fill="white"
          />
          <rect
            x="0.5"
            y="1.02905"
            width="23"
            height="23"
            rx="3.5"
            stroke="#002D5B"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1.02905"
            width="23"
            height="23"
            rx="3.5"
            fill="white"
            stroke="#C3C9CE"
          />
        </svg>
      )}
    </button>
  );
};

export default SelectCheckbox;
