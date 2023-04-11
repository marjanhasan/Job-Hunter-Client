import React, { useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [onSite, setOnSite] = useState(false);
  const localData = getShoppingCart();
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
  console.log(cH);
  return (
    <div>
      <div className="bg-gray-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Applied Jobs
      </div>
      <h1>applied</h1>
      <div className="mx-auto w-3/4">
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
      <button onClick={() => handleOnSite(!onSite)} className="btn">
        onsite
      </button>
      <button>remote</button>
    </div>
  );
};

export default AppliedJob;
