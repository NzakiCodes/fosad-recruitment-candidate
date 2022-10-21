import {
  GetSingleWorkExperience,
  GetUserWorkExperience,
} from "@api/services/profile/experience";
import { useQuery } from "react-query";

const useGetUsersWorkExperience = () =>
  useQuery("getUsersWorkExperience", GetUserWorkExperience);

const useGetSingleWorkExperience = (id: string) =>
  useQuery("getSingleWorkExperience", () => GetSingleWorkExperience(id));

export { useGetUsersWorkExperience, useGetSingleWorkExperience };
