/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import Container from "../components/Atoms/Container";
import Initializer from "../components/initializer";
import { LandingLayout } from "../components/Layouts";
import LandingHeader from "../components/Organisms/Header";
import { useAuth } from "../context/authContext";
import type { PageWithlayout } from "./_app";

const Home: PageWithlayout = () => {
  const { auth, initializing } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      if (auth) {
        router.push("/jobs/suggested");
      }
    }
    setIsLoading(false);
  }, [auth, initializing, router]);

  if (initializing && !auth) {
    return <Initializer />;
  }

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
