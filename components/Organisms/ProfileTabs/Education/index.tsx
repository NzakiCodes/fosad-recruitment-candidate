import React, { useState } from "react";
import Checkbox from "../../../Atoms/Checkbox/Index";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";
import Modal from "../../../Molecules/Modal";

const Education = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <div>
        <Modal
          className=" overflow-auto"
          isOpen={showModal}
          handleClose={() => setShowModal(false)}
        >
          <div className="px-3 py-3 bg-[#e5eaf0]  ">
            <div className="flex justify-between ">
              <div className="px-2 py-3 font-semibold text-secondary text-[18px]">
                Education
              </div>
              <button
                className="self-start p-2"
                onClick={() => setShowModal(false)}
              >
                <Icon icon="cancel" />
              </button>
            </div>
          </div>
          <form>
            <div className="pt-6 px-6">
              <label className="text-[#63748A] font-medium">School</label>
              <input
                type="text"
                className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
                placeholder="Title of your work experience"
                name="email"
              />
            </div>
            <div className="px-6">
              <label className="text-[#63748A] font-medium">Degree</label>
              <input
                type="text"
                className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
                placeholder="Name of employer company"
                name="email"
              />
            </div>
            <div className="px-6">
              <label className="text-[#63748A] font-medium">
                Field of Study
              </label>
              <input
                type="text"
                className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
                placeholder="Name of employer company"
                name="email"
              />
            </div>
            <div className=" px-6 py-4 flex">
              <div className="mr-3">
                <Checkbox
                  type="squared"
                  size="small"
                  color="primary"
                  checked={false}
                />
              </div>

              <p className="text-[#63748A] font-medium text-[16px]">
                Currently in progress
              </p>
            </div>
            <div className="flex px-6 pb-4 gap-x-3 lg:gap-6">
              <div className="w-1/2">
                <label className="text-[#63748A] font-medium">Start Date</label>
                <input
                  type="date"
                  className="rounded-lg py-4 px-2 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[16px] flex gap-1 my-3 w-full"
                  placeholder="mm/yyyy"
                  name="email"
                />
              </div>
              <div className="w-1/2">
                <label className="text-[#63748A] font-medium">End Date</label>
                <input
                  type="date"
                  className="rounded-lg py-4 px-2 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[16px] flex gap-1 my-3 w-full"
                  placeholder="mm/yyyy"
                  name="email"
                />
              </div>
            </div>
            <hr className="w-full"></hr>
            <div className="pb-4 flex justify-end pt-6 px-4 ">
              <button
                onClick={() => setShowModal(false)}
                className="text-[16px] px-5 py-[14px] rounded-lg w-32 border border-[#D1D5DB]"
              >
                Cancel
              </button>
              <button className="bg-secondary text-white text-[16px] px-5 py-[14px] rounded-lg w-32 ml-4">
                Save
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg"
        >
          <Icon icon="plusCircle" />
          <span className="font-semibold text-secondary text-base">
            Add Education
          </span>
        </button>
      </div>
      <div>
        <ProfileCard
          role="Macman College"
          company="SSCE"
          duration="September 2014 - 2019"
          edit={() => {}}
        />
        <ProfileCard
          role="Abia State University"
          company="Bachelor of Science - BSc Economics"
          duration="March 2019 - 2020"
          edit={() => {}}
        />
      </div>
    </div>
  );
};

export default Education;
