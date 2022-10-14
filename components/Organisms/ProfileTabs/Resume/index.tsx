import Image from "next/image";
import React, { useState } from "react";
import Button from "../../../Atoms/Button";
import Icon from "../../../Atoms/Icon";
import ProfileCard from "../../../Atoms/ProfileCard";
import Modal from "../../../Molecules/Modal";

const Resume = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <Modal isOpen={showModal} handleClose={() => setShowModal(false)}>
        <div className="px-5 py-5">
          <div className="flex justify-end">
            <button onClick={() => setShowModal(false)}>
              <Icon icon="cancel" />
            </button>
          </div>
          
          <div className="lg:w-full lg:mx-5 lg:mx-auto text-center flex flex-col items-center justify-center pb-4">
      <div className="h-[58px] w-[58px] bg-[#E1EEFB] rounded-full my-5"></div>
      <span className="block font-semibold text-[18px] text-secondary">
        Upload Your resume
      </span>
      <span className="inline-block font-medium text-[16px] text-[#63748A]">
        Uploading a new resume might alter your existing profile. <br />
        Are you sure you want to proceed?
      </span>
          </div>
          <hr className="w-full"></hr>
          <div className="pb-4 flex justify-between pt-6 lg:px-4 ">
            <button  onClick={() => setShowModal(false)} className="text-[15px] w-1/2 px-2 lg:px-5 py-[14px] rounded-lg w-38 border h-[58px] text-[#63748A] border-[#D1D5DB]">
              No, {"don't"} upload
            </button>

            <button  className="bg-secondary w-1/2 text-white text-[15px] px-5 py-[14px] rounded-lg w-38 h-[58px] ml-4">
              Yes, Upload
            </button>
          </div>
        </div>
      </Modal>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg"
        >
          <Icon icon="file" />
          <span className="font-semibold text-secondary text-base">
            Upload Resume
          </span>
        </button>
      </div>
      <div>
        <ResumeCard
          date="Added 24/08/2022"
          isDefault={true}
          size="1.3 MB"
          name="Filename-one.Pdf"
          preview="/assets/images/cv_preview.png"
          deleteResume={() => {}}
        />
        <ResumeCard
          date="Added 24/08/2022"
          isDefault={false}
          size="1.2 MB"
          name="Filename-two.Pdf"
          preview="/assets/images/cv_preview.png"
          deleteResume={() => {}}
        />
         <ResumeCard
          date="Added 24/08/2022"
          isDefault={false}
          size="1.2 MB"
          name="Filename-two.Pdf"
          preview="/assets/images/cv_preview.png"
          deleteResume={() => {}}
        />
      </div>
    </div>
  );
};

const ResumeCard = ({
  preview,
  name,
  size,
  date,
  isDefault,
  deleteResume,
}: {
  preview: string;
  name: string;
  size: string;
  date: string;
  isDefault: boolean;
  deleteResume: Function;
}) => {
  return (
    <div className="flex flex-col md:flex-row p-4 lg:p-6 lg:items-center bg-white rounded-lg my-2 mt-[10px] lg:justify-between ">
      <div className="flex gap-x-3 items-center">
        <div>
          <Image
            src={preview}
            className="rounded-lg"
            width={69}
            height={59}
            alt={name}
          />
        </div>
        <div>
          <h4 className="text-secondary font-medium text-sm md:text-lg">{name}</h4>
          <span className="text-xs md:text-base text-[#63748A] font-medium flex justify-between items-center gap-x-1">
            {size} <Icon icon="dot" />
            {date}
          </span>
        </div>
      </div>
      <div className={`flex ${isDefault ? "w-3/5 lg:w-2/5 lg:gap-3":"w-3/4 lg:w-[50%] gap-3 my-4"}  lg:justify-between lg:gap-3`}>
        <div className={`${isDefault?"w-2/3 lg:w-1/2":""}`}>
          {isDefault ? (
            <Button
              size="large"
              label="Default"
              cl="text-white mx-0 lg:px-4 bg-[#008354]"
              rounded
            />
          ) : (
            <Button cl={"m-0 w-full lg:m-6 lg:translate-x-8"} label="Make default" color="white" />
          )}
        </div>
        <Button
          label=""
          cl={`  ${isDefault ? "text-white px-5 md:px-1 w-1/3 lg:w-2/5" : "-px-1 py-3 md:py-0 w-1/4 lg:w-1/5 m-0"}`}
          color="white"
          size="none"
          icon={
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 3.49935H11.3333V2.66602C11.3333 2.00297 11.0699 1.36709 10.6011 0.898249C10.1323 0.429408 9.49637 0.166016 8.83333 0.166016H7.16667C6.50363 0.166016 5.86774 0.429408 5.3989 0.898249C4.93006 1.36709 4.66667 2.00297 4.66667 2.66602V3.49935H1.33333C1.11232 3.49935 0.900358 3.58715 0.744078 3.74343C0.587797 3.89971 0.5 4.11167 0.5 4.33268C0.5 4.5537 0.587797 4.76566 0.744078 4.92194C0.900358 5.07822 1.11232 5.16602 1.33333 5.16602H2.16667V14.3327C2.16667 14.9957 2.43006 15.6316 2.8989 16.1005C3.36774 16.5693 4.00363 16.8327 4.66667 16.8327H11.3333C11.9964 16.8327 12.6323 16.5693 13.1011 16.1005C13.5699 15.6316 13.8333 14.9957 13.8333 14.3327V5.16602H14.6667C14.8877 5.16602 15.0996 5.07822 15.2559 4.92194C15.4122 4.76566 15.5 4.5537 15.5 4.33268C15.5 4.11167 15.4122 3.89971 15.2559 3.74343C15.0996 3.58715 14.8877 3.49935 14.6667 3.49935ZM6.33333 2.66602C6.33333 2.445 6.42113 2.23304 6.57741 2.07676C6.73369 1.92048 6.94565 1.83268 7.16667 1.83268H8.83333C9.05435 1.83268 9.26631 1.92048 9.42259 2.07676C9.57887 2.23304 9.66667 2.445 9.66667 2.66602V3.49935H6.33333V2.66602ZM12.1667 14.3327C12.1667 14.5537 12.0789 14.7657 11.9226 14.9219C11.7663 15.0782 11.5543 15.166 11.3333 15.166H4.66667C4.44565 15.166 4.23369 15.0782 4.07741 14.9219C3.92113 14.7657 3.83333 14.5537 3.83333 14.3327V5.16602H12.1667V14.3327Z"
                fill="#002D5B"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Resume;
