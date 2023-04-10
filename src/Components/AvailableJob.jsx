import React from "react";

const AvailableJob = ({ job }) => {
  return (
    <div>
      <div>
        <img src={job.companyLogo} alt="" className="object-cover h-12 w-12" />
      </div>
    </div>
  );
};

export default AvailableJob;
