import { useQuery } from "react-query";
import { GetUserInterests, GetUserSkills } from "../services/user";

const useGetUserInterests = () =>
  useQuery("getUserInterests", GetUserInterests);

const useGetUserSkills = () => useQuery("getUserSkills", GetUserSkills);

export { useGetUserInterests, useGetUserSkills };
