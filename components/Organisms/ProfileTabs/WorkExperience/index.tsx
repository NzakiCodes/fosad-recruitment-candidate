import { useAddExperience } from "@api/mutations/profile/experience";
import { useGetUsersWorkExperience } from "@api/queries/profile/experience";
import Spinner from "@components/Spinner";
import { Experience } from "@interface/profile";
import { disablePastDate } from "@utils/disablePastdate";
import useForm from "@utils/useForm";
import { AxiosError, AxiosResponse } from "axios";
import moment from "moment";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Checkbox from "../../../Atoms/Checkbox/Index";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";
import TextArea from "../../../Atoms/TextArea";
import Modal from "../../../Molecules/Modal";

const WorkExperience = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [details, setDetails] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { mutate, isLoading } = useAddExperience();
  const { data } = useGetUsersWorkExperience();

  const submit = () => {
    setLoading(true);
    mutate(
      { ...inputs, details: details },
      {
        onSuccess: async (response: AxiosResponse<Experience>) => {
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

  const { handleChange, handleSubmit, inputs } = useForm<Experience>(
    {} as Experience,
    submit
  );

  return (
    <div>
      <Modal
        className=" rounded-lg"
        isOpen={showModal}
        handleClose={() => setShowModal(false)}
      >
        <div className="px-3 py-3 bg-[#e5eaf0] rounded-t-lg">
          <div className="flex justify-between ">
            <div className="px-2 py-3 font-semibold text-secondary text-[18px]">
              Work Experience
            </div>
            <button
              className="self-start p-2"
              onClick={() => setShowModal(false)}
            >
              <Icon icon="cancel" />
            </button>
          </div>
        </div>
        <form className=" max-h-[85vh] overflow-auto" onSubmit={handleSubmit}>
          <div className="pt-6 px-6">
            <label className="text-[#63748A] font-medium">Title</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="Title of your work experience"
              name="role"
              onChange={handleChange}
            />
          </div>
          <div className="px-6">
            <label className="text-[#63748A] font-medium">Company</label>
            <input
              type="text"
              className="w-full rounded-lg py-4 px-5 text-secondary border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3"
              placeholder="Name of employer company"
              name="organization"
              onChange={handleChange}
            />
          </div>

          <div className=" px-6 py-4 flex">
            <div className="mr-3 w-4 h-4">
              <Checkbox
                type="squared"
                size="small"
                color="primary"
                checked={false}
              />
            </div>

            <p className="text-[#63748A] font-medium text-[16px]">
              I currently work here
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

          <div className="px-6">
            <textarea
              className={`m-2 rounded-lg bg-white border-2 border-[#63748A] active:border-[#63748A] focus:border-[#63748A]
              text-[#63748A] placeholder:text-[#63748A] px-6 py-5 w-full`}
              placeholder="Description (optional)"
              name="details"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
            />
          </div>
          <hr className="w-full"></hr>
          <div className="pb-4 flex justify-end pt-6 px-4 ">
            <button
              className="text-[16px] px-5 py-[14px] rounded-lg w-32 border border-[#D1D5DB]"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-secondary text-white text-[16px] px-5 py-[14px] rounded-lg w-32 ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading || isLoading}
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
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
              edit={() => {}}
              current
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
