import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../utilities/fakedb";

const JobDetails = () => {
  const dynamic = useParams();
  const [jd, setJd] = useState([]);
  let final = {};
  useEffect(() => {
    fetch("/jobsDetails.json")
      .then((res) => res.json())
      .then((data) => setJd(data));
  }, []);
  jd.find((d) => {
    if (d.id == dynamic.id) {
      final = { ...d };
    }
  });
  const {
    jobDescription,
    id,
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    phone,
    email,
    jobTitle,
    location,
  } = final;
  const applyBtn = (id) => {
    console.log("clicked");
    addToDb(id);
  };
  return (
    <div>
      <div className="bg-gray-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Job Details
      </div>
      <div className="my-container grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <p className="mb-6 text-justify text-base text-gray-500 md:text-lg">
            <span className="font-bold text-black">Job Description: </span>
            {jobDescription}
          </p>
          <p className="mb-6 text-justify text-base text-gray-500 md:text-lg">
            <span className="font-bold text-black">Job Responsibilities: </span>
            {jobResponsibility}
          </p>
          <p className="mb-6 text-justify text-base text-gray-500 md:text-lg">
            <span className="font-bold text-black">
              Educational Requirements:{" "}
            </span>
            {educationalRequirements}
          </p>
          <p className="mb-6 text-justify text-base text-gray-500 md:text-lg">
            <span className="font-bold text-black">Experiences: </span>
            {experiences}
          </p>
        </div>
        <div className="border p-8 rounded-md bg-red-50">
          <div className="w-full">
            <h2 className="font-bold text-xl mt-5">Job Details</h2>
            <div className="text-base text-gray-500 md:text-lg mt-1 break-all">
              <p className="flex">
                <CurrencyDollarIcon className="w-5 mr-2 text-red-300" />
                {salary}
              </p>
              <p className="flex">
                <BriefcaseIcon className="w-5 mr-2 text-red-300" />
                {jobTitle}
              </p>
            </div>
            <h2 className="font-bold text-xl mt-5">Contact Information</h2>
            <div className="text-base text-gray-500 md:text-lg mt-1 break-all">
              <p className="flex">
                <PhoneIcon className="w-5 mr-2 text-red-300" />
                {phone}
              </p>
              <p className="flex">
                <EnvelopeIcon className="w-5 mr-2 text-red-300" />
                {email}
              </p>
              <p className="flex">
                <MapPinIcon className="w-5 mr-2 text-red-300" />
                {location}
              </p>
            </div>
            <button
              onClick={() => applyBtn(id)}
              className="btn w-full flex justify-center mt-6"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
