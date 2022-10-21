import { AddEducation } from "@api/services/profile/education";
import { useMutation } from "react-query";

const useAddEducation = () => useMutation(AddEducation);

export { useAddEducation };
