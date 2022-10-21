import SelectRadio from "@components/Atoms/SelectRadio";
import { JobSearchOption } from "@interface/jobs";
import { FC } from "react";

interface IOnboardingStep1 {
  jobOptionSelect: string;
  setJobOptionSelect: Function;
}

const OnboardingStepOne: FC<IOnboardingStep1> = ({
  jobOptionSelect,
  setJobOptionSelect,
}) => {
  return (
    <div className="w-full">
      <SelectRadio
        text="I'm looking for a job right now"
        selected={jobOptionSelect === JobSearchOption.LOOKINGFORJOB}
        onClick={() => setJobOptionSelect(JobSearchOption.LOOKINGFORJOB)}
      />
      <SelectRadio
        text="I'm looking for a job, but no rush"
        selected={jobOptionSelect === JobSearchOption.LOOKINGBUTNORUSH}
        onClick={() => setJobOptionSelect(JobSearchOption.LOOKINGBUTNORUSH)}
      />
    </div>
  );
};

export default OnboardingStepOne;
