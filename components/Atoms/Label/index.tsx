type LabelTypes = "salary" | "jobType" | "workType";

const labelTypeList: { name: LabelTypes; backgroundColor: string }[] = [
  {
    name: "salary",
    backgroundColor: "#CFF8F5",
  },
  {
    name: "jobType",
    backgroundColor: "#E5D0FB",
  },
  {
    name: "workType",
    backgroundColor: "#E1EFC2",
  },
];

const Label = ({ text, type }: { text: string; type?: LabelTypes }) => {
  return (
    <span
      className="inline-block px-4 py-1 rounded-full my-1 text-xs w-max md:text-base font-medium capitalize"
      style={{
        background: type
          ? (labelTypeList.find((lt) => lt.name === type) || {}).backgroundColor
          : "#002D5B",
        color: type ? "#002D5B" : "#FFFFFF",
      }}
    >
      {text}
    </span>
  );
};
export default Label;
