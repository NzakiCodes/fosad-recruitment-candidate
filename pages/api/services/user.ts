import { AxiosResponse } from "axios";
import { JobInterests } from "../../../interfaces/jobs";
import { IResponse } from "../../../interfaces/response";
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

export { GetUserInterests, GetUserSkills };
