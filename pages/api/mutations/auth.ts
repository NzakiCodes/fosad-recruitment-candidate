import { useMutation } from "react-query";
import { SignUp } from "../services/auth";

export const useSignUpCandidtate = () => useMutation(SignUp);
