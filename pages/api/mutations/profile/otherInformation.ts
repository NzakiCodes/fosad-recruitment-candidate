import {
  AddOtherInformation,
  UpdateOtherInformation,
} from "@api/services/profile/otherInformations";
import { useMutation } from "react-query";

const useAddOtherInformation = () => useMutation(AddOtherInformation);

export { useAddOtherInformation };
