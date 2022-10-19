import { OtherInformation } from "@interface/profile";
import { IResponse } from "@interface/response";
import { AxiosResponse } from "axios";
import Axios from "../axios";

const AddOtherInformation = async (payload: OtherInformation) => {
  const res: AxiosResponse<OtherInformation> = await Axios.post(
    "other",
    payload
  );
  return res;
};

const GetOtherInformationList = async () => {
  const res: AxiosResponse<IResponse<OtherInformation[]>> = await Axios.get(
    "other"
  );
  return res;
};

const GetSingleOtherInformation = async (id: string) => {
  const res: AxiosResponse<IResponse<OtherInformation[]>> = await Axios.get(
    `other/${id}`
  );
  return res;
};

const UpdateOtherInformation = async (payload: OtherInformation) => {
  const res: AxiosResponse<OtherInformation> = await Axios.post(
    `other/${payload.id}`,
    payload
  );
  return res;
};

export {
  AddOtherInformation,
  UpdateOtherInformation,
  GetOtherInformationList,
  GetSingleOtherInformation,
};
