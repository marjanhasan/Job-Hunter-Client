import React from "react";
import {
  MapIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const AppliedJobCart = (exist) => {
  return (
    <div className="border-2  border-gray-200 rounded-lg my-8 flex items-center h-[14rem]">
      <img
        className="h-[6rem] w-[12rem] rounded-lg p-5 mx-4 bg-slate-200"
        src={job.logo}
        alt=""
      />
      <div className=" w-[25rem] ">
        <h1 className="font-link text-gray-800 text-xl mb-2">{job.title}</h1>
        <p className="text-gray-500 text-lg mb-3">{job.company}</p>
        <div className="flex gap-4 mb-3">
          <button className="btn-loc">{job.type}</button>
          <button className="btn-loc">{job.duration}</button>
        </div>
        <div className="">
          <div className="inline-flex items-center gap-2 mr-5 text-gray-500">
            <MapPinIcon className="h-5 "></MapPinIcon>
            <p>location: {job.location} </p>
          </div>
          <div className="inline-flex items-center gap-2 text-gray-500">
            <CurrencyDollarIcon className="h-5"></CurrencyDollarIcon>
            <p>Salary: {job.salary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCart;
