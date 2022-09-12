import { useState } from "react";
import Avatar from "../../Atoms/Avatar";
import SelectRadio from "../../Atoms/SelectRadio";

const HeaderCard = () => {
  const [jobOptionSelect, setJobOptionSelect] = useState<number>(1);
  return (
    <div className="">
      <div className="bg-primary rounded-tr-lg rounded-tl-lg px-8 py-10 landing-header-card flex items-center gap-4">
        <Avatar source="/assets/ai-avatar.svg" alt="ai-avatar" size="large" />
        <div className="text-secondary">
          <span className="block font-medium text-[18px]">Welcome!</span>
          <span className="text-xl font-semibold">
            {"I'm"} Tega, your personal recruiter.
          </span>
        </div>
      </div>
      <div className="bg-white rounded-br-lg rounded-bl-lg px-8 py-10">
        <span className="text-xl font-semibold text-secondary">
          What brings you here today?
        </span>
        <div className="py-4">
          <SelectRadio
            text="I'm looking for a job right now"
            selected={jobOptionSelect === 1}
            onClick={() => setJobOptionSelect(1)}
          />
          <SelectRadio
            text="I'm looking for a job, but no rush"
            selected={jobOptionSelect === 2}
            onClick={() => setJobOptionSelect(2)}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
