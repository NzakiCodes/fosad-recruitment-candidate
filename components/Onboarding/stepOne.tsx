import { useRouter } from "next/router";
import React, { FC, useContext, useState } from "react";
import SelectRadio from "../../components/Atoms/SelectRadio";
import AuthContext from "../../context/authContext";
import { JobSearchOption } from "../../interfaces/jobs";

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
