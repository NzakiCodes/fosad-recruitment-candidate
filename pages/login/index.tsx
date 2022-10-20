import Link from "next/link";
import React, { FormEvent, ReactNode, useState } from "react";
import Avatar from "../../components/Atoms/Avatar";
import Button from "../../components/Atoms/Button";
import Container from "../../components/Atoms/Container";
import Icon from "../../components/Atoms/Icon";
import { OnboardingLayout } from "../../components/Layouts";
import { LandingNavbar } from "../../components/Organisms/Navbar";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleChange = () => {};

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col lg:flex-row  h-screen">
      <div className="w-full lg:w-2/5 bg-secondary">
        <div className="hidden relative lg:block h-full">
          <div className="h-full z-10">
            <Container className="h-full mx-10 my-5">
              <Link href={"/"}>
                <a className="py-8 block fixed">
                  <Icon icon="logoWhiteText" />
                </a>
              </Link>
              <div className=" flex justify-center items-center h-full">
                <div className="-mt-10">
                  <h2 className="font-bold text-[44px] text-[#98CBFF] my-5">
                    Welcome Back
                  </h2>
                  <p className="text-[#FFFFFFCC] text-lg">
                    Nulla sit orci, eu amet lorem purus porta morbi imperdiet.
                    Morbi ut massa scelerisque vulputate in.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/5  ">
        <div className="lg:hidden">
          <LandingNavbar />
          <div className="bg-[#E1EEFB] flex items-center gap-x-3 mt-20 py-7 px-4 w-full text-center">
           
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xs  lg:max-w-md"
          >
            <div className="mb-10">
              <h2 className="font-bold text-xl text-center lg:text-left lg:text-[32px]">
                Login to your account
              </h2>
            </div>
            <div className="w-full my-5">
              <label className="font-medium text-sm text-[#6B6B6B]">
                Email Address
              </label>
              <input
                type={"text"}
                className="w-full rounded-lg py-3 px-4 text-[#6B6B6B] bg-[#F5F5F5] active:outline-0 focus:outline-1 focus:outline-slate-200 transition-colors hover:transition-colors font-medium text-[16px] flex gap-5"
                placeholder="@"
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="w-full ">
              <div className="flex justify-between">
                <label className="font-medium text-sm text-[#6B6B6B]">
                  Password
                </label>
                <a
                  href="#showPassword"
                  className="text-right font-medium text-sm block "
                  onClick={passwordVisibility}
                >
                  <span>{showPassword ? "Hide" : "Show"} Password</span>
                </a>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg py-3 px-4 text-[#6B6B6B] bg-[#F5F5F5] active:outline-0 focus:outline-1 focus:outline-slate-200 transition-colors hover:transition-colors font-medium text-[16px] flex gap-5"
                placeholder="6 max characters"
                onChange={handleChange}
                name="password"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Login.title = "Sign In to Access Jobs.";

// Login.getLayout = function getLayout(page: ReactNode, title?: string) {
//   return <OnboardingLayout title={title ? title : ""}>{page}</OnboardingLayout>;
// };

export default Login;
