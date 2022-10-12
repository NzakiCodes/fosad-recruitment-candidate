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
          <div className="px-3 py-4">Resume</div>
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
