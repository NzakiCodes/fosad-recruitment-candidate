import { useState } from "react";
import SelectableLabel from "../../../Atoms/SelectableLabel";
declare type SkillsType = {
  id: string;
  title: string;
  isSelected: boolean;
};
const Skills = () => {
  const [skillsList, setSkillsList] = useState<SkillsType[]>([
    { id: "customer_service", title: "Customer Service", isSelected: false },
    { id: "social_media", title: "Social Media", isSelected: false },
    { id: "driving", title: "Driving", isSelected: false },
    { id: "sales", title: "Sales", isSelected: false },
    { id: "administrative", title: "Administrative", isSelected: false },
    { id: "collaboration", title: "Collaboration", isSelected: false },
    { id: "housekeeping", title: "Housekeeping", isSelected: false },
    { id: "hospitality", title: "Hospitality", isSelected: false },
    { id: "management", title: "Management", isSelected: false },
    { id: "sales-admin", title: "Sales Admin", isSelected: false },
  ]);
  const updateSkillsList = (id: string) => {
    const updatedSkillsList = skillsList.map((skill) => {
      if (id === skill.id) {
        return { ...skill, isSelected: !skill.isSelected };
      }
      return skill;
    });
    console.log(updatedSkillsList);

    setSkillsList(updatedSkillsList);
  };
  return (
    <div className="bg-white px-6 py-5 rounded-lg">
      <div className="flex gap-x-3 flex-wrap">
        {skillsList &&
          skillsList?.map(({ id, title, isSelected }) => (
            <SelectableLabel
              key={id}
              isChecked={isSelected}
              label={title}
              value={id}
              onChange={() => updateSkillsList(id)}
            />
          ))}
      </div>
      <div className="border-t  py-8 mt-8">
        <span className="inline-block mb-4 font-semibold text-xl text-secondary">
          Add your own skills
        </span>
        <div className="w-full rounded-lg py-1 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3">
          <input
            type="text"
            placeholder="Enter Skill"
            className="w-5/6 text-sm px-6 py-3  h-full active:outline-0 focus:outline-0"
          />
          <button className="h-full border-l text-sm border-[#DEE3E9] w-1/6 py-3">
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



export default Skills;
