import { AxiosResponse } from "axios";
import { IResponse } from "../../../interfaces/response";
import { Signup, UserResponse } from "../../../interfaces/user";
import Axios from "./axios";

const SignUp = async (payload: Signup) => {
  const res: AxiosResponse<IResponse<UserResponse>> = await Axios.post(
    "auth/candidate",
    payload
  );
  return res;
};

export { SignUp };
