import { useState } from "react";
import Checkbox from "../../../Atoms/Checkbox/Index";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";
import Modal from "../../../Molecules/Modal";

const WorkExperience = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
       <Modal className="max-h-[640px] overflow-scroll" isOpen={showModal} handleClose={() => setShowModal(false)}>
       <div className="px-3 py-3 bg-[#e5eaf0] rounded-lg ">
          <div className="flex justify-between ">
            <div className="px-2 py-3 font-semibold text-secondary text-[18px]">
              Work Experience
            </div>
            <button onClick={() => setShowModal(false)}>
              <Icon icon="cancel" />
            </button>
          </div>
        </div>
        <div>
          <form className="pt-6 px-6">
            <label className="text-[#63748A] font-medium">Title</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="Title of your work experience"
              name="email"
            />
          </form>
          <form className="px-6">
            <label className="text-[#63748A] font-medium">Company</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="Name of employer company"
              name="email"
            />
          </form>
         
          <div className=" px-6 py-4 flex">
            <div className="mr-3 w-4 h-4"><Checkbox type="squared" size="small" color="primary" checked={false}/></div>
            
           <p className="text-[#63748A] font-medium text-[16px]">I currently work here</p>
          </div>
          <div className="flex px-6 pb-4">
          <form className=" px-6">
            <label className="text-[#63748A] font-medium">Start Date</label>
            <input
              type="date"
              className="rounded-lg py-4 px-2 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[16px] flex gap-1 my-3"
              placeholder="mm/yyyy"
              name="email"
            />
          </form>
          <form className=" px-6">
            <label className="text-[#63748A] font-medium">End Date</label>
            <input
              type="date"
              className="rounded-lg py-4 px-2 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[16px] flex gap-1 my-3"
              placeholder="mm/yyyy"
              name="email"
            />
          </form>
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
