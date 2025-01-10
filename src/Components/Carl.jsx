import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FeatureData } from '../Components/JobData'
const getDeviceType = () => {
  const width = window.innerWidth;

  if (width <= 464) {
    return "mobile";
  } else if (width > 464 && width <= 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};

const MyCarousel = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType);

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // Server-side rendering
      infinite={true}
      autoPlay={deviceType !== "mobile"}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {/* Carousel items */}
      <div> {
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
          })}</div>
    </Carousel>
  );
};

export default MyCarousel;
