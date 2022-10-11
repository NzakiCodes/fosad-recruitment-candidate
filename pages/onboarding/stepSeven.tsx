import React, { useState } from "react";

const OnboardingStepSeven = () => {
  return (
    <div className="lg:w-full mx-5 lg:mx-auto text-center flex flex-col items-center justify-center">
      <div className="h-[165px] w-[165px] bg-[#E1EEFB] rounded-full my-5"></div>
      <span className="block my-8 font-semibold text-3xl text-secondary">
        {" You're"} all set!
      </span>
      <span className="inline-block  my-4 font-medium text-xl text-[#63748A]">
        {"We're"} going to make an amazing team. {"I'll"} get working on this
        immediately. {"You'll"} hear from me shortly!
      </span>
    </div>
  );
};

export default OnboardingStepSeven;
