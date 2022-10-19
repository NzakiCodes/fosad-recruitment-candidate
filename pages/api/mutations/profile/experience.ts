import {
  AddExperience,
  UpdateWorkExperience,
} from "@api/services/profile/experience";
import { useMutation } from "react-query";

const useAddExperience = () => useMutation(AddExperience);

const useUpdateWorkExperience = () => useMutation(UpdateWorkExperience);

export { useAddExperience, useUpdateWorkExperience };
