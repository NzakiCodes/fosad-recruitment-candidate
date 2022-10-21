import { GetOtherInformationList } from "@api/services/profile/otherInformations";
import { useQuery } from "react-query";

const useGetOtherInformation = () =>
  useQuery("getOtherInformation", GetOtherInformationList);

export { useGetOtherInformation };
