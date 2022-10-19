import {
  AddOtherInformation,
  UpdateOtherInformation,
} from "@api/services/profile/otherInformations";
import { useMutation } from "react-query";

const useAddOtherInformation = () => useMutation(AddOtherInformation);

const useUpdateOtherInformation = () => useMutation(UpdateOtherInformation);

export { useAddOtherInformation, useUpdateOtherInformation };
