import React from 'react'
import waggyLine from "../assets/Group.svg"
import {FaMagnifyingGlass  } from "react-icons/fa6"
import { TiLocationOutline } from "react-icons/ti";
import Man from "../assets/Man.png"
import Pic from "../assets/Pic.png"
import Vodafone from "../assets/Vodafone.png"
import intel from "../assets/intel-3.png"
import Vector from "../assets/vector.png"
import Amd from "../assets/Amd.png"
import Tesla from "../assets/Tesla.png"
const Hero = () => {
  return (
   <div className="">
       <div className="bg-[#F8F8FD] p-[50px] flex justify-between relative pattern  ">
      <div className="mt-3">
        <h1 className="text-[72px] font-bold font-clash">Discover </h1>
        <h1 className="text-[72px] font-bold  font-clash"> more than</h1>
        <h1 className="text-[72px] font-bold text-skyBlue font-clash"> 500+ jobs</h1>
         <img src={waggyLine} alt="" />
        <p className="">Great platform for the job seeker that searching <span className="block">for new career heights and passionate about startups.</span> </p>
      
      <div className="bg-white shadow-md p-[9px] flex flex-wrap md:justify-start md:items-center ">
       <div className="flex m-5">
       <FaMagnifyingGlass className='m-2' /> <input type="text" placeholder='job title' className='p-2 bg-transparent  border-b-[0.5px] border-[#D6DDEB] focus:border-2 focus:border-skyBlue outline-none w-full' />
       </div>
       <div className="flex m-5 ">
       <TiLocationOutline className='m-2' /> <input type="text" placeholder='job title' className='p-2 bg-transparent border-b-[0.5px] border-[#D6DDEB] focus:border-2 focus:border-skyBlue outline-none' />
       </div>
       <div className=" flex   md:justify-center md:items-center">
       <button className='bg-skyBlue p-2 block'> Search my job</button>
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
     <div class="wrapper">
    <div class="item item1"><img src={Vodafone} alt="" /></div>
    <div class="item item2"><img src={intel} alt="" /></div>
    <div class="item item3"><img src={Tesla} alt="" /></div>
    <div class="item item4"><img src={Amd} alt="" /></div>
    <div class="item item5"><img src={Vector} alt="" /></div>
</div>
    </div>
   </div>
  )
}

export default Hero
