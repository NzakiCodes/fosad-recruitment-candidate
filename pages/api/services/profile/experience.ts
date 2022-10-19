import { Experience } from "@interface/profile";
import { IResponse } from "@interface/response";
import { AxiosResponse } from "axios";
import Axios from "../axios";

const AddExperience = async (payload: Experience) => {
  const res: AxiosResponse<Experience> = await Axios.post(
    "experience",
    payload
  );
  return res;
};

const GetUserWorkExperience = async () => {
  const res: AxiosResponse<IResponse<Experience[]>> = await Axios.get(
    "experience"
  );
  return res;
};

const GetSingleWorkExperience = async (id: string) => {
  const res: AxiosResponse<IResponse<Experience[]>> = await Axios.get(
    `experience/${id}`
  );
  return res;
};

const UpdateWorkExperience = async (payload: Experience) => {
  const res: AxiosResponse<Experience> = await Axios.post(
    `experience/${payload.id}`,
    payload
  );
  return res;
};

export {
  AddExperience,
  GetUserWorkExperience,
  GetSingleWorkExperience,
  UpdateWorkExperience,
};
