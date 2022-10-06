import { useState } from "react";
import SelectCheckbox from "../../components/Atoms/SelectCheckbox";

declare type SkillsType = {
  id: string;
  title: string;
  isSelected: boolean;
};
const OnboardingStepFour = () => {
  const [jobType, setJobType] = useState<number>(1);
  const [jobLocationTypeList, setJobLocationTypeList] = useState<SkillsType[]>([
    { id: "in_person", title: "In-Person", isSelected: false },
    { id: "hybrid", title: "Hybrid", isSelected: false },
    { id: "remote", title: "Remote", isSelected: false },
  ]);
  const updateJobLocationTypeList = (id: string) => {
    const updatedJobLocations = jobLocationTypeList.map((jobLocation) => {
      if (id === jobLocation.id) {
        return { ...jobLocation, isSelected: !jobLocation.isSelected };
      }
      return jobLocation;
    });
    console.log(updatedJobLocations);

    setJobLocationTypeList(updatedJobLocations);
  };
  return (
    <div className="lg:w-full mx-5">
      {jobLocationTypeList &&
        jobLocationTypeList?.map(({ id, title }) => (
          <div>
            <label>{title}</label>
            <input type="checkbox" />
          </div>
        ))}
      <hr className="my-8" />
      <div>
        <span className="inline-block mb-4 font-semibold text-xl text-secondary">
          Add your own skills
        </span>
        <div className="w-full rounded-lg py-1 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3">
          <input
            type="text"
            placeholder="Enter Skill"
            className="w-5/6 px-8 py-4 h-full active:outline-0 focus:outline-0"
          />
          <button className="h-full border-l  border-[#DEE3E9] w-1/6 py-4">
            Add +
          </button>
        </div>
        <span className="inline-block my-4 font-medium text-sm text-[#63748A]">
          {" I'll"} try to find jobs that match as many of these skills as I
          can. If you add multiple skills, some jobs might not match every skill
          you choose.
        </span>
      </div>
    </div>
  );
};

export default OnboardingStepFour;
