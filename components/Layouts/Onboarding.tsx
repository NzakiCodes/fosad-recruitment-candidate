import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import Avatar from "../Atoms/Avatar";
import Container from "../Atoms/Container";
import Icon from "../Atoms/Icon";
import { LandingNavbar, Navbar } from "../Organisms/Navbar";

function OnboardingLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title.length > 1 && title + " - "} Fosad Recruit.</title>
        <meta
          name="description"
          content="Fosad Recruit - Explore & discover the perfect job for you!."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <div className="flex">
        <div className="hidden relative lg:block w-1/2 h-full">
          <div className="fixed z-10 bg-secondary h-full w-1/2">
            <Container className="mx-10 my-5">
              <Link href={"/"}>
                <a className="py-8 block">
                  <Icon icon="logoWhiteText" />
                </a>
              </Link>
            </Container>
            <Container className="mx-10 my-20 ">
              <div className="self-center text-white">
                <Avatar
                  source="/assets/ai-avatar.svg"
                  alt="ai-avatar"
                  size="xlarge"
                />
                <div className="py-8">
                  <span className="text-[32px] leading-[38px] font-semibold text-white">
                    {" "}
                    {title}
                  </span>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="lg:hidden">
            <LandingNavbar />
            <div className="bg-[#E1EEFB] flex items-center gap-x-3 mt-20 py-7 px-4">
              <Avatar
                className="!w-11 !h-11 lg:!w-17 lg:!h-17"
                source="/assets/ai-avatar.svg"
                alt="ai-avatar"
              />
              <div>
                <h3 className="text-secondary font-semibold text-lg">{title}</h3>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default OnboardingLayout;
