import React from "react";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";

const Education = () => {
  return (
    <div>
      <div>
        <button className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg">
          <Icon icon="plusCircle"/>
          <span className="font-semibold text-secondary text-base">Add Education</span>
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
