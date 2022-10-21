import { EducationInterface } from "@interface/profile";
import { IResponse } from "@interface/response";
import { AxiosResponse } from "axios";
import Axios from "../axios";

const AddEducation = async (payload: EducationInterface) => {
  const res: AxiosResponse<EducationInterface> = await Axios.post(
    "education",
    payload
  );
  return res;
};

const GetUserEducation = async () => {
  const res: AxiosResponse<IResponse<EducationInterface[]>> = await Axios.get(
    "education"
  );
  return res;
};

const GetSingleEducation = async (id: string) => {
  const res: AxiosResponse<IResponse<EducationInterface>> = await Axios.get(
    `education/${id}`
  );
  return res;
};

const UpdateEducation = async (payload: EducationInterface, id: string) => {
  const res: AxiosResponse<EducationInterface> = await Axios.patch(
    `education/${id}`,
    payload
  );
  return res;
};

export { AddEducation, GetUserEducation, GetSingleEducation, UpdateEducation };
