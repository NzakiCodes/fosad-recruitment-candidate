import { useUpdateOtherInformation } from "@api/mutations/profile/otherInformation";
import { UpdateOtherInformation } from "@api/services/profile/otherInformations";
import Icon from "@components/Atoms/Icon";
import SelectableLabel from "@components/Atoms/SelectableLabel";
import Modal from "@components/Molecules/Modal";
import { OtherInformationInterface } from "@interface/profile";
import useForm from "@utils/useForm";
import { AxiosResponse, AxiosError } from "axios";
import { FC, useState } from "react";
import toast from "react-hot-toast";

interface IModal {
  showModal: boolean;
  setShowModal: Function;
  editItem: OtherInformationInterface;
  refetchData: Function;
}

const EditOtherInformation: FC<IModal> = ({
  showModal,
  setShowModal,
  editItem,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [geoPreferences, setGeoPreferences] = useState<string[]>(
    editItem.geoPreferences
  );
  const [languages, setLanguages] = useState<string[]>(editItem.languages);
  const [geoPreference, setGeoPreference] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

  console.log(editItem);

  const submit = () => {
    setLoading(true);
    try {
      const res = UpdateOtherInformation(
        {
          yearsOfExperience: inputs.yearsOfExperience
            ? inputs.yearsOfExperience
            : editItem.yearsOfExperience,
          preferredEmployerSize: inputs.preferredEmployerSize
            ? inputs.preferredEmployerSize
            : editItem.preferredEmployerSize,
          location: inputs.location ? inputs.location : editItem.location,
          minimumDesiredPay: inputs.minimumDesiredPay
            ? inputs.minimumDesiredPay
            : editItem.minimumDesiredPay,
          languages: languages,
          geoPreferences: geoPreferences,
        },
        editItem.id!
      );
      toast.success("Successful");
      setLoading(false);
      setShowModal(false);
    } catch (error) {
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
    }
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
              defaultValue={editItem.minimumDesiredPay}
            />
          </div>
          <div className="px-6">
            <label className="text-[#63748A] font-medium">
              Years Of Experience
            </label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="11"
              name="yearsOfExperience"
              onChange={handleChange}
              defaultValue={editItem.yearsOfExperience}
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
              onChange={handleChange}
              defaultValue={editItem.preferredEmployerSize}
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
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
          <div className=" px-6">
            <label className="text-[#63748A] font-medium">Location</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="Lagos, Nigeria"
              name="Location"
              onChange={handleChange}
              defaultValue={editItem.location}
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
            <button className="text-[16px] px-5 py-[14px] rounded-lg w-32 border border-[#D1D5DB]">
              Cancel
            </button>
            <button
              className="bg-secondary text-white text-[16px] px-5 py-[14px] rounded-lg w-32 ml-4"
              type="submit"
              disabled={loading}
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditOtherInformation;
