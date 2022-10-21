import { SkillsInterface } from "@interface/profile";
import { IResponse } from "@interface/response";
import { AxiosResponse } from "axios";
import Axios from "../axios";

const AddSkills = async (payload: SkillsInterface) => {
  const res: AxiosResponse<SkillsInterface> = await Axios.post(
    "skill",
    payload
  );
  return res;
};

const GetCandidateSkills = async () => {
  const res: AxiosResponse<IResponse<SkillsInterface[]>> = await Axios.get(
    "skill"
  );
  return res;
};

const UpdateSkills = async (payload: SkillsInterface, id: string) => {
  const res: AxiosResponse<SkillsInterface> = await Axios.patch(
    `skill/${id}`,
    payload
  );
  return res;
};

export { AddSkills, GetCandidateSkills, UpdateSkills };
