import React from "react";

const JobCategoryCard = ({ singleInfo }) => {
  return (
    <div>
      <div className="bg-red-50 hover:bg-red-200 transition duration-200 rounded-md h-60 flex flex-col justify-center">
        <div className="py-6 px-6">
          <div className="h-16 w-16 bg-red-100 flex items-center justify-center rounded-md">
            <img
              src={singleInfo.logo}
              alt=""
              className="object-cover h-10 w-10"
            />
          </div>
          <h2 className="font-bold text-xl mt-5">{singleInfo.name}</h2>
          <p className="text-base text-gray-500 md:text-lg mt-1">
            {singleInfo.jobsAvailable}+Job Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryCard;
