import { AddExperience } from "@api/services/profile/experience";
import { useMutation } from "react-query";

const useAddExperience = () => useMutation(AddExperience);

export { useAddExperience };
