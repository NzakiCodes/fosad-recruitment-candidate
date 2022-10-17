import { ReactElement } from "react";
import Label from "../../../components/Atoms/Label";
import Pill from "../../../components/Atoms/Pill";
import DashboardLayout from "../../../components/Layouts/Dashboard";

const JobId = () => {
  return (
    <div className="bg-white px-6 py-7 rounded-lg cursor-pointer">
      <div>
        <JobIdCard
          title="Product Designer for Global Fintach Product"
          location="Lagos, Nigeria"
          annualSalary="$250,000/yr"
          jobType="Full-Time"
          workType="remote"
          jobStatus="applied"
          description="We are seeking a Sales Representative to join our team! You will resolve customer questions and offer solutions to drive company revenue."
          responsibilities="Responsibilities:"
          list={`&{hello}`}
        ></JobIdCard>
        <div className="bg-white px-6 rounded-lg cursor-pointer text-[#002D5B]">
          <h1 className="text-4 font-bold ">Responsibilities</h1>
          <ul className="pt-2">
            <li>
              Present and sell company products and services to new and existing
              customers
            </li>
            <li>Prospect and contact potential customers</li>
            <li> Reach agreed upon sales targets by the deadline</li>
            <li>Resolve customer inquiries and complaints </li>
            <li>
              Set follow-up appointments to keep customers aware of latest
              developments
            </li>
          </ul>
          <h2 className="text-4 font-bold pt-4">Qualifications:</h2>
          <ul className="pt-2 pb-4">
            <li>
              Previous experience in sales, customer service, or other related
              fields
            </li>
            <li>Familiarity with CRM platforms</li>
            <li>Ability to build rapport with clients</li>
            <li>Strong negotiation skills</li>
            <li>Deadline and detail-oriented</li>
          </ul>
          <hr className="w-full"></hr>
          <div className="py-4">
            <p className="font-normal text-[16px]">
              Company address: 2390 coney island ave
            </p>
            <span>Posted date: 15 hours ago</span>
          </div>
        </div>
      </div>
      <hr className="w-full"></hr>
      <div className="bg-white px-6 py-7 rounded-lg cursor-pointer flex justify-end">
        <button className="bg-secondary text-white text-[16px] px-5 py-[14px] rounded-lg w-32 ml-4">
          Apply Now
        </button>
      </div>
    </div>
  );
};

