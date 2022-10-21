import { useGetUsersAccount } from "@api/queries/profile/account";
import Spinner from "@components/Spinner";
import { AccountInterface } from "@interface/profile";
import React, { useState } from "react";
import Avatar from "../../../Atoms/Avatar";
import Button from "../../../Atoms/Button";
import Icon from "../../../Atoms/Icon";
import Modal from "../../../Molecules/Modal";
import AddAccountModal from "./addAccountModal";
import EditAccount from "./editAccountModal";

const MyAccount = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<AccountInterface>(
    {} as AccountInterface
  );

  const { data, isLoading, refetch } = useGetUsersAccount();

  return (
    <div>
      {data?.data && data?.data.length >= 1 ? (
        ""
      ) : (
        <button
          onClick={() => setShowModal(true)}
          className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg"
        >
          <Icon icon="plusCircle" />
          <span className="font-semibold active:outline-0 text-secondary text-base">
            Add Account
          </span>
        </button>
      )}
      {showModal && (
        <AddAccountModal
          showModal={showModal}
          setShowModal={setShowModal}
          refetchData={refetch}
        />
      )}
      {showEditModal && (
        <EditAccount
          showModal={showEditModal}
          setShowModal={setShowEditModal}
          refetchData={refetch}
          editItem={itemEdit}
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : data?.data && data.data.length > 0 ? (
        data.data.map((item: AccountInterface) => (
          <div>
            <div className="bg-white p-6 rounded-lg my-1">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold text-[22px] top-10 gap-6 rounded p-3">
                    My Account
                  </h1>
                </div>
                <div>
                  <Button
                    noMargin
                    color="secondary"
                    label="Edit"
                    bold
                    size="small"
                    onClick={() => {
                      setShowModal(true);
                      setItemEdit(item);
                    }}
                    iconRight={<Icon icon="editwhite" />}
                  />
                </div>
              </div>
            </div>
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
                      {item.user.fullName}
                    </span>
                  </div>
                </div>
              </div>
              <div className=" pt-6 pb-3">
                <div className="font-mediun text-[16px] text-[#63748A] pb-3">
                  Contact Information
                </div>
                <table className="border-2 w-full rounded-lg border-separate">
                  <tr className="border-2">
                    <td className="p-2 flex flex-row">
                      <div className="m-[5px]">
                        <Icon icon="inboxcolor" />
                      </div>
                      <div className="ml-3 text-[16px] font-medium">
                        {item.email}
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
                        {item.phone}
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
                        {item.social.website}
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
                        {item.social.linkedin}
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
                        {item.social.twitter}
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
                        {item.social.instagram}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="font-semibold active:outline-0 text-secondary text-base mt-5">
          Please add your Profile Information
        </div>
      )}
    </div>
  );
};

export default MyAccount;
