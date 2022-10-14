const Overview = () => {
  return (
    <div className="bg-white lg:px-5 py-5 rounded-lg">
      <div className="top-10 gap-6 rounded p-4 font-semibold text-[22px]">
        Overview
      </div>
      <div className="px-5">
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-[40%]">Location</div>
          <div className="font-semibold w-[40%]">Lagos, Nigeria</div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row justify-between  gap-y-5 pt-6 pb-3">
          <div className=" text-[#63748A] font-medium w-full md:w-[40%]">Education</div>
          <div className="w-full md:w-[40%]">
            <h1 className="font-semibold">
              University Of Ibadan
              <p className="text-[#63748A]">BSc Economics, 2014-2018</p>
            </h1>
            <h1 className="font-semibold pt-4">
              Federal Govt. College, Ohafia
              <p className="text-[#63748A]">SSCE, 2008-2018</p>
            </h1>
          </div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row justify-between pt-6 pb-3 gap-y-5">
          <div className="text-[#63748A] font-medium w-full md:w-[40%]">Work Experience</div>
          <div className="w-full md:w-[40%]">
            <h1 className="font-semibold">
              Product Lead
              <p className="text-[#63748A]">Smuv Legacy Limited 2014-2018</p>
            </h1>
            <h1 className="font-semibold pt-4">
              Creative Director
              <p className="text-[#63748A]">MTN, 2008-2013</p>
            </h1>
            <h1 className="font-semibold pt-4">
              Art Director
              <p className="text-[#63748A]">Globalcom, 2005-2008</p>
            </h1>
          </div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row gap-y-5 justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-full md:w-[40%]">Skills</div>
          <div className="break-normal font-semibold w-full md:w-[40%]">
            Strategy, Product Magement, Unit Economics UX Design
          </div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row gap-y-5 justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-full lg:w-[40%]">Years Of Experience</div>
          <div className="font-semibold w-full lg:w-[40%]">11</div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row gap-y-5 justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-full md:w-[40%]">
            Preferred Employer Size
          </div>
          <div className="font-semibold w-full md:w-[40%]">Startups, Middle Business</div>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-col md:flex-row gap-y-5 justify-between pt-6 pb-3">
          <div className="text-[#63748A] font-medium w-full md:w-[40%]">Languages</div>
          <div className="font-semibold w-full md:w-[40%]">English, French, Yoruba</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
