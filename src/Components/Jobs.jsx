import { FaArrowRight } from 'react-icons/fa6'
const Jobs = () => {
  return (
    <div>
    <div className="flex justify-between">
       <h3 className="text-[20px] md:text-[3rem] m-[20px] font-bold">
          Featured <span className="text-skyBlue">jobs</span>
        </h3>
        <p className="text-[#4640DE] font-semibold hidden md:flex justify-center md:items-center">show all jobs <FaArrowRight/></p>
       </div>
    </div>
  )
}

export default Jobs
