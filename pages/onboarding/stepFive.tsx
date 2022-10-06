import { FC, useState } from "react";
import SelectCheckbox from "../../components/Atoms/SelectCheckbox";
import { JobType } from "../../interfaces/jobs";

interface IOnboardingStep5 {
  selectWorkIndustry: JobType;
  setSelectedWorkIndustry: Function;
}

const OnboardingStepFive: FC<IOnboardingStep5> = ({
  selectWorkIndustry,
  setSelectedWorkIndustry,
}) => {
  const [jobTypeList, setJobTypeList] = useState<JobType[]>([
    { id: "business", title: "Business", isSelected: false },
    { id: "part_time", title: "Transportation and Storage", isSelected: false },
    { id: "retail", title: "Retail", isSelected: false },
    {
      id: "finance_insurance",
      title: "Finance and Insurance",
      isSelected: false,
    },
    { id: "manufacturing", title: "Manufacturing", isSelected: false },
    { id: "technology", title: "Technology", isSelected: false },
    { id: "food", title: "Food", isSelected: false },
  ]);
  const updateJobTypeList = (id: string) => {
    const updatedJobs = jobTypeList.map((job) => {
      if (id === job.id) {
        setSelectedWorkIndustry(job);
      }
      return job;
    });
    setJobTypeList(updatedJobs);
  };
  return (
    <div className="lg:w-full mx-5">
      <span className="inline-block mb-4 font-semibold text-xl text-secondary">
        Please select a location from the dropdown.
      </span>

      {jobTypeList &&
        jobTypeList?.map(({ id, title }) => (
          <SelectCheckbox
            key={id}
            text={title}
            selected={selectWorkIndustry.id === id}
            onClick={() => updateJobTypeList(id)}
          />
        ))}
    </div>
  );
};

export default OnboardingStepFive;
