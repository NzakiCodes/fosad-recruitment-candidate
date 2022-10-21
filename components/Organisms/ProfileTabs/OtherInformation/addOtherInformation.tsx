import { useAddOtherInformation } from "@api/mutations/profile/otherInformation";
import Icon from "@components/Atoms/Icon";
import SelectableLabel from "@components/Atoms/SelectableLabel";
import Modal from "@components/Molecules/Modal";
import { OtherInformationInterface } from "@interface/profile";
import useForm from "@utils/useForm";
import { AxiosResponse, AxiosError } from "axios";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";

interface IModal {
  showModal: boolean;
  setShowModal: Function;
  refetchData: Function;
}

const AddOtherInformation: FC<IModal> = ({
  showModal,
  setShowModal,
  refetchData,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [geoPreferences, setGeoPreferences] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [geoPreference, setGeoPreference] = useState<string>("");
  const [yearsOfExperience, setyYearsOfExperience] = useState<string>("");
  const [preferredEmployerSize, setPreferredEmployerSize] =
    useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const { mutate, isLoading } = useAddOtherInformation();

  const submit = () => {
    setLoading(true);
    mutate(
      {
        ...inputs,
        languages: languages,
        geoPreferences: geoPreferences,
        yearsOfExperience: parseInt(yearsOfExperience),
        preferredEmployerSize: parseInt(preferredEmployerSize),
      },
      {
        onSuccess: async (
          response: AxiosResponse<OtherInformationInterface>
        ) => {
          toast.success("Successful");
          setLoading(false);
          setShowModal(false);
          refetchData();
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            if (error.response?.data.data.message) {
              toast.error(error.response?.data.data.message);
              setLoading(false);
              setShowModal(false);
            } else {
              toast.error(`${error.message}`);
              setLoading(false);
              setShowModal(false);
            }
          }
        },
      }
    );
  };

  const { handleChange, handleSubmit, inputs } =
    useForm<OtherInformationInterface>({} as OtherInformationInterface, submit);

  return (
    <div>
      <Modal
        className=""
        isOpen={showModal}
        handleClose={() => setShowModal(false)}
      >
        <div className="px-3 py-3 bg-[#e5eaf0] lg:rounded-t-lg ">
          <div className="flex justify-between ">
            <div className="px-2 py-3 font-semibold text-secondary text-[18px]">
              Other Informations
            </div>
            <button
              className="self-start p-3"
              onClick={() => setShowModal(false)}
            >
              <Icon icon="cancel" />
            </button>
          </div>
        </div>
        <form className="max-h-[80vh] overflow-auto" onSubmit={handleSubmit}>
          <div className="pt-6 px-6">
            <label className="text-[#63748A] font-medium">
              Minimum Desired Pay
            </label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="$250,000/yr"
              name="minimumDesiredPay"
              onChange={handleChange}
            />
          </div>
          <div className="px-6">
            <label className="text-[#63748A] font-medium">
              Years Of Experience
            </label>
            <input
              type="number"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="11"
              name="yearsOfExperience"
              onChange={(e) => setyYearsOfExperience(e.target.value)}
            />
          </div>
          <div className="px-6">
            <label className="text-[#63748A] font-medium">
              Preferred Employer Size
            </label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="Startups, middle business"
              name="preferredEmployerSize"
              onChange={(e) => setPreferredEmployerSize(e.target.value)}
            />
          </div>
          <div className=" px-6">
            <label className="text-[#63748A] font-medium">Languages</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="English, French, Yoruba"
              name="preferredEmployerSize"
              onKeyUp={(e: any) => {
                if (e.key === ",") {
                  let input = e.target.value.trim().split(",");
                  if (input.length === 0 || input[0] === "") return;
                  setLanguages([...languages, input]);
                  setLanguage("");
                }
              }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
          <div className="flex gap-x-3 flex-wrap px-4 pb-3">
            {languages &&
              languages?.map((item: string, index: number) => (
                <SelectableLabel key={index} label={item} />
              ))}
          </div>
          <div className=" px-6">
            <label className="text-[#63748A] font-medium">Location</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="Lagos, Nigeria"
              name="location"
              onChange={handleChange}
            />
          </div>
          <div className=" px-6">
            <label className="text-[#63748A] font-medium">Geo Preference</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              onKeyUp={(e: any) => {
                if (e.key === ",") {
                  let input = e.target.value.trim().split(",");
                  if (input.length === 0 || input[0] === "") return;
                  setGeoPreferences([...geoPreferences, input]);
                  setGeoPreference("");
                }
              }}
              value={geoPreference}
              name="geoPrefences"
              onChange={(e) => setGeoPreference(e.target.value)}
            />
          </div>
          <div className="flex gap-x-3 flex-wrap px-4 pb-3">
            {geoPreferences &&
              geoPreferences?.map((item: string, index: number) => (
                <SelectableLabel key={index} label={item} />
              ))}
          </div>
          <hr className="w-full"></hr>
          <div className="pb-4 flex justify-end pt-6 px-4 ">
            <button
              className="text-[16px] px-5 py-[14px] rounded-lg w-32 border border-[#D1D5DB]"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-secondary text-white text-[16px] px-5 py-[14px] rounded-lg w-32 ml-4"
              type="submit"
              disabled={loading || isLoading}
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddOtherInformation;
