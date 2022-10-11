const DurationLabel = ({
  duration,
  isCurrent,
}: {
  duration: string;
  isCurrent: boolean;
}) => {
  return (
    <span
      className={`${
        isCurrent ? "bg-[#D0F7E9]" : "bg-[#FFEEEE]"
      } py-2 px-4 rounded-lg`}
    >
      {duration}
    </span>
  );
};

export default DurationLabel;
