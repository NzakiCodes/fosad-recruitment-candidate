import { useContext, useState } from "react";
import Link from "next/link";
import Avatar from "../../Atoms/Avatar";
import SelectRadio from "../../Atoms/SelectRadio";
import AuthContext from "../../../context/authContext";
import { JobSearchOption } from "../../../interfaces/jobs";
import { useRouter } from "next/router";

const HeaderCard = () => {
  const [jobOptionSelect, setJobOptionSelect] = useState<string>(
    JobSearchOption.LOOKINGFORJOB
  );
  const { updateSignUpState } = useContext(AuthContext);
  const router = useRouter();

  const proceed = () => {
    updateSignUpState({ job_urgency: jobOptionSelect });
    router.push("/onboarding");
  };

  return (
    <div className="">
      <div className="bg-primary rounded-tr-lg rounded-tl-lg px-3 py-5 lg:px-8 lg:py-10 landing-header-card flex items-center gap-2 lg:gap-4">
        <Avatar className="!w-11 !h-11 lg:!w-17 lg:!h-17" source="/assets/ai-avatar.svg" alt="ai-avatar" />
        <div className="text-secondary">
          <span className="block font-medium text-sm  lg:text-[18px]">Welcome!</span>
          <span className="text-base lg:text-xl font-semibold">
            {"I'm"} Tega, your personal recruiter.
          </span>
        </div>
      </div>
      <div className="bg-white rounded-br-lg rounded-bl-lg px-5 lg:px-8 py-4 lg:py-10">
        <span className="text-base lg:text-xl font-semibold text-secondary">
          What brings you here today?
        </span>
        <div className="py-4">
          <SelectRadio
            text="I'm looking for a job right now"
            selected={jobOptionSelect === JobSearchOption.LOOKINGFORJOB}
            onClick={() => setJobOptionSelect(JobSearchOption.LOOKINGFORJOB)}
            styled
          />
          <SelectRadio
            text="I'm looking for a job, but no rush"
            selected={jobOptionSelect === JobSearchOption.LOOKINGBUTNORUSH}
            onClick={() => setJobOptionSelect(JobSearchOption.LOOKINGBUTNORUSH)}
            styled
          />

          <div
            className="flex justify-center gap-x-1 bg-secondary  rounded-lg py-4 lg:py-5 lg:px-8 w-full items-center mt-5 transition-all hover:opacity-90 hover:transition-all"
            onClick={proceed}
          >
            <span>Next</span>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4267 6.15163C11.383 6.03911 11.3176 5.93631 11.2342 5.84913L6.65083 1.2658C6.56536 1.18033 6.4639 1.11253 6.35223 1.06628C6.24056 1.02002 6.12087 0.996216 6 0.996216C5.75589 0.996216 5.52178 1.09319 5.34917 1.2658C5.2637 1.35127 5.1959 1.45273 5.14964 1.5644C5.10339 1.67607 5.07958 1.79576 5.07958 1.91663C5.07958 2.16074 5.17655 2.39485 5.34917 2.56747L8.37417 5.5833H1.41667C1.17355 5.5833 0.940394 5.67988 0.768486 5.85179C0.596577 6.02369 0.5 6.25685 0.5 6.49997C0.5 6.74308 0.596577 6.97624 0.768486 7.14815C0.940394 7.32006 1.17355 7.41663 1.41667 7.41663H8.37417L5.34917 10.4325C5.26325 10.5177 5.19505 10.6191 5.14852 10.7308C5.10198 10.8425 5.07802 10.9623 5.07802 11.0833C5.07802 11.2043 5.10198 11.3241 5.14852 11.4358C5.19505 11.5475 5.26325 11.6489 5.34917 11.7341C5.43438 11.82 5.53577 11.8882 5.64747 11.9348C5.75918 11.9813 5.87899 12.0053 6 12.0053C6.12101 12.0053 6.24082 11.9813 6.35253 11.9348C6.46423 11.8882 6.56562 11.82 6.65083 11.7341L11.2342 7.1508C11.3176 7.06362 11.383 6.96082 11.4267 6.8483C11.5183 6.62513 11.5183 6.37481 11.4267 6.15163Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
