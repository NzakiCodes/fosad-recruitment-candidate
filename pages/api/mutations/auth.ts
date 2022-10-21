import { CandidateLogin, SignUp } from "@api/services/auth";
import { useMutation } from "react-query";

export const useSignUpCandidtate = () => useMutation(SignUp);

export const useLoginCandidate = () => useMutation(CandidateLogin);
