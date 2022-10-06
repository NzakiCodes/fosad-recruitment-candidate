import React, { ReactElement } from 'react'
import DashboardLayout from '../../components/Layouts/Dashboard';
import JobCard from '../../components/Molecules/JobCard';

function AppliedJobs() {
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-5">
       <JobCard
          title="Product Designer for Global Fintach Product"
          location="Lagos, Nigeria"
          annualSalary="$250,000/yr"
          jobType="Full-Time"
          workType="remote"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges? Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever? If you're an outgoing and self-motivated individual who's ready to help children and families discover a new and innovative training program based on brain science that helps children overcome "
          jobStatus="applied"
          link="/"
        />
         <JobCard
          title="Product Designer for Global Fintach Product"
          location="Lagos, Nigeria"
          annualSalary="$250,000/yr"
          jobType="Full-Time"
          workType="remote"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges? Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever? If you're an outgoing and self-motivated individual who's ready to help children and families discover a new and innovative training program based on brain science that helps children overcome "
          jobStatus="applied"
          link="/"
        />
         <JobCard
          title="Product Designer for Global Fintach Product"
          location="Lagos, Nigeria"
          annualSalary="$250,000/yr"
          jobType="Full-Time"
          workType="remote"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges? Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever? If you're an outgoing and self-motivated individual who's ready to help children and families discover a new and innovative training program based on brain science that helps children overcome "
          jobStatus="applied"
          link="/"
        />
         <JobCard
          title="Product Designer for Global Fintach Product"
          location="Lagos, Nigeria"
          annualSalary="$250,000/yr"
          jobType="Full-Time"
          workType="remote"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges? Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever? If you're an outgoing and self-motivated individual who's ready to help children and families discover a new and innovative training program based on brain science that helps children overcome "
          jobStatus="applied"
          link="/"
        />
        </div>
    </div>
  )
}
AppliedJobs.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };
export default AppliedJobs