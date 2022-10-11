import React from "react";
import Button from "../../../Atoms/Button";
import Icon from "../../../Atoms/Icon";
import { edit } from "../../../Atoms/Icon/icons";


const OtherInformation = () => {
  return (
    <div>
      <OtherInfoCard title="Other Informations" edit={() => {}}></OtherInfoCard>
      <div className="px-5 bg-white rounded-lg">
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Minimum Desired Pay
          </div>
          <div className="text-[16px] font-semibold">$250,000/yr</div>
        </div>
        <hr className="w-full"></hr>
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Years of Experience
          </div>
          <p className="text-[16px] font-semibold">11</p>
        </div>
        <hr className="w-full"></hr>
        <div className="pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Preferred Employer Size
          </div>
          <p className="text-[16px] font-semibold">Startups, Middle Business</p>
        </div>
        <hr className="w-full"></hr>
        <div className="pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Languages
          </div>
          <p className="text-[16px] font-semibold">English, French, Yoruba</p>
        </div>
        <hr className="w-full"></hr>
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">Location</div>
          <p className="text-[16px] font-semibold">Lagos, Nigeria</p>
        </div>
        <hr className="w-full"></hr>
        <div className=" pt-6 pb-3">
          <div className="font-mediun text-[16px] text-[#63748A]">
            Geo Preferences
          </div>
          <p className="text-[16px] font-semibold">
            Lagos, Abuja, Portharcourt, Ogun
          </p>
        </div>
      </div>
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
