import { Education } from "@interface/profile";
import { IResponse } from "@interface/response";
import { AxiosResponse } from "axios";
import Axios from "../axios";

const AddEducation = async (payload: Education) => {
  const res: AxiosResponse<Education> = await Axios.post("education", payload);
  return res;
};

const GetUserEducation = async () => {
  const res: AxiosResponse<IResponse<Education[]>> = await Axios.get(
    "education"
  );
  return res;
};

const GetSingleEducation = async (id: string) => {
  const res: AxiosResponse<IResponse<Education>> = await Axios.get(
    `education/${id}`
  );
  return res;
};

const UpdateEducation = async (payload: Education) => {
  const res: AxiosResponse<Education> = await Axios.post(
    `education/${payload.id}`,
    payload
  );
  return res;
};

export { AddEducation, GetUserEducation, GetSingleEducation, UpdateEducation };
