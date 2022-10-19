import { AddEducation, UpdateEducation } from "@api/services/profile/education";
import { useMutation } from "react-query";

const useAddEducation = () => useMutation(AddEducation);

const useUpdateEducation = () => useMutation(UpdateEducation);

export { useAddEducation, useUpdateEducation };
