import { useGetUsersAccount } from "@api/queries/profile/account";
import { useGetUsersEducation } from "@api/queries/profile/education";
import { useGetUsersWorkExperience } from "@api/queries/profile/experience";
import { useGetOtherInformation } from "@api/queries/profile/otherInformation";
import { useGetCandidatesSkills } from "@api/queries/profile/skill";
import { EducationInterface, Experience } from "@interface/profile";

const Overview = () => {
  const education = useGetUsersEducation();
  const account = useGetUsersAccount();
  const skills = useGetCandidatesSkills();
  const workExperience = useGetUsersWorkExperience();
  const otherInformation = useGetOtherInformation();

  return (
    <div className="bg-white lg:px-5 py-5 rounded-lg">
      <div className="top-10 gap-6 rounded p-4 font-semibold text-[22px]">
        Overview
      </div>
      <div className="px-5">
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-[40%]">Location</div>
          <div className="font-semibold w-[40%]">
            {otherInformation.data?.data.data[0].location}
          </div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row justify-between  gap-y-5 pt-6 pb-3">
          <div className=" text-[#63748A] font-medium w-full md:w-[40%]">
            Education
          </div>
          <div className="w-full md:w-[40%]">
            {education.data?.data.data.map((item: EducationInterface) => (
              <h1 className="font-semibold pb-4">
                {item.institution}
                <p className="text-[#63748A]">{`${item.degree}, ${item.startDate} - ${item.endDate}`}</p>
              </h1>
            ))}
          </div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row justify-between pt-6 pb-3 gap-y-5">
          <div className="text-[#63748A] font-medium w-full md:w-[40%]">
            Work Experience
          </div>
          <div className="w-full md:w-[40%]">
            {workExperience.data?.data.data.map((item: Experience) => (
              <h1 className="font-semibold pb-4">
                {item.role}
                <p className="text-[#63748A]">{`${item.organization}, ${item.startDate} - ${item.endDate}`}</p>
              </h1>
            ))}
          </div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row gap-y-5 justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-full md:w-[40%]">
            Skills
          </div>
          <div className="break-normal font-semibold w-full md:w-[40%]">
            Strategy, Product Magement, Unit Economics UX Design
          </div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row gap-y-5 justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-full lg:w-[40%]">
            Years Of Experience
          </div>
          <div className="font-semibold w-full lg:w-[40%]">11</div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row gap-y-5 justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-full md:w-[40%]">
            Preferred Employer Size
          </div>
          <div className="font-semibold w-full md:w-[40%]">
            Startups, Middle Business
          </div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row gap-y-5 justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-full md:w-[40%]">
            Languages
          </div>
          <div className="font-semibold w-full md:w-[40%]">
            English, French, Yoruba
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
