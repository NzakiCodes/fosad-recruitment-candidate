import Button from "../../../Atoms/Button";
import Icon from "../../../Atoms/Icon";

const WorkExperience = () => {
  return (
    <div>
      <div>
        <button className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg">
          <Icon icon="plusCircle"/>
          <span className="font-semibold text-secondary text-base">Add Work Experience</span>
        </button>
      </div>
      <div>
        <WorkExperienceCard
          role="Product Lead"
          company="Smuv Legacy Limited"
          duration="September 2020 - Current"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges. Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever."
          edit={() => {}}
          current
        />
        <WorkExperienceCard
          role="Creative Director"
          company="Smuv Legacy Limited"
          duration="March 2019 - 2020"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges. Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever."
          edit={() => {}}
          current={false}
        />
        <WorkExperienceCard
          role="Creative Director"
          company="Smuv Legacy Limited"
          duration="March 2019 - 2020"
          description="Are you looking for a unique opportunity that allows you to help children and families struggling with educational challenges. Are you a driven and tenacious extrovert who enjoys sharing the benefits of proven products that have the power to change lives forever."
          edit={() => {}}
          current={false}
        />
      </div>
    </div>
  );
};
const WorkExperienceCard = ({
  company,
  role,
  duration,
  description,
  current,
  edit,
}: {
  company: string;
  role: string;
  duration: string;
  description: string;
  current: boolean;
  edit: Function;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg my-3">
      <div className="flex justify-between items-center text-secondary">
        <div>
          <h3 className="font-semibold text-xl">{role}</h3>
          <span className="">{company}</span>
        </div>
        <div>
          <Button
            noMargin
            color="white"
            label="Edit"
            bold
            size="small"
            onClick={() => edit()}
            iconRight={
              <Icon icon="edit"/>
            }
          />
        </div>
      </div>
      <div className="my-5">
        <JobDuration duration={duration} isCurrent={current} />
      </div>
      <div className="mt-7 mb-3">
        <p className="font-medium text-sm text-[#63748A]">{description}</p>
      </div>
    </div>
  );
};

const JobDuration = ({
  duration,
  isCurrent,
}: {
  duration: string;
  isCurrent: boolean;
}) => {
  return (
    <span
      className={`${
        isCurrent ? "bg-[#D0F7E9]" : "bg-[#FFEEEE]"
      } py-2 px-4 rounded-lg`}
    >
      {duration}
    </span>
  );
};

export default WorkExperience;
