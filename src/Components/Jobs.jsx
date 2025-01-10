import { FaArrowRight } from 'react-icons/fa6'
import "react-multi-carousel/lib/styles.css";
import { FeatureData } from '../Components/JobData'
const Jobs = () => {

  return (
    <div>
    <div className="flex justify-between  m-[50px]">
       <h3 className="text-[20px] md:text-[3rem] m-[20px] font-bold">
          Featured <span className="text-skyBlue">jobs</span>
        </h3>
        <p className="text-[#4640DE] font-semibold hidden md:flex justify-center md:items-center">show all jobs <FaArrowRight/></p>
       </div>
       <div className="md:grid md:grid-cols-4 md:gap-4  md:m-[30px] hidden">
        {
       FeatureData.map(({jobsImg ,jobTitle ,jobLocation , jobPP , jobType1 , jobType2}, index)=>{
            return <div className="border-2 border-[#D6DDEB]" key={index} >
              <div className=" flex justify-between items-center p-[10px]">
              <img src={jobsImg} alt="" />
              <button className="capitalize border-2 border-[#4640DE] p-[5px] hover:bg-skyBlue hover:text-white transition-all">full time</button>
              </div>
              <h1 className="font-bold text-xl capitalize p-[10px]">{jobTitle}</h1>
              <p className="text-[#7C8493] p-[10px] capitalize">{jobLocation }</p>
              <p className="text-[#7C8493] p-[10px]">{jobPP}</p>
              <button className="m-3 capitalize bg-[#EB85331A] p-[9px] rounded-full text-[#FFB836] ">{jobType1}</button>
              <button className="bg-[#4640DE1A] text-[#4640DE]   m-3 capitalize p-[10px] rounded-full ">{jobType2}</button>
            </div>
          })
        }
       </div>
    </div>
  )}
export default Jobs
