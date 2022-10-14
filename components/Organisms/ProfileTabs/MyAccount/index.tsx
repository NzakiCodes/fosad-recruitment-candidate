import React, { useState } from "react";
import Avatar from "../../../Atoms/Avatar";
import Button from "../../../Atoms/Button";
import Icon from "../../../Atoms/Icon";
import Modal from "../../../Molecules/Modal";

const MyAccount = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
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
        <form className="max-h-[90vh] overflow-auto pb-20  lg:pb-4">
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
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#9EABBC] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="Title your work experience"
              name="email"
            />
          </div>
          <div className="pb-4 px-6">
            <label className="text-[#63748A]">Phone Number</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#9EABBC] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="Name of employer company"
              name="email"
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
              name="email"
            />
          </div>
          <div className=" px-6">
            <label className="text-[#63748A]">Linkedin</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="linkedin.com/"
              name="email"
            />
          </div>
          <div className=" px-6">
            <label className="text-[#63748A]">Twitter</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#9EABBC] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="twitter.com/"
              name="email"
            />
          </div>
          <div className=" px-6">
            <label className="text-[#63748A]">Instagram</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-[#9EABBC] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-normal text-[18px] flex gap-5 my-3"
              placeholder="instagram.com/"
              name="email"
            />
          </div>
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
      <MyAccountCard
        title="My Account"
        edit={() => setShowModal(true)}
      ></MyAccountCard>
      <div className="px-5 bg-white rounded-lg">
        <div className=" pt-6 pb-3">
          <div className="left-[24px]">
            <div className=" bg-primary bg-opacity-30 rounded-tl-lg rounded-tr-lg  px-4 py-2 landing-header-card  flex items-center gap-4">
              <div className="relative">
                <Avatar size="large" source="/assets/images/user-1.png" />
                <span className="bg-[#3983CF] rounded-full w-8 h-8 -right-1 -bottom-1 absolute">
                  <Icon icon="camera" />
                </span>
              </div>

              <span className="block font-semibold text-base">
                Elvie Weimann
              </span>
            </div>
          </div>
        </div>
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A] pb-3">
            Contact Indivation
          </div>
          <table className="border-2 w-full rounded-lg border-separate">
            <tr className="border-2">
              <td className="p-2 flex flex-row">
                <div className="m-[5px]">
                  <Icon icon="inboxcolor" />
                </div>
                <div className="ml-3 text-[16px] font-medium">
                  elvieweimann@gmail.com
                </div>
              </td>
            </tr>
            <hr className="w-full"></hr>
            <tr className="border-2">
              <td className="p-2 flex flex-row">
                <div className="m-[5px]">
                  <Icon icon="phone" />
                </div>
                <div className="ml-3 text-[16px] font-medium text-[#A0AEC1]">
                  Add Phone Number
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A] pb-3">
            Website & Social Media
          </div>
          <table className="border-2 w-full rounded-lg border-separate">
            <tr className="border-2">
              <td className="p-2 flex flex-row">
                <div className="m-[5px]">
                  <Icon icon="smuv" />
                </div>
                <div className="ml-3 text-[16px] font-medium text-secondary">
                  Smuv.studio
                </div>
              </td>
            </tr>
            <hr className="w-full"></hr>
            <tr className="border-2">
              <td className="p-2 flex flex-row">
                <div className="m-[5px]">
                  <Icon icon="linkedin" />
                </div>
                <div className="ml-3 text-[16px] font-medium text-[#A0AEC1]">
                  Add Linkedin profile
                </div>
              </td>
            </tr>
            <hr className="w-full"></hr>
            <tr className="border-2">
              <td className="p-2 flex flex-row">
                <div className="m-[5px]">
                  <Icon icon="github" />
                </div>
                <div className="ml-3 text-[16px] font-medium text-[#A0AEC1]">
                  Add Github profile
                </div>
              </td>
            </tr>
            <hr className="w-full"></hr>
            <tr className="border-2">
              <td className="p-2 flex flex-row">
                <div className="m-[5px]">
                  <Icon icon="twitter" />
                </div>
                <div className="ml-3 text-[16px] font-medium text-secondary">
                  Twitter.com/smuvstudio
                </div>
              </td>
            </tr>
            <hr className="w-full"></hr>
            <tr className="border-2">
              <td className="p-2 flex flex-row">
                <div className="m-[5px]">
                  <Icon icon="instagram" />
                </div>
                <div className="ml-3 text-[16px] font-medium text-[#A0AEC1]">
                  Add Instagram profile
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
const MyAccountCard = ({ title, edit }: { title: string; edit: Function }) => {
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

export default MyAccount;
