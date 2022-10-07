import React, { FC, useState } from "react";
import { JobInterests, JobType } from "../../interfaces/jobs";
import { useGetUserSkills } from "../api/queries/user";

interface OnboardingStep4 {
  selectedSkills: string;
  setSelectedSkills: Function;
}

const OnboardingStepFour: FC<OnboardingStep4> = ({
  selectedSkills,
  setSelectedSkills,
}) => {
  const { data } = useGetUserSkills();
  const skills = data?.data.data;
  const [skill, setSkill] = useState<string>("");
  const [userSkills, setUserSkills] = useState<string[]>([]);

  // const handleCheckBoxChange = (name: string) => {
  //   if (selectedSkills.indexOf(name) !== -1) {
  //     setSelectedSkills(
  //       selectedSkills.filter((selectedId: string) => selectedId !== name)
  //     );
  //   } else {
  //     setSelectedSkills([...selectedSkills, name]);
  //   }
  // };

  return (
    <div className="lg:w-full mx-5">
      {skills &&
        skills?.map((skill: JobInterests, index: number) => (
          <div key={index}>
            <label>{skill.name}</label>
            <input
              type="checkbox"
              value={skill.name}
              onChange={(e) => setSelectedSkills(e.target.value)}
              checked={selectedSkills.includes(skill.name)}
            />
          </div>
        ))}
      {userSkills &&
        userSkills?.map((skill: string, index: number) => (
          <div key={index}>
            <label>{skill}</label>
            <input
              type="checkbox"
              value={skill}
              onChange={(e) => setSelectedSkills(e.target.value)}
              checked={selectedSkills.includes(skill)}
            />
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
            onChange={(e) => setSkill(e.target.value)}
            value={skill}
          />
          <button
            className="h-full border-l  border-[#DEE3E9] w-1/6 py-4"
            onClick={() => setUserSkills([...userSkills, skill])}
          >
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
