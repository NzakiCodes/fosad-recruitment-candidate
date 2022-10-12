import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Avatar from "../../components/Atoms/Avatar";
import Container from "../../components/Atoms/Container";
import Icon from "../../components/Atoms/Icon";
import DashboardLayout from "../../components/Layouts/Dashboard";
import Education from "../../components/Organisms/ProfileTabs/Education";
import CandidateSidebar, {
  menuItems,
} from "../../components/Molecules/CandidateSidebar";

import Overview from "../../components/Organisms/ProfileTabs/Overview";
import Skills from "../../components/Organisms/ProfileTabs/Skills";
import WorkExperience from "../../components/Organisms/ProfileTabs/WorkExperience";
import MyAccount from "../../components/Organisms/ProfileTabs/MyAccount";
<<<<<<< HEAD
import OtherInformation from "../../components/Organisms/ProfileTabs/OtherInformation";
=======
import Modal from "../../components/Molecules/Modal";
import Resume from "../../components/Organisms/ProfileTabs/Resume";
>>>>>>> 056e133d53ac2ee451b572713b1ced5b0f7b9539

function Profile() {
  const { query } = useRouter();
  const [currentTab, setCurrentTab] = useState<string>("overview");
  useEffect(() => {
    if (query.tab) {
      const itemExist = menuItems.find((m) => m.id == query.tab);
      console.log(itemExist);
      if (itemExist) setCurrentTab(`${query.tab}`);
    }
  }, [query]);

  return (
    <Container className="py-4">
      <div className="flex gap-x-10">
        <div className="w-[20%] h-full hidden lg:block relative">
          <div className="fixed">
            <CandidateSidebar
              activeTabId={currentTab}
              setActiveTab={setCurrentTab}
            />
          </div>
        </div>
        <div className="w-[55%]">
          {currentTab === "overview" && <Overview />}
          {currentTab === "work" && <WorkExperience />}
          {currentTab === "education" && <Education />}
          {currentTab === "resume" && <Resume />}
          {currentTab === "otherInfo" && <OtherInformation />}
          {currentTab === "account" && <MyAccount />}
          {currentTab === "skills" && <Skills />}
        </div>
        <div className="hidden lg:block w-[25%] h-full">
          <div className="fixed">
            <div className="w-[343px]">
              <div className=" bg-primary bg-opacity-30 rounded-tl-lg rounded-tr-lg  px-4 py-2 landing-header-card  flex items-center gap-4">
                <Avatar
                  source="/assets/ai-avatar.svg"
                  alt="ai-avatar"
                  size="large"
                />
                <div className="text-secondary ">
                  <span className="block font-semibold text-base">
                    {"I'm"} Tega,
                  </span>
                  <span className="text-base font-normal">
                    your personal recruiter.
                  </span>
                  <Link href={"/profile?tab=education"}>
                    <a>JJ</a>
                  </Link>
                </div>
              </div>
              <div className="bg-white pt-4 pb-2 rounded-b-lg">
                <div className=" px-6 border-b border-[#F7F8FA] pb-3 ">
                  <h3 className="text-base font-semibold text-secondary">
                    Your profile is almost complete.
                  </h3>
                  <div className="w-full rounded-full my-3 bg-[#E3EFEB]">
                    <div className="bg-[#379573] py-1 w-1/3 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-[#63748A] inline-block my-2">
                    Finish your profile to get accurated job matches and stand
                    out.
                  </span>
                </div>
                <div className="my-4 px-6 relative z-[1]">
                  <CustomRadioButtton
                    isSelected={false}
                    text="Add Work Experience"
                  />
                  <CustomRadioButtton isSelected={true} text="Add Education" />
                  <CustomRadioButtton isSelected={true} text="Add Skills" />
                  <CustomRadioButtton
                    isSelected={false}
                    text="Add Years of Experience"
                  />
                  <CustomRadioButtton
                    isSelected={false}
                    text="Add Salary Range"
                  />
                  <CustomRadioButtton
                    isSelected={false}
                    text="Add Profile Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const CustomRadioButtton = ({
  isSelected,
  text,
}: {
  isSelected: boolean;
  text: string;
}) => {
  return (
    <button
      className={`flex justify-between w-full items-center my-3 ${
        isSelected ? "opacity-40" : ""
      }`}
    >
      <div className="flex gap-x-3 items-center">
        {isSelected ? (
          <svg
            width="24"
            height="25"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.5"
              width="28"
              height="28"
              rx="14"
              className="fill-secondary group-hover:fill-white transition-colors hover:transition-colors"
            />
            <path
              d="M19.5917 10.5083C19.5142 10.4302 19.4221 10.3682 19.3205 10.3259C19.219 10.2836 19.11 10.2618 19 10.2618C18.89 10.2618 18.7811 10.2836 18.6796 10.3259C18.578 10.3682 18.4858 10.4302 18.4084 10.5083L12.2 16.725L9.59171 14.1083C9.51127 14.0306 9.41632 13.9695 9.31227 13.9285C9.20823 13.8875 9.09713 13.8674 8.98531 13.8694C8.87349 13.8713 8.76315 13.8952 8.66058 13.9398C8.55802 13.9844 8.46524 14.0487 8.38754 14.1292C8.30984 14.2096 8.24875 14.3046 8.20774 14.4086C8.16674 14.5127 8.14663 14.6238 8.14856 14.7356C8.1505 14.8474 8.17444 14.9577 8.21902 15.0603C8.2636 15.1629 8.32794 15.2556 8.40837 15.3333L11.6084 18.5333C11.6858 18.6114 11.778 18.6734 11.8796 18.7157C11.9811 18.7581 12.09 18.7798 12.2 18.7798C12.3101 18.7798 12.419 18.7581 12.5205 18.7157C12.6221 18.6734 12.7142 18.6114 12.7917 18.5333L19.5917 11.7333C19.6763 11.6553 19.7438 11.5606 19.79 11.4552C19.8361 11.3498 19.86 11.2359 19.86 11.1208C19.86 11.0058 19.8361 10.8919 19.79 10.7865C19.7438 10.6811 19.6763 10.5864 19.5917 10.5083Z"
              className="group-hover:fill-secondary fill-white transition-colors hover:transition-colors"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="25"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1"
              width="27"
              height="27"
              rx="13.5"
              stroke="#C3C9CE"
            />
          </svg>
        )}

        <span className="text-sm">{text}</span>
      </div>
      <Icon icon="arrowForward" />
    </button>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Profile;
