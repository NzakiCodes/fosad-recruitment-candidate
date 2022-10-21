import { useGetUsersWorkExperience } from "@api/queries/profile/experience";
import Spinner from "@components/Spinner";
import { Experience } from "@interface/profile";
import moment from "moment";
import { useState } from "react";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";
import AddWorkExperience from "./addWorkExperience";
import EditWorkExperience from "./editWorkExperience";

const WorkExperience = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<Experience>({} as Experience);
  const { data, isLoading, refetch } = useGetUsersWorkExperience();

  return (
    <div>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg"
        >
          <Icon icon="plusCircle" />
          <span className="font-semibold active:outline-0 text-secondary text-base">
            Add Work Experience
          </span>
        </button>
        {showModal && (
          <AddWorkExperience
            showModal={showModal}
            setShowModal={setShowModal}
            refetchData={refetch}
          />
        )}
        {showEditModal && (
          <EditWorkExperience
            showModal={showEditModal}
            setShowModal={setShowEditModal}
            editItem={itemEdit}
            refetchData={refetch}
          />
        )}
      </div>
      <div>
        {isLoading ? (
          <Spinner />
        ) : data?.data.data && data?.data.data.length > 0 ? (
          data?.data.data.map((experience: Experience) => (
            <ProfileCard
              key={experience.id}
              role={experience.role}
              company={experience.organization}
              duration={`${moment(experience.startDate).format(
                "LL"
              )} - Current`}
              description={experience.details}
              edit={() => {
                setShowEditModal(true);
                setItemEdit(experience);
              }}
              current
            />
          ))
        ) : (
          <div className="font-semibold active:outline-0 text-secondary text-base mt-5">
            Please Complete your profile and Add your Experience
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
