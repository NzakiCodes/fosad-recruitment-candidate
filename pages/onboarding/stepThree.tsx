import React, { FC, useState } from "react";
import SelectCheckbox from "../../components/Atoms/SelectCheckbox";
import { JobType } from "../../interfaces/jobs";

interface IOnboardingStep3 {
  selectedJobLocation: string;
  setSelectedJobLocation: Function;
  selectJobStation: JobType;
  setSelectedJobStation: Function;
}

const OnboardingStepThree: FC<IOnboardingStep3> = ({
  selectedJobLocation,
  setSelectedJobLocation,
  setSelectedJobStation,
  selectJobStation,
}) => {
  const [jobLocationTypeList, setJobLocationTypeList] = useState<JobType[]>([
    { id: "in_person", title: "In-Person", isSelected: false },
    { id: "hybrid", title: "Hybrid", isSelected: false },
    { id: "remote", title: "Remote", isSelected: false },
  ]);

  const updateJobLocationTypeList = (id: string) => {
    const updatedJobLocations = jobLocationTypeList.map((jobLocation) => {
      if (id === jobLocation.id) {
        setSelectedJobStation(jobLocation);
      }
      return jobLocation;
    });

    setJobLocationTypeList(updatedJobLocations);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedJobLocation(value);
  };

  return (
    <div className="lg:w-full mx-5">
      {jobLocationTypeList &&
        jobLocationTypeList?.map(({ id, title }) => (
          <SelectCheckbox
            key={id}
            text={title}
            selected={selectJobStation.id === id}
            onClick={() => updateJobLocationTypeList(id)}
          />
        ))}
      <hr className="my-8" />
      <div>
        <span className="inline-block mb-4 font-semibold text-xl text-secondary">
          Please select a location from the dropdown.
        </span>
        <div className="w-full rounded-lg py-5 px-8 text-[#63748A] border-[#DEE3E9] border hover:border-secondary hover:text-secondary transition-colors hover:transition-colors font-medium text-[18px] flex gap-5 my-3">
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 9.32902C8.39556 9.32902 8.78224 9.21172 9.11114 8.99196C9.44004 8.77219 9.69638 8.45984 9.84776 8.09439C9.99913 7.72893 10.0387 7.3268 9.96157 6.93884C9.8844 6.55088 9.69392 6.19451 9.41421 5.91481C9.13451 5.6351 8.77814 5.44462 8.39018 5.36745C8.00222 5.29028 7.60009 5.32988 7.23463 5.48126C6.86918 5.63263 6.55682 5.88898 6.33706 6.21788C6.1173 6.54678 6 6.93346 6 7.32902C6 7.85945 6.21071 8.36816 6.58579 8.74323C6.96086 9.1183 7.46957 9.32902 8 9.32902ZM7.29 16.239C7.38296 16.3327 7.49356 16.4071 7.61542 16.4579C7.73728 16.5087 7.86799 16.5348 8 16.5348C8.13201 16.5348 8.26272 16.5087 8.38458 16.4579C8.50644 16.4071 8.61704 16.3327 8.71 16.239L12.8 12.139C13.75 11.1896 14.397 9.97971 14.6593 8.66248C14.9216 7.34525 14.7873 5.97983 14.2735 4.73891C13.7597 3.49799 12.8894 2.43733 11.7727 1.69108C10.656 0.944825 9.34309 0.546509 8 0.546509C6.65691 0.546509 5.344 0.944825 4.22731 1.69108C3.11062 2.43733 2.24033 3.49799 1.72652 4.73891C1.2127 5.97983 1.07845 7.34525 1.34073 8.66248C1.60301 9.97971 2.25005 11.1896 3.2 12.139L7.29 16.239ZM3.23 6.86902C3.29833 6.15604 3.52502 5.46731 3.89352 4.85313C4.26203 4.23895 4.76305 3.71483 5.36 3.31902C6.1442 2.80412 7.06186 2.52978 8 2.52978C8.93814 2.52978 9.8558 2.80412 10.64 3.31902C11.233 3.71347 11.7311 4.23442 12.0987 4.8444C12.4663 5.45439 12.6942 6.13825 12.7659 6.84681C12.8376 7.55536 12.7514 8.27101 12.5135 8.94228C12.2756 9.61354 11.8919 10.2238 11.39 10.729L8 14.119L4.61 10.729C4.10752 10.2287 3.72293 9.62255 3.48421 8.95482C3.24548 8.28709 3.15864 7.57454 3.23 6.86902ZM15 18.529H1C0.734784 18.529 0.48043 18.6344 0.292893 18.8219C0.105357 19.0094 0 19.2638 0 19.529C0 19.7942 0.105357 20.0486 0.292893 20.2361C0.48043 20.4237 0.734784 20.529 1 20.529H15C15.2652 20.529 15.5196 20.4237 15.7071 20.2361C15.8946 20.0486 16 19.7942 16 19.529C16 19.2638 15.8946 19.0094 15.7071 18.8219C15.5196 18.6344 15.2652 18.529 15 18.529Z"
              fill="#63748A"
            />
          </svg>
          <select
            className="w-full active:outline-0 focus:outline-0"
            name="location"
            id="location"
            value={selectedJobLocation}
            onChange={handleLocationChange}
          >
            <option>Uyo, Nigeria</option>
            <option>Lagos, Nigeria</option>
            <option>Abuja, Nigeria</option>
            <option>Markurdi, Nigeria</option>
            <option>Ado Ekiti, Nigeria</option>
          </select>
        </div>
        <span className="inline-block my-4 font-medium text-sm text-[#63748A]">
          If {"you're"} looking Remote jobs, I still need to collect your
          location so that I can recommend the best jobs for you.
        </span>
      </div>
    </div>
  );
};

export default OnboardingStepThree;
