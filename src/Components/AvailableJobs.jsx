import React from "react";
import AvailableJob from "./AvailableJob";

const AvailableJobs = ({ jobs }) => {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-5xl font-semibold">
        Available Jobs Lists
      </h1>
      <p className="text-center text-base text-gray-500 md:text-lg mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="my-container grid md:grid-cols-2 gap-3 mt-8">
        {jobs.map((job, i) => (
          <AvailableJob key={i} job={job}></AvailableJob>
        ))}
      </div>
    </div>
  );
};

export default AvailableJobs;
