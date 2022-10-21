import { OtherInformationInterface } from "@interface/profile";
import { IResponse } from "@interface/response";
import { AxiosResponse } from "axios";
import Axios from "../axios";

const AddOtherInformation = async (payload: OtherInformationInterface) => {
  const res: AxiosResponse<OtherInformationInterface> = await Axios.post(
    "other",
    payload
  );
  return res;
};

const GetOtherInformationList = async () => {
  const res: AxiosResponse<IResponse<OtherInformationInterface[]>> =
    await Axios.get("other");
  return res;
};

const UpdateOtherInformation = async (
  payload: OtherInformationInterface,
  id: string
) => {
  const res: AxiosResponse<OtherInformationInterface> = await Axios.patch(
    `other/${id}`,
    payload
  );
  return res;
};

export { AddOtherInformation, UpdateOtherInformation, GetOtherInformationList };
