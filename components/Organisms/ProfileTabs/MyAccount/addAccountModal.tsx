import { useAddAccount } from "@api/mutations/profile/account";
import Avatar from "@components/Atoms/Avatar";
import Icon from "@components/Atoms/Icon";
import Modal from "@components/Molecules/Modal";
import { AccountInterface, SocialsInterface } from "@interface/profile";
import useForm from "@utils/useForm";
import { AxiosResponse, AxiosError } from "axios";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";

interface IModal {
  showModal: boolean;
  setShowModal: Function;
  refetchData: Function;
}

const AddAccountModal: FC<IModal> = ({
  showModal,
  setShowModal,
  refetchData,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { mutate, isLoading } = useAddAccount();

  const submit = () => {
    setLoading(true);
    mutate(
      { ...inputs, social: socials.inputs },
      {
        onSuccess: async (response: AxiosResponse<AccountInterface>) => {
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

  const { handleChange, handleSubmit, inputs } = useForm<AccountInterface>(
    {} as AccountInterface,
    submit
  );

  const socials = useForm<SocialsInterface>({} as SocialsInterface, submit);

  return (
    <div>
      <Modal
        className=""
        isOpen={showModal}
        handleClose={() => setShowModal(false)}
      >
        <div className="px-3 py-3 bg-[#e5eaf0] rounded-t-lg ">
          <div className="flex justify-between ">
            <div className="px-2 py-3 font-semibold text-secondary text-[18px]">
              Account
            </div>
            <button
              className="self-start p-3"
              onClick={() => setShowModal(false)}
            >
              <Icon icon="cancel" />
            </button>
          </div>
        </div>
        <form
          className="max-h-[90vh] overflow-auto pb-20  lg:pb-4"
          onSubmit={handleSubmit}
        >
          <div className=" rounded-tl-lg rounded-tr-lg  px-4 py-3 landing-header-card flex items-center gap-4">
            <div className="relative">
              <Avatar size="small" source="/assets/images/user-1.png" />
            </div>

            <span className="block font-medium text-base">
              Add Profile Image
            </span>
          </div>
          <div className=" px-6">
            <label className="text-[#63748A]">Email</label>
            <input
              type="email"
              className="w-full rounded-lg py-4 px-5 text-[#9EABBC] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="pb-4 px-6">
            <label className="text-[#63748A]">Phone Number</label>
            <input
              type="number"
              className="w-full rounded-lg py-4 px-5 text-[#9EABBC] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <hr className="w-full"></hr>
          <div className="pt-5 px-6">
            <h1 className="font-semibold text-[18px] text-secondary pb-3">
              Website & Social media
            </h1>
            <label className="text-[#63748A]">Website</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#9EABBC] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="http://"
              name="website"
              onChange={socials.handleChange}
            />
          </div>
          <div className=" px-6">
            <label className="text-[#63748A]">Linkedin</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="linkedin.com/"
              name="linkedin"
              onChange={socials.handleChange}
            />
          </div>
          <div className=" px-6">
            <label className="text-[#63748A]">Twitter</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#9EABBC] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="twitter.com/"
              name="twitter"
              onChange={socials.handleChange}
            />
          </div>
          <div className=" px-6">
            <label className="text-[#63748A]">Instagram</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#9EABBC] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="instagram.com/"
              name="instagram"
              onChange={socials.handleChange}
            />
          </div>
          <div className="pb-4 flex justify-end pt-6 px-4 ">
            <button
              className="text-[16px] px-5 py-[14px] rounded-lg w-32 border border-[#D1D5DB]"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-secondary text-white text-[16px] px-5 py-[14px] rounded-lg w-32 ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || loading}
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddAccountModal;
