import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";

const WorkExperience = () => {
  return (
    <div>
      <div>
        <button className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg">
          <Icon icon="plusCircle"/>
          <span className="font-semibold text-secondary text-base">Add Work Experience</span>
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
