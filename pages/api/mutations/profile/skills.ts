import { AddSkills } from "@api/services/profile/skill";
import { useMutation } from "react-query";

const useAddCandidatesSkills = () => useMutation(AddSkills);

export { useAddCandidatesSkills };
