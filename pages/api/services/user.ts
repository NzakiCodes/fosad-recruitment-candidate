import { AxiosResponse } from "axios";
import { JobInterests } from "../../../interfaces/jobs";
import { IResponse } from "../../../interfaces/response";
import { UserProfile } from "../../../interfaces/user";
import Axios from "./axios";

const GetUserInterests = async () => {
  const res: AxiosResponse<IResponse<JobInterests[]>> = await Axios.get(
    "interest"
  );
  return res;
};

const GetUserSkills = async () => {
  const res: AxiosResponse<IResponse<JobInterests[]>> = await Axios.get(
    "skill"
  );
  return res;
};

const GetUserProfile = async () => {
  const res: AxiosResponse<IResponse<UserProfile>> = await Axios.get("profile");
  return res;
};

export { GetUserInterests, GetUserSkills, GetUserProfile };
