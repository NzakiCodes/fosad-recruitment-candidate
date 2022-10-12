/* eslint-disable @next/next/no-img-element */
import { ReactElement } from "react";
import Container from "../components/Atoms/Container";
import { LandingLayout } from "../components/Layouts";
import LandingHeader from "../components/Organisms/Header";
import type { PageWithlayout } from "./_app";

const Home: PageWithlayout = () => {
  return (
    <div className="">
      <LandingHeader />
      <Container>
        <div className="text-center py-24 max-w-[779px] mx-auto">
          <h2 className="font-bold text-[34px] leading-[41px] text-secondary">
            With a personal recruiter, you’ll get matched to roles that are
            right for you.
          </h2>
        </div>
        <div className="flex justify-between gap-x-8 mb-10">
          <div className="w-1/2 p-10">
            <div>A</div>
          </div>
          <div className="w-1/2">
            <div>
              <img src="/assets/img-1.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
