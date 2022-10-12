import React, { useEffect, useMemo, useState } from "react";

interface ProgressProps {
  totalSteps: number;
  previous?: () => void;
  handleNext: () => void;
  handleBack: () => void;
  progressCount: number;
  loading: boolean;
}

const Progress = ({
  totalSteps,
  handleNext,
  handleBack,
  progressCount,
  loading,
}: ProgressProps) => {
  const progressCalc = (pCount: number) => {
    return (pCount / totalSteps) * 100;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const progress = useMemo(() => progressCalc(progressCount), [progressCount]);

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
        className={`flex flex-row px-6 items-center justify-between w-full py-1`}
      >
        <div>
          <button
            className={`text-[16px] px-5 py-[14px] rounded w-32 border ${
              progressCount === 1 || progressCount === 7 || loading
                ? "hidden"
                : "block"
            }`}
            onClick={handleBack}
          >
            Back
          </button>
        </div>
        <div>
          {progressCount === 7 ? (
            <button
              className={`bg-secondary text-white text-[16px] px-5 py-[14px] rounded w-32 m-6`}
              onClick={handleNext}
            >
              Done
            </button>
          ) : (
            <button
              className={`bg-secondary text-white text-[16px] px-5 py-[14px] rounded w-32 m-6 disabled:opacity-50 disabled:cursor-not-allowed`}
              onClick={handleNext}
              disabled={loading}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Progress;
