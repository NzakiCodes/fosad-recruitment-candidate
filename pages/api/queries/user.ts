import { useQuery } from "react-query";
import {
  GetUserInterests,
  GetUserProfile,
  GetUserSkills,
} from "../services/user";

const useGetUserInterests = () =>
  useQuery("getUserInterests", GetUserInterests);

const useGetUserSkills = () => useQuery("getUserSkills", GetUserSkills);

const useGetUserProfile = () => useQuery("getUserProfile", GetUserProfile);

export { useGetUserInterests, useGetUserSkills, useGetUserProfile };
