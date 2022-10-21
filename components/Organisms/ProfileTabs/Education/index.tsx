import { useGetUsersEducation } from "@api/queries/profile/education";
import Spinner from "@components/Spinner";
import { EducationInterface } from "@interface/profile";
import moment from "moment";
import { useState } from "react";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";
import AddEducationModal from "./addEducationModal";
import EditEducationModal from "./editEducationModal";

const Education = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<EducationInterface>(
    {} as EducationInterface
  );
  const { data, isLoading, refetch } = useGetUsersEducation();

  return (
    <div>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg"
        >
          <Icon icon="plusCircle" />
          <span className="font-semibold text-secondary text-base">
            Add Education
          </span>
        </button>
        {showModal && (
          <AddEducationModal
            showModal={showModal}
            setShowModal={setShowModal}
            refetchData={refetch}
          />
        )}
        {showEditModal && (
          <EditEducationModal
            setShowModal={setShowEditModal}
            showModal={showEditModal}
            editItem={itemEdit}
            refetchData={refetch}
          />
        )}
      </div>
      {isLoading ? (
        <Spinner />
      ) : data?.data.data && data.data.data.length > 0 ? (
        data.data.data.map((education: EducationInterface) => (
          <ProfileCard
            key={education.id}
            role={education.institution}
            company={`${education.degree} - ${education.fieldOfStudy}`}
            duration={`${moment(education.startDate).format("LL")} - ${moment(
              education.endDate
            ).format("LL")}`}
            edit={() => {
              setShowEditModal(true);
              setItemEdit(education);
            }}
          />
        ))
      ) : (
        <div className="font-semibold active:outline-0 text-secondary text-base mt-5">
          Please Complete your profile and Add your Education
        </div>
      )}
    </div>
  );
};

export default Education;
