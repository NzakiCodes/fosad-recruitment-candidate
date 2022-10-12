import { useQuery } from "react-query";
import {
  GetAppliedJobs,
  GetSavedJobs,
  GetSuggestedJobs,
} from "../services/jobs";

const useGetSuggestedJobs = () =>
  useQuery("getSuggestedJobs", GetSuggestedJobs);

const useGetAppliedJobs = () => useQuery("getAppliedJobs", GetAppliedJobs);

const useGetSavedJobs = () => useQuery("getSavedJobs", GetSavedJobs);

export { useGetSuggestedJobs, useGetAppliedJobs, useGetSavedJobs };
