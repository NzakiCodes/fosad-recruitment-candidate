import { AxiosResponse } from "axios";
import Axios from "../axios";

const AddCandidatesResume = async (payload: FormData) => {
  const res: AxiosResponse<any> = await Axios.post("profile", payload);
  return res;
};

const GetCandidateResume = async () => {
  const res: AxiosResponse<any> = await Axios.get("profile/all");
  return res;
};

export { AddCandidatesResume, GetCandidateResume };
