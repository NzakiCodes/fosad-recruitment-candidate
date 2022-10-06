import React, { useEffect, useMemo, useState } from "react";

interface ProgressProps {
  step: number;
  totalSteps: number;
  submit?: () => void;
  previous?: () => void;
  onStepChange: (stepState: number) => void;
  updateStateOnNextStep: () => void;
}

const Progress = ({
  submit,
  totalSteps,
  onStepChange,
  updateStateOnNextStep,
}: ProgressProps) => {
  const [progressCount, setProgressCount] = useState<number>(1);
  //   const [progress, setProgress] = useState<number>(0);
  const progressCalc = (pCount: number) => {
    return (pCount / totalSteps) * 100;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const progress = useMemo(() => progressCalc(progressCount), [progressCount]);

  const handleBack = () => {
    setProgressCount((prevActiveStep: number) => {
      const newValue = prevActiveStep - 1;
      onStepChange(newValue);
      return newValue;
    });
  };

  const handleNext = () => {
    setProgressCount((prevActiveStep: number) => {
      const newValue = prevActiveStep + 1;
      onStepChange(newValue);
      updateStateOnNextStep();
      return newValue;
    });

    if (progressCount === totalSteps - 1 && submit) {
      submit();
    }
  };

  return (
    <div className=" h-[127px]">
      <div className="w-full bg-primary bg-opacity-30 ">
        <div
          className="bg-secondary h-3"
          style={{
            width: `${progress}%`,
            transition: "width 0.5s",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        ></div>
      </div>

      <div
        className={`flex flex-row px-6 items-center justify-between w-full ${
          progressCount === totalSteps ? " py-7" : "py-1"
        }`}
      >
        <div>
          <button
            className={`text-[16px] px-5 py-[14px] rounded w-32 border ${
              progressCount === 1 ? "hidden" : "block"
            }`}
            onClick={handleBack}
          >
            Back
          </button>
        </div>
        <div>
          <button
            className={`bg-secondary text-white text-[16px] px-5 py-[14px] rounded w-32 m-6 ${
              progressCount === totalSteps ? "hidden" : "block"
            }`}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progress;
