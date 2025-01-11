import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { LatestJobInfo } from "../Components/JobData"
import { GoDotFill } from "react-icons/go";
const LatestJobs = () => {
  return (
    <div className='bg-[#F7F8FC] ' id='pat'>
       <div className="flex justify-between ">
              <h3 className="text-[20px] md:text-[3rem] m-[20px] font-bold">
                 Featured <span className="text-skyBlue">jobs</span>
               </h3>
               <p className="text-[#4640DE] font-semibold hidden md:flex justify-center md:items-center">show all jobs <FaArrowRight/></p>
              </div>
              <div className=" flex flex-wrap justify-center items-center md:grid md:grid-cols-2 gap-2">
              {
                LatestJobInfo.map(({ jobsImg, jobTitle, jobLocation, jobType1, jobType2 , jobType3 ,imgName }, index) => {
                  return (
                    <div className="bg-white block md:flex md:justify-start items-center m-4 p-[20px] w-full" key={index}>
                    <img src={jobsImg} alt="" className=' p-[9px]' />
                    <div className=" p-[0px] md:p-[20px]">
                    <h1 className="font-bold text-xl capitalize p-[10px]">{jobTitle}</h1>
                    <div className="flex justify-start items-center">
                     <p className="">{imgName}</p>
                     <GoDotFill className='text-[#7C8493] ml-4'/>
                     <p className="text-[#7C8493] p-[10px] capitalize">{jobLocation}</p> 
                    </div>
                   
                      <button className=" m-2 md:m-3 capitalize bg-[#56CDAD1A] p-[10px] rounded-full text-[#56CDAD]">
                        {jobType1}
                      </button>
                      <button className="bg-[#EB85331A] text-[#FFB836]  m-2 md:m-3 capitalize p-[10px] rounded-full">
                        {jobType2}
                      </button>
                      <button className="bg-[#4540de8c] text-[#4640DE]  m-2 md:m-3 capitalize p-[10px] rounded-full">
                        {jobType3}
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
