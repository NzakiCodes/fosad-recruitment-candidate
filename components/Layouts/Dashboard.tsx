import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Button from "../Atoms/Button";
import Container from "../Atoms/Container";
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
          <Container className="py-3 h-28">
            <div className="flex flex-col md:flex-row items-center ">
              <div className="flex h-12 lg:h-14  gap-x-3 rounded-lg items-center border-[#DEE3E9] border px-4 hover:border-secondary hover:text-secondary transition-colors hover:transition-colors">
                <div className="flex items-center py-2 gap-x-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0916 15.9083L13.9999 12.8416C15.2 11.3453 15.7812 9.446 15.6239 7.53434C15.4667 5.62267 14.583 3.84391 13.1545 2.56379C11.7261 1.28368 9.86143 0.599512 7.94402 0.651979C6.02662 0.704446 4.20219 1.48956 2.84587 2.84587C1.48956 4.20219 0.704446 6.02662 0.651979 7.94402C0.599512 9.86143 1.28368 11.7261 2.56379 13.1545C3.84391 14.583 5.62267 15.4667 7.53434 15.6239C9.446 15.7812 11.3453 15.2 12.8416 13.9999L15.9083 17.0666C15.9857 17.1447 16.0779 17.2067 16.1794 17.249C16.281 17.2913 16.3899 17.3131 16.4999 17.3131C16.6099 17.3131 16.7189 17.2913 16.8204 17.249C16.9219 17.2067 17.0141 17.1447 17.0916 17.0666C17.2418 16.9112 17.3257 16.7035 17.3257 16.4874C17.3257 16.2713 17.2418 16.0636 17.0916 15.9083ZM8.16659 13.9999C7.01286 13.9999 5.88505 13.6578 4.92576 13.0168C3.96647 12.3759 3.2188 11.4648 2.77729 10.3989C2.33578 9.33301 2.22026 8.16012 2.44534 7.02856C2.67042 5.89701 3.22599 4.8576 4.0418 4.0418C4.8576 3.22599 5.897 2.67042 7.02856 2.44534C8.16012 2.22026 9.333 2.33578 10.3989 2.77729C11.4648 3.2188 12.3759 3.96647 13.0168 4.92576C13.6578 5.88505 13.9999 7.01286 13.9999 8.16659C13.9999 9.71368 13.3853 11.1974 12.2914 12.2914C11.1974 13.3853 9.71368 13.9999 8.16659 13.9999Z"
                      fill="#7E90A6"
                    />
                  </svg>
                  <input
                    placeholder="Job Title"
                    className="w-full rounded-lg py-2  text-[#7E90A6]  font-medium text-base my-3 focus:outline-0 active:outline-0"
                    type="text"
                  />
                </div>
                <select className="border-l font-medium text-base py-3 lg:!py-4 px-2 lg:px-3 text-[#63748A]">
                  <option disabled>Location</option>
                  <option>Uyo</option>
                  <option>Lagos</option>
                  <option>Bauchi</option>
                </select>
              </div>
              <div>
                <Button  color="secondary" label="Search Jobs" />
              </div>
            </div>
          </Container>
          <Container>
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
