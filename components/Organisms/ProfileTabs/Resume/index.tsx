import React, { useState } from "react";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";
import Modal from "../../../Molecules/Modal";

const Resume = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <Modal isOpen={showModal} handleClose={() => setShowModal(false)}>
        <div className="px-5 py-5">
          <div className="flex justify-end">
            <button onClick={() => setShowModal(false)}>
              <Icon icon="cancel" />
            </button>
          </div>
          
          <div className="lg:w-full mx-5 lg:mx-auto text-center flex flex-col items-center justify-center pb-4">
      <div className="h-[58px] w-[58px] bg-[#E1EEFB] rounded-full my-5"></div>
      <span className="block font-semibold text-[18px] text-secondary">
        Upload Your resume
      </span>
      <span className="inline-block font-medium text-[16px] text-[#63748A]">
        Uploading a new resume might alter your existing profile.
      </span>
      <span className="inline-block font-medium text-[16px] text-[#63748A]">
        Are you sure you want to proceed?
      </span>
          </div>
          <hr className="w-full"></hr>
          <div className="pb-4 flex justify-between pt-6 px-4 ">
            <button className="text-[15px] px-5 py-[14px] rounded-lg w-38 border h-[58px] text-[#63748A] border-[#D1D5DB]">
              No, don't upload
            </button>
            <button className="bg-secondary text-white text-[15px] px-5 py-[14px] rounded-lg w-38 h-[58px] ml-4">
              Yes, Upload
            </button>
          </div>
        </div>
      </Modal>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg"
        >
          <Icon icon="file" />
          <span className="font-semibold text-secondary text-base">
            Upload Resume
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
      </div>
    </div>
  );
};

export default Resume;
