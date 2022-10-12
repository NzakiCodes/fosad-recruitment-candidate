import { AxiosResponse } from "axios";
import {
  AppliedJobs,
  SavedJobs,
  SuggestedJobs,
} from "../../../interfaces/jobs";
import Axios from "./axios";

const GetSuggestedJobs = async () => {
  const res: AxiosResponse<SuggestedJobs> = await Axios.get("catalog/suggest");
  return res;
};

const GetAppliedJobs = async () => {
  const res: AxiosResponse<AppliedJobs> = await Axios.get("applied-job");
  return res;
};

const GetSavedJobs = async () => {
  const res: AxiosResponse<SavedJobs> = await Axios.get("save-job");
  return res;
};

export { GetSuggestedJobs, GetAppliedJobs, GetSavedJobs };
