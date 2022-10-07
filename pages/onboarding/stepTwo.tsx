import { FC, useState } from "react";
import SelectCheckbox from "../../components/Atoms/SelectCheckbox";
import { JobType } from "../../interfaces/jobs";

interface IOnboardingStep2 {
  selectedJobType: JobType;
  setSelectedJobType: Function;
}

const OnboardingStepTwo: FC<IOnboardingStep2> = ({
  selectedJobType,
  setSelectedJobType,
}) => {
  const [jobTypeList, setJobTypeList] = useState<JobType[]>([
    { id: "full_time", title: "Full Time", isSelected: false },
    { id: "part_time", title: "Part Time", isSelected: false },
    { id: "others", title: "Others", isSelected: false },
  ]);

  const updateJobTypeList = (id: string) => {
    const updatedJobs = jobTypeList.map((job) => {
      if (id === job.id) {
        setSelectedJobType(job);
      }
      return job;
    });

    setJobTypeList(updatedJobs);
  };

  return (
    <div className="lg:w-full mx-5">
      {jobTypeList &&
        jobTypeList?.map(({ id, title }) => (
          <SelectCheckbox
            key={id}
            text={title}
            selected={selectedJobType.id === id}
            onClick={() => updateJobTypeList(id)}
          />
        ))}
    </div>
  );
};

export default OnboardingStepTwo;
