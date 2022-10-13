import { FC, useEffect, useState } from "react";
import SelectCheckbox from "../../components/Atoms/SelectCheckbox";
import { JobType } from "../../interfaces/jobs";

interface IOnboardingStep2 {
  selectedJobType: string[];
  setSelectedJobType: Function;
}

const OnboardingStepTwo: FC<IOnboardingStep2> = ({
  setSelectedJobType,
  selectedJobType,
}) => {
  const [jobTypeList, setJobTypeList] = useState<JobType[]>([
    { id: "full_time", title: "Full Time", isSelected: false },
    { id: "part_time", title: "Part Time", isSelected: false },
    { id: "others", title: "Others", isSelected: false },
  ]);

  const updateJobTypeList = (id: string) => {
    const updatedJobs = jobTypeList.map((job) => {
      if (id === job.id) {
        return { ...job, isSelected: !job.isSelected };
      }
      return job;
    });
    setJobTypeList(updatedJobs);
  };

  useEffect(() => {
    jobTypeList.map((job) => {
      if (job.isSelected === true) {
        setSelectedJobType([...selectedJobType, job.title]);
      }
    });
  }, [jobTypeList]);

  return (
    <div className="lg:w-full mx-5">
      {jobTypeList &&
        jobTypeList?.map(({ id, title, isSelected }) => (
          <SelectCheckbox
            key={id}
            text={title}
            selected={isSelected}
            onClick={() => updateJobTypeList(id)}
          />
        ))}
    </div>
  );
};

export default OnboardingStepTwo;
