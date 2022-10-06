import Link from "next/link";
import React, { ReactNode, useContext, useState } from "react";
import { OnboardingLayout } from "../../components/Layouts";
import Progress from "../../components/Molecules/Progress";
import AuthContext from "../../context/authContext";
import { JobSearchOption, JobType } from "../../interfaces/jobs";
import { IUserSignUp } from "../../interfaces/user";
import useForm from "../../utils/useForm";
import { PageWithlayout } from "../_app";
import OnboardingStepFive from "./stepFive";
import OnboardingStepFour from "./stepFour";
import OnboardingStepOne from "./stepOne";
import OnboardingStepSeven from "./stepSeven";
import OnboardingStepSix from "./stepSix";
import OnboardingStepThree from "./stepThree";
import OnboardingStepTwo from "./stepTwo";

const Onbording: PageWithlayout = () => {
  const { updateSignUpState, signUpState } = useContext(AuthContext);
  const [onboardingSteps, setOnboardingSteps] = useState<number>(1);
  const totalSteps = 7;
  const [jobOptionSelect, setJobOptionSelect] = useState<string>(
    JobSearchOption.LOOKINGFORJOB
  );
  const [selectedJobType, setSelectedJobType] = useState<JobType>(
    {} as JobType
  );
  const [selectedJobLocation, setSelectedJobLocation] = useState<string>("");
  const [selectJobStation, setSelectedJobStation] = useState<JobType>(
    {} as JobType
  );
  const [selectWorkIndustry, setSelectedWorkIndustry] = useState<JobType>(
    {} as JobType
  );

  const updateStateOnNextStep = () => {
    if (onboardingSteps === 1) {
      updateSignUpState({ ...signUpState, job_urgency: jobOptionSelect });
    }
    if (onboardingSteps === 2) {
      updateSignUpState({
        ...signUpState,
        employment_demand: selectedJobType.title,
      });
    }
    if (onboardingSteps === 3) {
      updateSignUpState({
        ...signUpState,
        work_location: selectedJobLocation,
        work_model: selectJobStation.title,
      });
    }
    if (onboardingSteps === 5) {
      updateSignUpState({
        ...signUpState,
        industry_categories: selectWorkIndustry.title,
      });
    }
    if (onboardingSteps === 6) {
      updateSignUpState({
        ...signUpState,
        fullName: inputs.fullName,
        email: inputs.email,
        password: inputs.password,
      });
    }
  };

  const submit = () => {};

  const { handleChange, inputs } = useForm<IUserSignUp>(
    {} as IUserSignUp,
    submit
  );

  return (
    <div className="relative">
      <div className="py-4 mx-auto max-w-xl h-screen mb-32">
        <div className="flex justify-center items-center h-full w-full">
          <div className="w-full">
            {onboardingSteps === 1 && (
              <OnboardingStepOne
                jobOptionSelect={jobOptionSelect}
                setJobOptionSelect={setJobOptionSelect}
              />
            )}
            {onboardingSteps === 2 && (
              <OnboardingStepTwo
                selectedJobType={selectedJobType}
                setSelectedJobType={setSelectedJobType}
              />
            )}
            {onboardingSteps === 3 && (
              <OnboardingStepThree
                selectedJobLocation={selectedJobLocation}
                setSelectedJobLocation={setSelectedJobLocation}
                selectJobStation={selectJobStation}
                setSelectedJobStation={setSelectedJobStation}
              />
            )}
            {onboardingSteps === 4 && <OnboardingStepFour />}
            {onboardingSteps === 5 && (
              <OnboardingStepFive
                selectWorkIndustry={selectWorkIndustry}
                setSelectedWorkIndustry={setSelectedWorkIndustry}
              />
            )}
            {onboardingSteps === 6 && (
              <OnboardingStepSix handleChange={handleChange} />
            )}
            {onboardingSteps === 7 && <OnboardingStepSeven />}
          </div>
        </div>
      </div>
      <div className="fixed z-30 bottom-0 w-1/2 bg-white mt-3 right-0">
        <Progress
          submit={() => submit()}
          onStepChange={(stepState) => {
            setOnboardingSteps(stepState);
          }}
          totalSteps={totalSteps}
          step={onboardingSteps}
          updateStateOnNextStep={updateStateOnNextStep}
        />
      </div>
    </div>
  );
};

/* Step 4 Goes Here */

Onbording.title = "Do you know what you're looking for?";

Onbording.getLayout = function getLayout(page: ReactNode, title?: string) {
  return <OnboardingLayout title={title ? title : ""}>{page}</OnboardingLayout>;
};

export default Onbording;
