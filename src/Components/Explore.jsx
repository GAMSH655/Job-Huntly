import { FaArrowRight } from 'react-icons/fa6'
import Design from "../assets/Design.png"
import Sales from "../assets/Sales.png"
import Marketing from "../assets/Marketing.png"
import Finance  from "../assets/Finance.png"
import Tech  from "../assets/Engineering.png"
import Tag  from "../assets/Tag.png"
import Bag  from "../assets/Bag.png"
import Human   from "../assets/Human.png"
import Dash from "../assets/Dashboard.png"
const Explore = () => {
  const CateGoryData= [
    { catImg:Design , catTitle:"Design" ,catText:"235 jobs available"},
    { catImg:Sales, catTitle:"Sales" ,catText:"756 jobs available"},
    { catImg: Marketing , catTitle:" Marketing " ,catText:"140 jobs available"},
    { catImg: Finance , catTitle:" Finance " ,catText:"325 jobs available"},
    { catImg: Tech  , catTitle:" Technology" ,catText:"436 jobs available"},
    { catImg:Tag , catTitle:"engineering" ,catText:"436 jobs available"},
    { catImg: Bag , catTitle:"business" ,catText:"211 jobs available"},
    { catImg: Human , catTitle:"human resources" ,catText:"346 jobs available"},
  ]
  return (
    <div className='m-[0px] md:m-[50px] '>
       <div className="flex justify-between">
       <h3 className="text-[20px] md:text-[3rem] m-[20px] font-bold">
        Explore by <span className="text-skyBlue">categories</span>
        </h3>
        <p className="text-[#4640DE] font-semibold hidden md:flex justify-center md:items-center">show all jobs <FaArrowRight/></p>
       </div>
        <div className=" flex flex-wrap md:grid md:grid-cols-4 gap-4">
        {
          CateGoryData.map(({ catImg, catTitle, catText }, index) => (
          <div 
            className="border-2 border-[#D6DDEB] hover:bg-[#4640DE] hover:text-white text-[#4640DE] transition-all w-full m-4 md:block flex justify-center items-center" 
            key={index}
          >
            <img src={catImg} alt={catTitle} className="h-[50px] w-[50px] p-[10px]" />
            <h3 className="font-bold text-lg capitalize p-[10px]">{catTitle}</h3>
            <p className="text-sm p-[10px] flex justify-between">{catText} <FaArrowRight className="m-[2px]" /></p>
          </div>
  ))}
           <p className="text-[#4640DE] font-semibold flex justify-center items-center md:hidden m-[20px]">show all jobs <FaArrowRight/></p>
        </div>
         <div className=" mt-[50px] w-full " id='rectangle'>
         <div className="flex flex-wrap justify-center items-center md:justify-evenly p-[10px] md:p-[20px]">
         <div className=" p-[15px] md:p-[30px] ">
         <h3 className="text-white font-bold text-[1.5rem] md:text-[3rem]">Start posting  
             <span className=""> jobs today</span>
            </h3>
            <p className="text-white md:text-left text-center">start posting jobs only for $10</p>
            <button className='bg-white p-2 text-skyBlue hover:bg-[#181742]  w-full md:w-[180px] hover:text-white transition-all'>Sign up for free</button>
         </div>
         <img src={Dash} alt="" />
         </div>
        </div>
    </div>
  )
}

export default Explore
//  09163014170