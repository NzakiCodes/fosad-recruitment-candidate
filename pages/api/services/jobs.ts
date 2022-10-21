import { IResponse } from "@interface/response";
import { AxiosResponse } from "axios";
import {
  AppliedJobs,
  SavedJobs,
  SuggestedJobsInterface,
} from "../../../interfaces/jobs";
import Axios from "./axios";

const GetSuggestedJobs = async () => {
  const res: AxiosResponse<IResponse<SuggestedJobsInterface[]>> =
    await Axios.get("job/suggest/jobs");
  return res;
};

const GetAppliedJobs = async () => {
  const res: AxiosResponse<IResponse<AppliedJobs[]>> = await Axios.get(
    "applied-job"
  );
  return res;
};

const GetSavedJobs = async () => {
  const res: AxiosResponse<IResponse<SavedJobs[]>> = await Axios.get(
    "save-job"
  );
  return res;
};

export { GetSuggestedJobs, GetAppliedJobs, GetSavedJobs };
