import { GetCandidateSkills } from "@api/services/profile/skill";
import { useQuery } from "react-query";

const useGetCandidatesSkills = () =>
  useQuery("getCandidatesSkills", GetCandidateSkills);

export { useGetCandidatesSkills };
