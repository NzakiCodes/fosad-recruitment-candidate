import Button from "../Button";
import DurationLabel from "../DurationLabel";
import Icon from "../Icon";

const ProfileCard = ({
    company,
    role,
    duration,
    description,
    current=false,
    edit,
  }: {
    company: string;
    role: string;
    duration: string;
    description?: string;
    current?: boolean;
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
              bold={true}
              size="small"
              onClick={() => edit()}
              iconRight={
                <Icon icon="edit"/>
              }
            />
          </div>
        </div>
        <div className="my-5">
          <DurationLabel duration={duration} isCurrent={current} />
        </div>
        <div className="mt-7 mb-3">
          <p className="font-medium text-sm text-[#63748A]">{description}</p>
        </div>
      </div>
    );
  };

  export default ProfileCard