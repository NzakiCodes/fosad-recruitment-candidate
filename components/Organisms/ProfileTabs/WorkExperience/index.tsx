import { useState } from "react";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";
import Modal from "../../../Molecules/Modal";

const WorkExperience = () => {
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
        <button onClick={()=>setShowModal(true)} className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg">
          <Icon icon="plusCircle"/>
          <span className="font-semibold active:outline-0 text-secondary text-base">Add Work Experience</span>
        </button>
      </div>
      <div>
        <ProfileCard
          role="Product Lead"
          company="Smuv Legacy Limited"
          duration="September 2020 - Current"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges. Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever."
          edit={() => {}}
          current
        />
        <ProfileCard
          role="Creative Director"
          company="Smuv Legacy Limited"
          duration="March 2019 - 2020"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges. Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever."
          edit={() => {}}
        />
        <ProfileCard
          role="Creative Director"
          company="Smuv Legacy Limited"
          duration="March 2019 - 2020"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges. Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever."
          edit={() => {}}
        />
      </div>
    </div>
  );
};




export default WorkExperience;
