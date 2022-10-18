import { AxiosResponse } from "axios";
import { Experience } from "../../../../interfaces/profile";
import Axios from "../axios";

const AddExperience = async (payload: Experience) => {
  const res: AxiosResponse<Experience> = await Axios.post(
    "experience",
    payload
  );
  return res;
};

export { AddExperience };
