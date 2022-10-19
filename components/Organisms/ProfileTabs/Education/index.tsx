import { useAddEducation } from "@api/mutations/profile/education";
import { useGetUsersEducation } from "@api/queries/profile/education";
import Spinner from "@components/Spinner";
import { Education } from "@interface/profile";
import { disablePastDate } from "@utils/disablePastdate";
import useForm from "@utils/useForm";
import { AxiosError, AxiosResponse } from "axios";
import moment from "moment";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Checkbox from "../../../Atoms/Checkbox/Index";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";
import Modal from "../../../Molecules/Modal";

const Education = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { mutate, isLoading } = useAddEducation();
  const { data } = useGetUsersEducation();

  const submit = () => {
    setLoading(true);
    mutate(
      { ...inputs },
      {
        onSuccess: async (response: AxiosResponse<Education>) => {
          toast.success("Successful");
          setLoading(false);
          setShowModal(false);
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            toast.error(error.response?.data.data.message);
            setLoading(false);
            setShowModal(false);
          } else {
            toast.error(`${error}`);
            setLoading(false);
            setShowModal(false);
          }
        },
      }
    );
  };

  const { handleChange, handleSubmit, inputs } = useForm<Education>(
    {} as Education,
    submit
  );

  return (
    <div>
      <div>
        <Modal
          className=" overflow-auto"
          isOpen={showModal}
          handleClose={() => setShowModal(false)}
        >
          <div className="px-3 py-3 bg-[#e5eaf0]">
            <div className="flex justify-between ">
              <div className="px-2 py-3 font-semibold text-secondary text-[18px]">
                Education
              </div>
              <button
                className="self-start p-2"
                onClick={() => setShowModal(false)}
              >
                <Icon icon="cancel" />
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="pt-6 px-6">
              <label className="text-[#63748A] font-medium">School</label>
              <input
                type="text"
                className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
                name="institution"
                onChange={handleChange}
              />
            </div>
            <div className="px-6">
              <label className="text-[#63748A] font-medium">Degree</label>
              <input
                type="text"
                className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
                name="degree"
                onChange={handleChange}
              />
            </div>
            <div className="px-6">
              <label className="text-[#63748A] font-medium">
                Field of Study
              </label>
              <input
                type="text"
                className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
                name="fieldOfStudy"
                onChange={handleChange}
              />
            </div>
            <div className=" px-6 py-4 flex">
              <div className="mr-3">
                <Checkbox
                  type="squared"
                  size="small"
                  color="primary"
                  checked={false}
                />
              </div>

              <p className="text-[#63748A] font-medium text-[16px]">
                Currently in progress
              </p>
            </div>
            <div className="flex px-6 pb-4 gap-x-3 lg:gap-6">
              <div className="w-1/2">
                <label className="text-[#63748A] font-medium">Start Date</label>
                <input
                  type="date"
                  className="rounded-lg py-4 px-2 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[16px] flex gap-1 my-3 w-full"
                  placeholder="mm/yyyy"
                  name="startDate"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <label className="text-[#63748A] font-medium">End Date</label>
                <input
                  type="date"
                  className="rounded-lg py-4 px-2 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[16px] flex gap-1 my-3 w-full"
                  placeholder="mm/yyyy"
                  name="endDate"
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="w-full"></hr>
            <div className="pb-4 flex justify-end pt-6 px-4 ">
              <button
                onClick={() => setShowModal(false)}
                className="text-[16px] px-5 py-[14px] rounded-lg w-32 border border-[#D1D5DB]"
              >
                Cancel
              </button>
              <button
                className="bg-secondary text-white text-[16px] px-5 py-[14px] rounded-lg w-32 ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading || isLoading}
              >
                Save
              </button>
            </div>
          </form>
        </Modal>
      </div>
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
      </div>
      {isLoading ? (
        <Spinner />
      ) : data?.data.data && data.data.data.length > 0 ? (
        data.data.data.map((education: Education) => (
          <ProfileCard
            key={education.id}
            role={education.institution}
            company={`${education.degree} - ${education.fieldOfStudy}`}
            duration={`${moment(education.startDate).format("LL")} - ${moment(
              education.endDate
            ).format("LL")}`}
            edit={() => {}}
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Education;
