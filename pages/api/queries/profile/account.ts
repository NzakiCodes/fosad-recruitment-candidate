import { GetUserAccount } from "@api/services/profile/account";
import { useQuery } from "react-query";

const useGetUsersAccount = () => useQuery("getAccount", GetUserAccount);

export { useGetUsersAccount };
