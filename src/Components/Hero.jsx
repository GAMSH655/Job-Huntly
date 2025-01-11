import waggyLine from "../assets/Group.svg"
import {FaMagnifyingGlass  } from "react-icons/fa6"
import { TiLocationOutline } from "react-icons/ti";
import Pic from "../assets/Pic.png"
import Vod from "../../src/assets/Vod.png"
import Intel from "../../src/assets/intel.png"
import Vector from "../../src/assets/Vector.png"
import Amd from "../../src/assets/Amd.png"
import Tesla from "../../src/assets/Tesla.png"
const Hero = () => {
  const inputBaseClasses = "p-2 bg-transparent border-b-[0.5px] border-[#D6DDEB] focus:border-2 focus:border-skyBlue outline-none w-full";
  const containerClasses = "bg-white shadow-md mt-[30px] p-[9px] flex flex-wrap md:justify-start md:items-center flex-col md:flex-row";
  const inputWrapperClasses = "flex m-5";

  return (
   <div className="">
       <div className="bg-[#F8F8FD] flex justify-between relative pattern  ">
      <div className="mt-3">
        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[72px] font-bold ">
        Discover
      </h1>
      <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[72px] font-bold ">
        more than
      </h1>
      <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[72px] font-bold text-skyBlue ">
        500+ jobs
      </h1>

         <img src={waggyLine} alt="" />
        <p className="">Great platform for the job seeker that searching <span className="block">for new career heights and passionate about startups.</span> </p>
      
        <div className={containerClasses}>
     
      <div className={inputWrapperClasses}>
        <FaMagnifyingGlass className="m-2" />
        <input 
          type="text" 
          placeholder="Job title" 
          className={inputBaseClasses} 
        />
      </div>

   
      <div className={inputWrapperClasses}>
        <TiLocationOutline className="m-2" />
        <input 
          type="text" 
          placeholder="Location" 
          className={inputBaseClasses} 
        />
      </div>

  
      <div className="flex md:justify-center md:items-center m-5">
        <button className="bg-skyBlue p-2 block w-full">Search my job</button>
      </div>
    </div>

      <p className="p-2 text-[#202430]">Popular : UI Designer, UX Researcher, Android, Admin</p>
      </div>
      <div className="hidden   md:flex justify-center items-center"> 
        <img src={Pic} alt=""  className=''/>
      </div>
    </div>
    <div className=" p-[50px] ">
     <p className="text-darkText"> companies we have help grow</p>
    <div className="wrapper">
    <div className="item item1"><img src={Vod} alt="" /></div>
    <div className="item item2"><img src={Intel} alt="" /></div>
    <div className="item item3"><img src={Tesla} alt="" /></div>
    <div className="item item4"><img src={Amd} alt="" /></div>
    <div className="item item5"><img src={Vector} alt="" /></div>
    </div>
    </div>
   </div>
  )
}

export default Hero
