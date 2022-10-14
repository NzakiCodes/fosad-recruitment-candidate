import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Button from "../Atoms/Button";
import Container from "../Atoms/Container";
import Icon from "../Atoms/Icon";
import { Navbar } from "../Organisms/Navbar";

declare type DashboardLayoutType = {
  children: ReactNode;
};
function DashboardLayout({ children }: DashboardLayoutType) {
  return (
    <div className="bg-[#F7F8FA]">
      <Head>
        <title>
          Fosad Recruit - Explore & discover the perfect job for you!.
        </title>
        <meta
          name="description"
          content="Fosad Recruit - Explore & discover the perfect job for you!."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="  relative">
        <div className="bg-white fixed z-30 w-full top-[89px] lg:top-[100px] left-0">
          <Container className="py-5 lg:py-3 h-28">
            <div className="flex flex-col md:flex-row md:gap-x-4 items-center ">
              <div className="flex h-11 lg:h-14  gap-x-3 rounded-lg items-center border-[#DEE3E9] border px-4 hover:border-secondary hover:text-secondary transition-colors hover:transition-colors">
                <div className="flex items-center py-2 gap-x-3">
                  <Icon icon="search"/>
                  <input
                    placeholder="Job Title"
                    className="w-full rounded-lg py-2  text-[#7E90A6]  font-medium text-base my-3 focus:outline-0 active:outline-0"
                    type="text"
                  />
                </div>
                <select className="border-l font-medium text-base py-2 lg:!py-4 px-2 lg:px-3 text-[#63748A]">
                  <option disabled>Location</option>
                  <option>Uyo</option>
                  <option>Lagos</option>
                  <option>Bauchi</option>
                </select>
              </div>
              <div className="w-full md:w-[135px] -translate-x-4 self-start">
                <Button  color="secondary" label="Search Jobs" />
              </div>
            </div>
          </Container>
          <Container className="mt-10 lg:mt-0">
            <div className="flex justify-between md:justify-start items-center gap-x-3 md:gap-x-5 lg:gap-x-8 lg:pt-2">
              <TabLink text="Suggested Jobs" href="/jobs/suggested" />
              <TabLink text="Applied Jobs" href="/jobs/applied" />
              <TabLink text="Saved Jobs" href="/jobs/saved" />
              <TabLink text="My Profile" href="/profile" />
            </div>
          </Container>
        </div>
        <Container className="py-2 mt-[255px]">{children}</Container>
      </div>
    </div>
  );
}

const TabLink = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className=" flex text-xs lg:text-base text-center flex-col justify-between gap-y-2">
        <span
          className={`${
            router.asPath === href ? "font-bold" : "font-normal"
          } text-secondary`}
        >
          {text}
        </span>
        {router.asPath === href ? (
          <span
            className={`bg-primary transition-[0.9s] w-full h-1 block rounded-tr-lg rounded-tl-lg `}
          ></span>
        ) : (
          <span className="block h-1"> </span>
        )}
      </a>
    </Link>
  );
};

export default DashboardLayout;
