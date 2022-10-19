import {
  GetOtherInformationList,
  GetSingleOtherInformation,
} from "@api/services/profile/otherInformations";
import { useQuery } from "react-query";

const useGetOtherInformation = () =>
  useQuery("getOtherInformation", GetOtherInformationList);

const useGetSingleOtherInformation = (id: string) =>
  useQuery("getSingleOtherInformation", () => GetSingleOtherInformation(id));

export { useGetOtherInformation, useGetSingleOtherInformation };
