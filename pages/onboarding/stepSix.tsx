import Link from "next/link";
import React, { FC, useState } from "react";

interface IOnboardingStep6 {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const OnboardingStepSix: FC<IOnboardingStep6> = ({ handleChange }) => {
  return (
    <div className="lg:w-full mx-5 lg:mx-0">
      <div>
        <input
          type="text"
          className="w-full rounded-lg py-5 px-8 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
          placeholder="Full Name"
          onChange={handleChange}
          name="fullName"
        />
        <input
          type="email"
          className="w-full rounded-lg py-5 px-8 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
          placeholder="Email Address"
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          className="w-full rounded-lg py-5 px-8 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />

        <span className="inline-block my-4 font-medium text-sm text-[#63748A]">
          If {"you're"}By clicking Next, I agree to the Fosad Terms of Use and
          acknowledge I have read the Privacy Policy, and agree to receive email
          job alerts.
        </span>
        <span className="block my-8  text-xl text-secondary text-center">
          Already have an account?
          <Link href={"/signin"}>
            <a className="font-semibold"> Sign In</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OnboardingStepSix;
