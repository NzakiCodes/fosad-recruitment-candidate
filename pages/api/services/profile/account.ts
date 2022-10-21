import { AccountInterface } from "@interface/profile";
import { IResponse } from "@interface/response";
import { AxiosResponse } from "axios";
import Axios from "../axios";

const AddAccount = async (payload: AccountInterface) => {
  const res: AxiosResponse<AccountInterface> = await Axios.post(
    "account",
    payload
  );
  return res;
};

const GetUserAccount = async () => {
  const res: AxiosResponse<AccountInterface[]> = await Axios.get("account");
  return res;
};

const UpdateAccount = async (payload: AccountInterface, id: string) => {
  const res: AxiosResponse<AccountInterface> = await Axios.patch(
    `account/${id}`,
    payload
  );
  return res;
};

export { AddAccount, GetUserAccount, UpdateAccount };
