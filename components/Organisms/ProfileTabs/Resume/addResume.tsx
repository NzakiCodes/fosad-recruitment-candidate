import { AddCandidatesResume } from "@api/services/profile/resume";
import Icon from "@components/Atoms/Icon";
import Modal from "@components/Molecules/Modal";
import { AxiosError } from "axios";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";

interface IModal {
  showModal: boolean;
  setShowModal: Function;
  uploadedFile: string;
}

const AddResume: FC<IModal> = ({ showModal, setShowModal, uploadedFile }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const submit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const res = await AddCandidatesResume(formData);
      console.log(res);
      setLoading(false);
      toast.success("Successfully Uploaded");
      setShowModal(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      // if (error instanceof AxiosError) {
      //   if (error.response?.data.data.message) {
      //     toast.error(error.response?.data.data.message);
      //     setLoading(false);
      //     setShowModal(false);
      //   } else {
      //     toast.error(`${error.message}`);
      //     setLoading(false);
      //     setShowModal(false);
      //   }
      // }
    }
  };

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
            <button
              onClick={() => setShowModal(false)}
              className="text-[15px] w-1/2 px-2 lg:px-5 py-[14px] rounded-lg w-38 border h-[58px] text-[#63748A] border-[#D1D5DB]"
            >
              No, {"don't"} upload
            </button>

            <button
              className="bg-secondary w-1/2 text-white text-[15px] px-5 py-[14px] rounded-lg w-38 h-[58px] ml-4 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={submit}
              disabled={loading}
            >
              Yes, Upload
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddResume;
