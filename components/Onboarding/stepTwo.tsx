import SelectCheckbox from "@components/Atoms/SelectCheckbox";
import { JobType } from "@interface/jobs";
import { FC, useState } from "react";

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

  const updateJobTypeList = (jobType: JobType) => {
    if (selectedJobType.indexOf(jobType.title) !== -1) {
      setSelectedJobType(
        selectedJobType.filter(
          (selectedName: string) => selectedName !== jobType.title
        )
      );
    } else {
      setSelectedJobType([...selectedJobType, jobType.title]);
    }
  };

  return (
    <div className="lg:w-full lg:mx-5">
      {jobTypeList &&
        jobTypeList?.map((job: JobType) => (
          <SelectCheckbox
            key={job?.id}
            text={job.title}
            selected={selectedJobType.includes(job.title)}
            onClick={() => updateJobTypeList(job)}
          />
        ))}
    </div>
  );
};

export default OnboardingStepTwo;
