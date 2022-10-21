import { useGetOtherInformation } from "@api/queries/profile/otherInformation";
import Button from "@components/Atoms/Button";
import Icon from "@components/Atoms/Icon";
import Spinner from "@components/Spinner";
import { OtherInformationInterface } from "@interface/profile";
import { useState } from "react";
import AddOtherInformation from "./addOtherInformation";
import EditOtherInformation from "./editOtherInformation";

const OtherInformation = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<OtherInformationInterface>(
    {} as OtherInformationInterface
  );
  const { data, refetch, isLoading } = useGetOtherInformation();

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="w-full flex items-center justify-center gap-x-3 bg-[#E1EEFB] py-6 rounded-lg"
      >
        <Icon icon="plusCircle" />
        <span className="font-semibold text-secondary text-base">
          Add Other Information
        </span>
      </button>
      {showModal && (
        <AddOtherInformation
          showModal={showModal}
          setShowModal={setShowModal}
          refetchData={refetch}
        />
      )}
      {showEditModal && (
        <EditOtherInformation
          setShowModal={setShowEditModal}
          showModal={showEditModal}
          editItem={itemEdit}
          refetchData={refetch}
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : data?.data.data && data?.data.data.length > 0 ? (
        data.data.data.map((item: OtherInformationInterface) => (
          <div key={item.id}>
            <OtherInfoCard
              title="Other Informations"
              edit={() => {
                setShowEditModal(true);
                setItemEdit(item);
              }}
            ></OtherInfoCard>

            <div className="px-5 bg-white rounded-lg">
              <div className=" pt-6 pb-3">
                <div className="font-mediun text-[16px] text-[#63748A]">
                  Minimum Desired Pay
                </div>
                <div className="text-[16px] font-semibold">{`$${item.minimumDesiredPay}/yr`}</div>
              </div>
              <hr className="w-full"></hr>
              <div className=" pt-6 pb-3">
                <div className="font-mediun text-[16px] text-[#63748A]">
                  Years of Experience
                </div>
                <p className="text-[16px] font-semibold">
                  {item.yearsOfExperience}
                </p>
              </div>
              <hr className="w-full"></hr>
              <div className="pt-6 pb-3">
                <div className="font-mediun text-[16px] text-[#63748A]">
                  Preferred Employer Size
                </div>
                <p className="text-[16px] font-semibold">
                  {item.preferredEmployerSize}
                </p>
              </div>
              <hr className="w-full"></hr>
              <div className="pt-6 pb-3">
                <div className="font-mediun text-[16px] text-[#63748A]">
                  Languages
                </div>
                <p className="text-[16px] font-semibold">{item.languages}</p>
              </div>
              <hr className="w-full"></hr>
              <div className=" pt-6 pb-3">
                <div className="font-mediun text-[16px] text-[#63748A]">
                  Location
                </div>
                <p className="text-[16px] font-semibold">{item.location}</p>
              </div>
              <hr className="w-full"></hr>
              <div className=" pt-6 pb-3">
                <div className="font-mediun text-[16px] text-[#63748A]">
                  Geo Preferences
                </div>
                <p className="text-[16px] font-semibold">
                  {item.geoPreferences.join(", ").slice(0, -1)}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="font-semibold active:outline-0 text-secondary text-base mt-5">
          Please Add other Information about you
        </div>
      )}
    </div>
  );
};

const OtherInfoCard = ({ title, edit }: { title: string; edit: Function }) => {
  return (
    <div className="bg-white p-6 rounded-lg my-1">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-[22px] top-10 gap-6 rounded p-3">
            {title}
          </h1>
        </div>
        <div>
          <Button
            noMargin
            color="secondary"
            label="Edit"
            bold
            size="small"
            onClick={() => edit()}
            iconRight={<Icon icon="editwhite" />}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherInformation;
