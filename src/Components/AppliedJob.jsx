import React, { useState } from "react";
import { getFromDb } from "../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [onSite, setOnSite] = useState(false);
  const [remote, setRemote] = useState(false);
  const [filter, setFilter] = useState(false);
  const localData = getFromDb();
  const localId = Object.keys(localData);
  let exists = [];
  localId.map((lid) => {
    jobs.find((jd) => {
      if (jd.id == lid) {
        exists.push(jd);
      }
    });
  });
  const [cH, setCh] = useState(exists);
  let c = [];
  const handleOnSite = (clicked) => {
    setOnSite(clicked);
    if (!onSite) {
      let final = exists.filter((exist) => exist.remoteOrOnsite == "Onsite");
      setCh([...final]);
    } else {
      setCh([...exists]);
    }
  };
  const handleRemote = (clicked) => {
    setRemote(clicked);
    if (!remote) {
      let final = exists.filter((exist) => exist.remoteOrOnsite == "Remote");
      setCh([...final]);
    } else {
      setCh([...exists]);
    }
  };
  const filterBtn = (clicked) => {
    setFilter(clicked);
  };
  return (
    <div className="">
      <div className="bg-gray-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Applied Jobs
      </div>
      <div className="my-container">
        <div className="flex justify-end relative">
          <span
            onClick={() => filterBtn(!filter)}
            className="inline-flex items-center h-12 px-6 mb-3 font-medium text-black bg-gray-100 rounded shadow-md  md:mb-0 cursor-pointer "
          >
            Filter By{" "}
            <ChevronDownIcon
              className={`w-5 ml-1 transition duration-300 ${
                filter ? `rotate-180` : `rotate-0`
              }`}
            />
          </span>
          {filter && (
            <div className="absolute -right-1 top-10 flex flex-col bg-gray-100 pl-6 pr-14 pb-2 rounded-b-lg">
              <button
                onClick={() => handleRemote(!remote)}
                className="cursor-pointer my-2 text-gray-500 font-medium"
              >
                Remote
              </button>
              <button
                onClick={() => handleOnSite(!onSite)}
                className="cursor-pointer my-2 text-gray-500 font-medium"
              >
                Onsite
              </button>
            </div>
          )}
        </div>
        {cH.map((job) => (
          <div>
            <div className="border-2 shadow-lg border-gray-200 rounded-lg my-4 lg:my-8 flex flex-col lg:flex-row items-center justify-between py-4 lg:py-8 px-4 gap-2">
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="bg-gray-200 p-6 lg:p-12 mx-5 lg:mx-10 rounded-lg">
                  <img
                    className="h-6 lg:h-12 w-6 lg:w-12 rounded-lg"
                    src={job.companyLogo}
                    alt=""
                  />
                </div>
                <div className="">
                  <h1 className="font-bold text-xl">{job.jobTitle}</h1>
                  <p className="text-base text-gray-500 md:text-lg mb-2">
                    {job.companyName}
                  </p>
                  <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-3 ">
                    <div className="border border-pink-700 rounded-md px-5 py-2 text-pink-500 font-bold">
                      {job.remoteOrOnsite}
                    </div>
                    <div className="border border-yellow-700 rounded-md px-5 py-2 text-yellow-500 font-bold">
                      {job.fulltimeOrParttime}
                    </div>
                  </div>
                  <div className="text-base text-gray-500 md:text-lg mt-1 break-all">
                    <p className="flex">
                      <MapPinIcon className="w-5 mr-1" />
                      {job.location}
                    </p>
                    <p className="flex">
                      <CurrencyDollarIcon className="w-5 mr-1" />
                      {job.salary}
                    </p>
                  </div>
                </div>
              </div>
              <Link to={`../jobDetails/${job.id}`}>
                <button className="btn mr-4 lg:mr-8">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
