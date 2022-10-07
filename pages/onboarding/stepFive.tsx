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
  const { data } = useGetUserInterests();

  const [jobTypeList, setJobTypeList] = useState<JobInterests[]>(
    data?.data.data!
  );

  const updateJobTypeList = (id: string) => {
    const updatedJobs = jobTypeList.map((job) => {
      if (id === job.id) {
        setSelectedWorkIndustry(job);
      }
      return job;
    });
    setJobTypeList(updatedJobs);
  };

  useEffect(() => {
    setJobTypeList(data?.data.data!);
  }, []);

  return (
    <div className="lg:w-full mx-5">
      <span className="inline-block mb-4 font-semibold text-xl text-secondary">
        Select any you might be interested in.
      </span>

      {jobTypeList &&
        jobTypeList?.map(({ id, name }) => (
          <SelectCheckbox
            key={id}
            text={name}
            selected={selectWorkIndustry.id === id}
            onClick={() => updateJobTypeList(id)}
          />
        ))}
    </div>
  );
};

export default OnboardingStepFive;
