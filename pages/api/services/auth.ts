import { IResponse } from "@interface/response";
import { Signup, UserResponse, LoginInterface } from "@interface/user";
import { AxiosResponse } from "axios";
import Axios from "./axios";

const SignUp = async (payload: Signup) => {
  const res: AxiosResponse<UserResponse> = await Axios.post(
    "auth/candidate",
    payload
  );
  return res;
};

const CandidateLogin = async (payload: LoginInterface) => {
  const res: AxiosResponse<IResponse<UserResponse>> = await Axios.post(
    "auth/login/candidate",
    payload
  );
  return res;
};

export { SignUp, CandidateLogin };
