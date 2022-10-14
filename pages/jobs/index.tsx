import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import DashboardLayout from "../../components/Layouts/Dashboard";

function Jobs() {
  const router = useRouter();
  useEffect(() => {
    router.push("/jobs/suggested");
  }, [router]);
  return (
    <div className="py-10 flex justify-center items-center">
      <h1 className="text-grey-800 font-bold text-xl">Loading...</h1>
    </div>
  );
}

Jobs.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Jobs;
