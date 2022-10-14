import React, { useState } from "react";
import Container from "../../Atoms/Container";
import HeaderCard from "../../Molecules/HeaderCard";

function LandingHeader() {
  return (
    <div className="bg-secondary pt-28 py-8">
      <div className="bg-secondary text-white lg:py-10 lg:pb-40 landing-header">
        <Container className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <h1 className="font-bold text-4xl leading-[45px]  lg:text-7xl lg:leading-[89px] my-9 mb-6 lg:mb-11">
              Explore & discover the{" "}
              <span className="text-primary">perfect job</span> <br /> for you!
            </h1>
            <p className="text-opacity-80 text-white opacity-80 text-base  lg:text-xl leading-7 inline-block max-w-[600px]">
              More than 866500 current vacancies from 19190 sites available to
              you. Find your new job today.
            </p>
          </div>
          <div className="w-full lg:w-[40%] h-[400px]">
            <HeaderCard />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default LandingHeader;