const JobIdCard = ({
  title,
  location,
  annualSalary,
  jobType,
  workType,
  description,
  jobStatus,
  responsibilities,
}: {
  title: string;
  location: string;
  annualSalary: string;
  jobType: string;
  workType: "remote" | "on-site" | "hybrid";
  description: string;
  responsibilities: string;
  list: string;
  jobStatus:
    | "active"
    | "onHold"
    | "completed"
    | "cancelled"
    | "applied"
    | "hired"
    | "interview"
    | "rejected"
    | "offer";
}) => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex justify-evenly">
            <Pill type={jobStatus} />
            <button className="block self-start pt-5 ml-7">
              <svg
                width="18"
                height="4"
                viewBox="0 0 18 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C8.60444 0 8.21776 0.117298 7.88886 0.337061C7.55996 0.556824 7.30362 0.869181 7.15224 1.23463C7.00087 1.60009 6.96126 2.00222 7.03843 2.39018C7.1156 2.77814 7.30608 3.13451 7.58579 3.41421C7.86549 3.69392 8.22186 3.8844 8.60982 3.96157C8.99778 4.03874 9.39992 3.99913 9.76537 3.84776C10.1308 3.69638 10.4432 3.44004 10.6629 3.11114C10.8827 2.78224 11 2.39556 11 2C11 1.46957 10.7893 0.96086 10.4142 0.585787C10.0391 0.210714 9.53043 0 9 0ZM2 0C1.60444 0 1.21776 0.117298 0.88886 0.337061C0.559962 0.556824 0.303617 0.869181 0.152242 1.23463C0.000866562 1.60009 -0.0387401 2.00222 0.0384303 2.39018C0.115601 2.77814 0.306082 3.13451 0.585787 3.41421C0.865492 3.69392 1.22186 3.8844 1.60982 3.96157C1.99778 4.03874 2.39992 3.99913 2.76537 3.84776C3.13082 3.69638 3.44318 3.44004 3.66294 3.11114C3.8827 2.78224 4 2.39556 4 2C4 1.46957 3.78929 0.96086 3.41421 0.585787C3.03914 0.210714 2.53043 0 2 0ZM16 0C15.6044 0 15.2178 0.117298 14.8889 0.337061C14.56 0.556824 14.3036 0.869181 14.1522 1.23463C14.0009 1.60009 13.9613 2.00222 14.0384 2.39018C14.1156 2.77814 14.3061 3.13451 14.5858 3.41421C14.8655 3.69392 15.2219 3.8844 15.6098 3.96157C15.9978 4.03874 16.3999 3.99913 16.7654 3.84776C17.1308 3.69638 17.4432 3.44004 17.6629 3.11114C17.8827 2.78224 18 2.39556 18 2C18 1.46957 17.7893 0.96086 17.4142 0.585787C17.0391 0.210714 16.5304 0 16 0Z"
                  fill="#A0ABB4"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-1 my-2 items-center">
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7875 5.0187C10.6997 4.10552 10.377 3.23063 9.85073 2.47921C9.32444 1.72779 8.61255 1.12547 7.78436 0.730882C6.95617 0.336296 6.03991 0.162899 5.12481 0.227576C4.20971 0.292253 3.32694 0.592799 2.56249 1.09995C1.90573 1.5391 1.3544 2.11826 0.948076 2.79582C0.541758 3.47338 0.290546 4.23251 0.212487 5.0187C0.135913 5.79973 0.234158 6.58802 0.500093 7.32637C0.766028 8.06472 1.19298 8.73461 1.74999 9.28745L5.06249 12.6062C5.12059 12.6648 5.18971 12.7113 5.26588 12.743C5.34204 12.7747 5.42373 12.7911 5.50624 12.7911C5.58874 12.7911 5.67043 12.7747 5.7466 12.743C5.82276 12.7113 5.89188 12.6648 5.94999 12.6062L9.24999 9.28745C9.80699 8.73461 10.2339 8.06472 10.4999 7.32637C10.7658 6.58802 10.8641 5.79973 10.7875 5.0187ZM8.37499 8.4062L5.49999 11.2812L2.62499 8.4062C2.20129 7.98248 1.87674 7.47015 1.67465 6.90605C1.47257 6.34194 1.39798 5.74007 1.45624 5.1437C1.51487 4.53814 1.70734 3.95317 2.01972 3.4311C2.3321 2.90903 2.75658 2.46289 3.26249 2.12495C3.92558 1.68447 4.70393 1.44951 5.49999 1.44951C6.29605 1.44951 7.0744 1.68447 7.73749 2.12495C8.24185 2.46158 8.66541 2.90575 8.97771 3.42554C9.29001 3.94532 9.48332 4.52782 9.54374 5.1312C9.6039 5.72959 9.53024 6.33387 9.3281 6.90029C9.12596 7.46671 8.8004 7.98109 8.37499 8.4062ZM5.49999 2.74995C4.94373 2.74995 4.39996 2.9149 3.93745 3.22394C3.47493 3.53298 3.11445 3.97223 2.90158 4.48615C2.6887 5.00007 2.63301 5.56557 2.74153 6.11114C2.85005 6.65671 3.11791 7.15785 3.51125 7.55119C3.90458 7.94452 4.40572 8.21239 4.95129 8.32091C5.49687 8.42943 6.06237 8.37373 6.57628 8.16086C7.0902 7.94799 7.52945 7.5875 7.83849 7.12499C8.14754 6.66248 8.31249 6.11871 8.31249 5.56245C8.31084 4.81703 8.01399 4.10262 7.4869 3.57553C6.95981 3.04845 6.2454 2.7516 5.49999 2.74995ZM5.49999 7.12495C5.19095 7.12495 4.88886 7.03331 4.63191 6.86162C4.37496 6.68993 4.17469 6.4459 4.05642 6.16039C3.93816 5.87488 3.90722 5.56072 3.96751 5.25762C4.0278 4.95452 4.17661 4.67611 4.39513 4.45759C4.61365 4.23908 4.89206 4.09026 5.19516 4.02997C5.49825 3.96968 5.81242 4.00063 6.09793 4.11889C6.38344 4.23715 6.62747 4.43742 6.79916 4.69437C6.97085 4.95132 7.06249 5.25342 7.06249 5.56245C7.06249 5.97685 6.89787 6.37428 6.60484 6.6673C6.31182 6.96033 5.91439 7.12495 5.49999 7.12495Z"
              fill="#63748A"
            />
          </svg>
          <span className="text-sm text-[#63748A]">{location}</span>
        </div>
      </div>
      <div className="py-3">
        <div className="flex gap-x-2 mb-3 flex-wrap">
          <Label type="salary" text={annualSalary} />
          <Label type="jobType" text={jobType} />
          <Label type="workType" text={workType} />
        </div>
        <span className="text-[16px] text-[#002D5B] font-medium">
          {description}
        </span>
      </div>
      <div className="flex justify-end items-center my-2"></div>
    </div>
  );
};
JobId.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default JobId;
