import React, { useState } from "react";
import AvailableJob from "./AvailableJob";
import { Link } from "react-router-dom";

const AvailableJobs = ({ jobs }) => {
  const [btnClick, setBtnClick] = useState(false);
  const handleAllJobs = (clik) => {
    setBtnClick(clik);
  };
  let updatedJobs = [];
  btnClick ? (updatedJobs = [...jobs]) : (updatedJobs = jobs.slice(0, 4));
  return (
    <div className="mt-6 md:mt-12">
      <h1 className="text-center text-3xl md:text-5xl font-semibold">
        Available Jobs Lists
      </h1>
      <p className="text-center text-base text-gray-500 md:text-lg mt-4">
        Discover the latest job openings from top companies and connect with
        hiring managers.
      </p>
      <div className="my-container grid md:grid-cols-2 gap-3 mt-8">
        {updatedJobs.map((job, i) => (
          <AvailableJob key={i} job={job}></AvailableJob>
        ))}
      </div>
      <Link className="flex justify-center mt-6">
        <button onClick={() => handleAllJobs(!btnClick)} className="btn">
          {btnClick ? `See Less Jobs` : `See All Jobs`}
        </button>
      </Link>
    </div>
  );
};

export default AvailableJobs;
