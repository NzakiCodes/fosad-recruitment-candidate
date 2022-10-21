import Link from "next/link";
import React, { FC, useState } from "react";

interface IOnboardingStep6 {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const OnboardingStepSix: FC<IOnboardingStep6> = ({ handleChange }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="lg:w-full lg:mx-5 ">
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
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full rounded-lg py-5 px-8 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[30%] right-[4%]"
            onClick={passwordVisibility}
          >
            <path
              d="M10.9402 6.60948C11.2909 6.55572 11.6453 6.52897 12.0002 6.52948C15.1802 6.52948 18.1702 8.81948 19.9102 12.5295C19.6441 13.0941 19.3435 13.6418 19.0102 14.1695C18.9044 14.3333 18.8487 14.5245 18.8502 14.7195C18.8524 14.9377 18.926 15.1492 19.0596 15.3218C19.1933 15.4943 19.3798 15.6183 19.5905 15.675C19.8013 15.7316 20.0248 15.7178 20.227 15.6356C20.4291 15.5533 20.5988 15.4072 20.7102 15.2195C21.1761 14.4874 21.5808 13.7181 21.9202 12.9195C21.9738 12.7947 22.0015 12.6603 22.0015 12.5245C22.0015 12.3887 21.9738 12.2543 21.9202 12.1295C19.9002 7.43948 16.1002 4.52948 12.0002 4.52948C11.5309 4.52712 11.0623 4.56728 10.6002 4.64948C10.4689 4.67181 10.3432 4.71978 10.2304 4.79066C10.1177 4.86154 10.0199 4.95394 9.94287 5.06258C9.8658 5.17123 9.81088 5.29399 9.78125 5.42386C9.75162 5.55373 9.74786 5.68816 9.77018 5.81948C9.79251 5.9508 9.84048 6.07644 9.91136 6.18923C9.98224 6.30201 10.0746 6.39972 10.1833 6.4768C10.2919 6.55387 10.4147 6.60879 10.5446 6.63842C10.6744 6.66805 10.8089 6.67181 10.9402 6.64948V6.60948ZM3.71019 2.81948C3.61695 2.72624 3.50626 2.65228 3.38443 2.60182C3.26261 2.55136 3.13204 2.52539 3.00019 2.52539C2.86833 2.52539 2.73776 2.55136 2.61594 2.60182C2.49411 2.65228 2.38342 2.72624 2.29019 2.81948C2.10188 3.00779 1.99609 3.26318 1.99609 3.52948C1.99609 3.79578 2.10188 4.05118 2.29019 4.23948L5.39019 7.32948C3.97576 8.69101 2.85004 10.3235 2.08019 12.1295C2.02512 12.2556 1.9967 12.3918 1.9967 12.5295C1.9967 12.6671 2.02512 12.8033 2.08019 12.9295C4.10019 17.6195 7.90019 20.5295 12.0002 20.5295C13.7973 20.5171 15.552 19.982 17.0502 18.9895L20.2902 22.2395C20.3831 22.3332 20.4937 22.4076 20.6156 22.4584C20.7375 22.5091 20.8682 22.5353 21.0002 22.5353C21.1322 22.5353 21.2629 22.5091 21.3848 22.4584C21.5066 22.4076 21.6172 22.3332 21.7102 22.2395C21.8039 22.1465 21.8783 22.0359 21.9291 21.9141C21.9798 21.7922 22.006 21.6615 22.006 21.5295C22.006 21.3975 21.9798 21.2668 21.9291 21.1449C21.8783 21.023 21.8039 20.9124 21.7102 20.8195L3.71019 2.81948ZM10.0702 12.0095L12.5202 14.4595C12.3512 14.5079 12.176 14.5315 12.0002 14.5295C11.4698 14.5295 10.961 14.3188 10.586 13.9437C10.2109 13.5686 10.0002 13.0599 10.0002 12.5295C9.99814 12.3537 10.0217 12.1785 10.0702 12.0095ZM12.0002 18.5295C8.82018 18.5295 5.83019 16.2395 4.10019 12.5295C4.74627 11.1032 5.66326 9.81606 6.80019 8.73948L8.57019 10.5295C8.15443 11.2883 7.99592 12.1614 8.11844 13.0179C8.24096 13.8745 8.6379 14.6681 9.24971 15.28C9.86152 15.8918 10.6552 16.2887 11.5117 16.4112C12.3682 16.5337 13.2414 16.3752 14.0002 15.9595L15.5902 17.5295C14.5013 18.1704 13.2636 18.5151 12.0002 18.5295Z"
              fill="#63748A"
            />
          </svg>
        </div>

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
