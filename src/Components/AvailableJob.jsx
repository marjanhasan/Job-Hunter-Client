import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AvailableJob = ({ job }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrParttime,
    location,
    salary,
  } = job;
  return (
    <div className="border p-8 rounded-md">
      <div>
        <img src={companyLogo} alt="" className="object-cover h-12 w-12" />
      </div>
      <h2 className="font-bold text-xl mt-5">{jobTitle}</h2>
      <p className="text-base text-gray-500 md:text-lg mt-1">{companyName}</p>
      <div className="my-4 flex flex-col md:flex-row gap-2">
        <span className="border border-pink-700 rounded-md px-5 py-2 text-pink-500 font-bold">
          {remoteOrOnsite}
        </span>
        <span className="border border-yellow-700 rounded-md px-5 py-2 text-yellow-500 font-bold">
          {fulltimeOrParttime}
        </span>
      </div>
      <div className="text-base text-gray-500 md:text-lg mt-1 break-all">
        <p className="flex">
          <MapPinIcon className="w-5 mr-1" />
          {location}
        </p>
        <p className="flex">
          <CurrencyDollarIcon className="w-5 mr-1" />
          {salary}
        </p>
      </div>
      <Link to="/" className="btn md:w-auto md:mr-4 mt-6">
        <div className="inline-flex items-center justify-center w-full h-full">
          <p className="mr-3">Visit Details</p>
        </div>
      </Link>
    </div>
  );
};

export default AvailableJob;
