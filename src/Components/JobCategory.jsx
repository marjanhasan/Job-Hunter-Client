import React, { useEffect, useState } from "react";
import JobCategoryCard from "./JobCategoryCard";

const JobCategory = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  //   console.log(info);
  return (
    <div className="mt-6 md:mt-12">
      <h1 className="text-center text-5xl font-semibold">Job Category List</h1>
      <p className="text-center text-base text-gray-500 md:text-lg mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="my-container grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {info.map((singleInfo, i) => (
          <JobCategoryCard key={i} singleInfo={singleInfo} />
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
