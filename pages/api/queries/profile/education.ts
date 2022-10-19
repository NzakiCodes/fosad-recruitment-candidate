import {
  GetSingleEducation,
  GetUserEducation,
} from "@api/services/profile/education";
import { useQuery } from "react-query";

const useGetUsersEducation = () =>
  useQuery("getUserEducation", GetUserEducation);

const useGetSingleEducation = (id: string) =>
  useQuery("getSingleUserEducation", () => GetSingleEducation(id));

export { useGetUsersEducation, useGetSingleEducation };
