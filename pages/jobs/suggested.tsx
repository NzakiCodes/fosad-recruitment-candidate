import React, { ReactElement } from "react";
import Avatar from "../../components/Atoms/Avatar";
import DashboardLayout from "../../components/Layouts/Dashboard";
import JobCard from "../../components/Molecules/JobCard";
import { useGetSuggestedJobs } from "../api/queries/jobs";

const SuggestedJobs = () => {
  const { data } = useGetSuggestedJobs();
  console.log(data);
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full mt-5 lg:mt-10">
        <div className="w-full md:w-2/5 lg:w-1/4 bg-primary bg-opacity-30 rounded-tl-lg rounded-tr-lg md:rounded-bl-lg md:rounded-tl-lg px-4 py-4 lg:py-7 landing-header-card  flex items-center gap-4">
          <Avatar
            className="!w-[52px] !h-[52px] lg:!w-17 lg:!h-17"
            source="/assets/ai-avatar.svg"
            alt="ai-avatar"
          />
          <div className="text-secondary ">
            <span className="block font-semibold text-base">{"I'm"} Tega,</span>
            <span className="text-sm lg:text-base font-normal">
              your personal recruiter.
            </span>
          </div>
        </div>
        <div className="bg-white w-full py-5  md:w-3/5 lg:w-3/4 rounded-br-lg rounded-bl-lg lg:rounded-br-lg lg:rounded-tr-lg">
          <div className="text-secondary flex flex-col justify-center my-auto h-full px-6">
            <span className="block font-semibold text-sm lg:text-base mb-3 lg:mb-1">
              Here are some suggested Job openings
            </span>
            <span className="text-xs lg:text-base font-normal text-[#63748A]">
              I’ve currated some job openings suggestion based on the data
              provied.
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-5">
        <JobCard
          title="Product Designer for Global Fintach Product"
          location="Lagos, Nigeria"
          annualSalary="$250,000/yr"
          jobType="Full-Time"
          workType="remote"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges? Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever? If you're an outgoing and self-motivated individual who's ready to help children and families discover a new and innovative training program based on brain science that helps children overcome "
          jobStatus="applied"
          link="/"
        />
        <JobCard
          title="Product Designer for Global Fintach Product"
          location="Lagos, Nigeria"
          annualSalary="$250,000/yr"
          jobType="Full-Time"
          workType="remote"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges? Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever? If you're an outgoing and self-motivated individual who's ready to help children and families discover a new and innovative training program based on brain science that helps children overcome "
          jobStatus="interview"
          link="/"
        />
        <JobCard
          title="Product Designer for Global Fintach Product"
          location="Lagos, Nigeria"
          annualSalary="$250,000/yr"
          jobType="Full-Time"
          workType="remote"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges? Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever? If you're an outgoing and self-motivated individual who's ready to help children and families discover a new and innovative training program based on brain science that helps children overcome "
          jobStatus="hired"
          link="/"
        />
      </div>
    </div>
  );
};

SuggestedJobs.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default SuggestedJobs;
