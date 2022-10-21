import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { OnboardingLayout } from "../../components/Layouts";
import Progress from "../../components/Molecules/Progress";
import AuthContext from "../../context/authContext";
import { useToast } from "../../context/toastContext";
import { JobInterests, JobSearchOption, JobType } from "../../interfaces/jobs";
import { IResponse } from "../../interfaces/response";
import { UserResponse } from "../../interfaces/user";
import useForm from "../../utils/useForm";
import { useSignUpCandidtate } from "../api/mutations/auth";
import { PageWithlayout } from "../_app";
import OnboardingStepOne from "../../components/Onboarding/stepOne";
import OnboardingStepTwo from "../../components/Onboarding/stepTwo";
import OnboardingStepThree from "../../components/Onboarding/stepThree";
import OnboardingStepFour from "../../components/Onboarding/stepFour";
import OnboardingStepFive from "../../components/Onboarding/stepFive";
import OnboardingStepSix from "../../components/Onboarding/stepSix";
import OnboardingStepSeven from "../../components/Onboarding/stepSeven";

interface IUserSignUp {
  fullName: string;
  email: string;
  password: string;
}

const Onbording: PageWithlayout = () => {
  const router = useRouter();
  const { mutate } = useSignUpCandidtate();
  const { updateSignUpState, signUpState, setAuthAndCache } =
    useContext(AuthContext);
  const { addToast } = useToast();
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
  const [selectWorkIndustry, setSelectedWorkIndustry] = useState<JobInterests>(
    {} as JobInterests
  );
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [progressCount, setProgressCount] = useState<number>(1);

  const handleBack = () => {
    setProgressCount(progressCount - 1);
  };

  const updateStep = () => {
    setProgressCount(progressCount + 1);
  };

  const handleNext = () => {
    if (progressCount === 1) {
      if (jobOptionSelect === "") {
        toast.error("Please select an option");
      } else {
        updateSignUpState({ ...signUpState, job_urgency: jobOptionSelect });
        updateStep();
      }
    } else if (progressCount === 2) {
      if (selectedJobType.title === undefined) {
        toast.error("Please select an option");
      } else {
        updateSignUpState({
          ...signUpState,
          employment_demand: selectedJobType.title,
        });
        updateStep();
      }
    } else if (progressCount === 3) {
      if (selectedJobLocation === "" || selectJobStation.title === undefined) {
        toast.error("Please select an option and enter your location");
      } else {
        updateSignUpState({
          ...signUpState,
          work_location: selectedJobLocation,
          work_model: selectJobStation.title,
        });
        updateStep();
      }
    } else if (progressCount === 4) {
      if (selectedSkills.length < 1) {
        toast.error("Please select 1 or more skills");
      } else {
        updateSignUpState({
          ...signUpState,
          skills: selectedSkills,
        });
        updateStep();
      }
    } else if (progressCount === 5) {
      if (selectWorkIndustry.name === "") {
        toast.error("Please select an option");
      } else {
        updateSignUpState({
          ...signUpState,
          industry_categories: selectWorkIndustry.name,
        });
        updateStep();
      }
    } else if (progressCount === 6) {
      if (
        inputs.email === undefined ||
        inputs.fullName === undefined ||
        inputs.password === undefined
      ) {
        toast.error("Please enter your full name, email and password");
      } else {
        updateSignUpState({
          ...signUpState,
          fullName: inputs.fullName,
          email: inputs.email,
          password: inputs.password,
        });
        updateStep();
      }
    } else {
      submit();
    }
  };

  const submit = () => {
    mutate(
      { ...signUpState },
      {
        onSuccess: async (response: AxiosResponse<UserResponse>) => {
          const { data } = response;
          router.push("/jobs/suggested");
          setAuthAndCache(data.accessToken);
          toast.success("Signup Successful");
        },
        onError: (error) => {
          const err = error as AxiosError;
          toast.error(`${err}`);
        },
      }
    );
  };

  const { handleChange, inputs } = useForm<IUserSignUp>(
    {} as IUserSignUp,
    submit
  );

  return (
    <div className="relative">
      <div className="py-8 lg:py-4 px-5 mx-auto max-w-xl lg:h-screen mb-32">
        <div className="flex justify-center items-center  lg:h-full w-full">
          <div className="w-full">
            {progressCount === 1 && (
              <OnboardingStepOne
                jobOptionSelect={jobOptionSelect}
                setJobOptionSelect={setJobOptionSelect}
              />
            )}
            {progressCount === 2 && (
              <OnboardingStepTwo
                selectedJobType={selectedJobType}
                setSelectedJobType={setSelectedJobType}
              />
            )}
            {progressCount === 3 && (
              <OnboardingStepThree
                selectedJobLocation={selectedJobLocation}
                setSelectedJobLocation={setSelectedJobLocation}
                selectJobStation={selectJobStation}
                setSelectedJobStation={setSelectedJobStation}
              />
            )}
            {progressCount === 4 && (
              <OnboardingStepFour
                selectedSkills={selectedSkills}
                setSelectedSkills={setSelectedSkills}
              />
            )}
            {progressCount === 5 && (
              <OnboardingStepFive
                selectWorkIndustry={selectWorkIndustry}
                setSelectedWorkIndustry={setSelectedWorkIndustry}
              />
            )}
            {progressCount === 6 && (
              <OnboardingStepSix handleChange={handleChange} />
            )}
            {progressCount === 7 && <OnboardingStepSeven />}
          </div>
        </div>
      </div>
      <div className="fixed z-30 bottom-0 w-full lg:w-1/2 bg-white mt-3 right-0">
        <Progress
          progressCount={progressCount}
          totalSteps={totalSteps}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </div>
    </div>
  );
};

Onbording.title = "Do you know what you're looking for?";

Onbording.getLayout = function getLayout(page: ReactNode, title?: string) {
  return <OnboardingLayout title={title ? title : ""}>{page}</OnboardingLayout>;
};

export default Onbording;
