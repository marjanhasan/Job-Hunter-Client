import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

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
    jobResponsibility,
    educationalRequirements,
    experiences,
    salary,
    phone,
    email,
    jobTitle,
    location,
  } = final;
  return (
    <div className="my-container grid md:grid-cols-3 gap-5">
      <div className="md:col-span-2">
        <p>
          <span>Job Description: </span>
          {jobDescription}
        </p>
        <p>
          <span>Job Responsibilities: </span>
          {jobResponsibility}
        </p>
        <p>
          <span>Educational Requirements: </span>
          {educationalRequirements}
        </p>
        <p>
          <span>Experiences: </span>
          {experiences}
        </p>
      </div>
      <div className="border p-8 rounded-md ">
        <div className="w-full">
          <h2 className="font-bold text-xl mt-5">Job Details</h2>
          <div className="text-base text-gray-500 md:text-lg mt-1 break-all">
            <p className="flex">
              <CurrencyDollarIcon className="w-5 mr-1" />
              {salary}
            </p>
            <p className="flex">
              <CurrencyDollarIcon className="w-5 mr-1" />
              {jobTitle}
            </p>
          </div>
          <h2 className="font-bold text-xl mt-5">Contact Information</h2>
          <div className="text-base text-gray-500 md:text-lg mt-1 break-all">
            <p className="flex">
              <CurrencyDollarIcon className="w-5 mr-1" />
              {phone}
            </p>
            <p className="flex">
              <CurrencyDollarIcon className="w-5 mr-1" />
              {email}
            </p>
            <p className="flex">
              <MapPinIcon className="w-5 mr-1" />
              {location}
            </p>
          </div>
          <button className="btn w-full flex justify-center mt-6">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
