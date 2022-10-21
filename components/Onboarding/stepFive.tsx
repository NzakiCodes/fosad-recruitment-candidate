import { useGetUserInterests } from "@api/queries/user";
import SelectCheckbox from "@components/Atoms/SelectCheckbox";
import Spinner from "@components/Spinner";
import { JobInterests } from "@interface/jobs";
import { FC } from "react";

interface IOnboardingStep5 {
  selectWorkIndustry: string[];
  setSelectedWorkIndustry: Function;
}

const OnboardingStepFive: FC<IOnboardingStep5> = ({
  selectWorkIndustry,
  setSelectedWorkIndustry,
}) => {
  const { data, isLoading } = useGetUserInterests();

  const updateJobTypeList = (jobType: JobInterests) => {
    if (selectWorkIndustry.indexOf(jobType.name) !== -1) {
      setSelectedWorkIndustry(
        selectWorkIndustry.filter(
          (selectedName: string) => selectedName !== jobType.name
        )
      );
    } else {
      setSelectedWorkIndustry([...selectWorkIndustry, jobType.name]);
    }
  };

  return (
    <div className="lg:w-full lg:mx-5">
      <div className="inline-block mb-4 font-semibold text-xl text-secondary">
        Select any you might be interested in.
      </div>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          data?.data.data?.map((item: JobInterests) => (
            <SelectCheckbox
              key={item.id}
              text={item.name}
              onClick={() => updateJobTypeList(item)}
              selected={selectWorkIndustry.includes(item.name)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OnboardingStepFive;
