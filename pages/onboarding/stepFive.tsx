import { FC, useEffect, useState } from "react";
import SelectCheckbox from "../../components/Atoms/SelectCheckbox";
import { JobInterests, JobType } from "../../interfaces/jobs";
import { useGetUserInterests } from "../api/queries/user";

interface IOnboardingStep5 {
  selectWorkIndustry: JobInterests;
  setSelectedWorkIndustry: Function;
}

const OnboardingStepFive: FC<IOnboardingStep5> = ({
  selectWorkIndustry,
  setSelectedWorkIndustry,
}) => {
  const { data, isLoading } = useGetUserInterests();

  const updateJobTypeList = (id: string) => {
    const updatedJobs = data?.data.data.map((job) => {
      if (id === job.id) {
        setSelectedWorkIndustry(job);
      }
      return job;
    });
    return updatedJobs;
  };

  return (
    <div className="lg:w-full mx-5">
      <div className="inline-block mb-4 font-semibold text-xl text-secondary">
        Select any you might be interested in.
      </div>
      <div>
        {isLoading ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          data?.data.data?.map(({ id, name }) => (
            <SelectCheckbox
              key={id}
              text={name}
              onClick={() => updateJobTypeList(id)}
              selected={selectWorkIndustry.id === id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OnboardingStepFive;
