import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { LatestJobInfo } from "../Components/JobData"
const LatestJobs = () => {
  return (
    <div className='bg-[#F7F8FC] p-[30px]' id='pat'>
       <div className="flex justify-between  m-[50px]">
              <h3 className="text-[20px] md:text-[3rem] m-[20px] font-bold">
                 Featured <span className="text-skyBlue">jobs</span>
               </h3>
               <p className="text-[#4640DE] font-semibold hidden md:flex justify-center md:items-center">show all jobs <FaArrowRight/></p>
              </div>
              <div className="grid grid-cols-2">
              {
                LatestJobInfo.map(({ jobsImg, jobTitle, jobLocation, jobType1, jobType2 }, index) => {
                  return (
                    <div className="bg-white flex justify-start items-center m-4 p-[20px]" key={index}>
                    <img src={jobsImg} alt="" />
                    <div className="p-[20px]">
                    <h1 className="font-bold text-xl capitalize p-[10px]">{jobTitle}</h1>
                      <p className="text-[#7C8493] p-[10px] capitalize">{jobLocation}</p>
                      <button className="m-3 capitalize bg-[#EB85331A] p-[9px] rounded-full text-[#FFB836]">
                        {jobType1}
                      </button>
                      <button className="bg-[#4640DE1A] text-[#4640DE] m-3 capitalize p-[10px] rounded-full">
                        {jobType2}
                      </button>
                    </div>
                    </div>
                  );
                })
              }
            </div>

    </div>
  )
}

export default LatestJobs
