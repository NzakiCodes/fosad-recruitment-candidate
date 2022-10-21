import { useAddCandidatesSkills } from "@api/mutations/profile/skills";
import { useGetCandidatesSkills } from "@api/queries/profile/skill";
import Spinner from "@components/Spinner";
import { SkillsInterface } from "@interface/profile";
import { AxiosResponse, AxiosError } from "axios";
import { title } from "process";
import { useState } from "react";
import toast from "react-hot-toast";
import SelectableLabel from "../../../Atoms/SelectableLabel";
declare type SkillsType = {
  id: string;
  title: string;
  isSelected: boolean;
};
const Skills = () => {
  const [addSkills, setAddSkills] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { data, isLoading, refetch } = useGetCandidatesSkills();

  const { mutate } = useAddCandidatesSkills();

  const submit = () => {
    mutate(
      { name: addSkills },
      {
        onSuccess: async (response: AxiosResponse<SkillsInterface>) => {
          toast.success("Successful");
          setLoading(false);
          refetch();
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            if (error.response?.data.data.message) {
              toast.error(error.response?.data.data.message);
              setLoading(false);
            } else {
              toast.error(`${error.message}`);
              setLoading(false);
            }
          }
        },
      }
    );
  };
  return (
    <div className="bg-white px-6 py-5 rounded-lg">
      <div className="flex gap-x-3 flex-wrap">
        {isLoading ? (
          <Spinner />
        ) : data?.data.data && data.data.data.length > 0 ? (
          data.data.data.map((item: SkillsInterface) => (
            <SelectableLabel
              key={item.id}
              isChecked={false}
              label={item.name}
              value={item.name}
              onChange={() => {}}
            />
          ))
        ) : (
          <div className="font-semibold active:outline-0 text-secondary text-base mt-5">
            Please Add your skills
          </div>
        )}
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
            name="name"
            value={addSkills}
            onChange={(e) => {
              setAddSkills(e.target.value);
            }}
          />
          <button
            className="h-full border-l text-sm border-[#DEE3E9] w-1/6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              submit();
              setAddSkills("");
            }}
            disabled={loading}
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

export default Skills;
