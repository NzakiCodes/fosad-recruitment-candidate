import { useAddOtherInformation } from "@api/mutations/profile/otherInformation";
import { useGetOtherInformation } from "@api/queries/profile/otherInformation";
import Button from "@components/Atoms/Button";
import Icon from "@components/Atoms/Icon";
import SelectableLabel from "@components/Atoms/SelectableLabel";
import Modal from "@components/Molecules/Modal";
import { OtherInformation } from "@interface/profile";
import useForm from "@utils/useForm";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

declare type LocationType = {
  id: string;
  title: string;
  isSelected: boolean;
};

const OtherInformation = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [geoPreferences, setGeoPreferences] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [geoPreference, setGeoPreference] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const { data } = useGetOtherInformation();
  const { mutate, isLoading } = useAddOtherInformation();

  const submit = () => {
    setLoading(true);
    mutate(
      { ...inputs },
      {
        onSuccess: async (response: AxiosResponse<OtherInformation>) => {
          toast.success("Successful");
          setLoading(false);
          setShowModal(false);
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            toast.error(error.response?.data.data.message);
            setLoading(false);
            setShowModal(false);
          } else {
            toast.error(`${error}`);
            setLoading(false);
            setShowModal(false);
          }
        },
      }
    );
  };

  const { handleChange, handleSubmit, inputs } = useForm<OtherInformation>(
    {} as OtherInformation,
    submit
  );

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
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="11"
              name="yearsOfExperience"
              onChange={handleChange}
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
            <button className="bg-secondary text-white text-[16px] px-5 py-[14px] rounded-lg w-32 ml-4">
              Save
            </button>
          </div>
        </form>
      </Modal>
      <OtherInfoCard
        title="Other Informations"
        edit={() => setShowModal(true)}
      ></OtherInfoCard>
      <div className="px-5 bg-white rounded-lg">
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Minimum Desired Pay
          </div>
          <div className="text-[16px] font-semibold">$250,000/yr</div>
        </div>
        <hr className="w-full"></hr>
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Years of Experience
          </div>
          <p className="text-[16px] font-semibold">11</p>
        </div>
        <hr className="w-full"></hr>
        <div className="pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Preferred Employer Size
          </div>
          <p className="text-[16px] font-semibold">Startups, Middle Business</p>
        </div>
        <hr className="w-full"></hr>
        <div className="pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Languages
          </div>
          <p className="text-[16px] font-semibold">English, French, Yoruba</p>
        </div>
        <hr className="w-full"></hr>
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">Location</div>
          <p className="text-[16px] font-semibold">Lagos, Nigeria</p>
        </div>
        <hr className="w-full"></hr>
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Geo Preferences
          </div>
          <p className="text-[16px] font-semibold">
            Lagos, Abuja, Portharcourt, Ogun
          </p>
        </div>
      </div>
    </div>
  );
};

const OtherInfoCard = ({ title, edit }: { title: string; edit: Function }) => {
  return (
    <div className="bg-white p-6 rounded-lg my-1">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-[22px] top-10 gap-6 rounded p-3">
            {title}
          </h1>
        </div>
        <div>
          <Button
            noMargin
            color="secondary"
            label="Edit"
            bold
            size="small"
            onClick={() => edit()}
            iconRight={<Icon icon="editwhite" />}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
