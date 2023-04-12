import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import JobCategory from "./JobCategory";
import AvailableJobs from "./AvailableJobs";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      {/* banner section  */}
      <div className="bg-gray-100">
        <div className="my-container flex flex-col items-center justify-between lg:flex-row h-full">
          {/* left side  */}
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans lg:text-6xl font-bold tracking-tight text-gray-900 text-4xl sm:text-5xl sm:leading-none">
                Career Connect: <br className="hidden md:block" /> Your Gateway
                to
                <br />
                <span className="inline-block txt-color">
                  Job Opportunities
                </span>
              </h2>
              <p className="text-base text-gray-500 md:text-lg">
                Find your dream job with Career Connect! Discover the latest job
                openings from top companies and connect with hiring managers.
                Get expert advice on job search strategies, resume writing, and
                interview tips to land your next job. Sign up now and start your
                journey to a successful career!
              </p>
              <Link to="/blog" className="btn md:w-auto md:mr-4 mt-6">
                <div className="inline-flex items-center justify-center w-full h-full">
                  <p className="">Get Started</p>
                </div>
              </Link>
            </div>
          </div>
          {/* right side  */}
          <div className="lg:w-1/2">
            <div className="w-full lg:w-4/5 lg:ml-auto m-auto lg:h-[80%]">
              <img
                src="banner.png"
                alt=""
                className="object-fill h-[80%] w-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Available job category section  */}
      <JobCategory></JobCategory>
      {/* Available job lists  */}
      <AvailableJobs jobs={jobs}></AvailableJobs>
    </div>
  );
};

export default Home;
