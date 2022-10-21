import { AddAccount } from "@api/services/profile/account";
import { useMutation } from "react-query";

const useAddAccount = () => useMutation(AddAccount);

export { useAddAccount };
