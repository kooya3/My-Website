import React from 'react'
import Image from 'next/image'
import Picture from "../components/assets/picture.png";

function Hero() {
  return (
    <div className="py-4 px-6 md:p-5 md:px-26">
    <div className="">
      {/* Title */}
      <div className="flex flex-col items-center pt-3  md:pt-0 lg:pt-0 text-[25px] sm:text-[25px] md:text-[28px] lg:text-[36px] text-center">
        <p className="font-semibold">Elyees Tatua </p>
        <p className="font-semibold">Web Developer + UI/UX Interaction Designer</p>
        <p className="font-semibold"> Based in Kenya 🇰🇪</p>
</div>
</div>
<div className="flex items-center justify-center pt-8 sm:justify-between mx-auto ">
        {/* Main */}
      {/* Left */}
      <div className="hidden sm:flex  flex-col space-y-8 w-[14.5rem]">
        <div className="">
          <p className="text-gray-400 text-[12px] pb-3 lg:text-[15px]">Biography </p>  
          <p className="text-[17px]">Work for money and design for love! I'm Elyees, an UI/UX Interaction Designer based in Kenya.</p>  
          <p className="text-[17px]">I have been coding for 2+ years</p>   
          <p className="text-[17px]">and, since then I've become proficient in a variety of programming languages.</p>
          <p className="text-[17px]"> Coding is my true passion, and I try to practice as often as I can.</p>
          <p className="text-[17px]">I'm always ready for a new challenge.</p>
          <p className="text-[17px]">I hope to use my talents to make a positive impact on the world and help others achieve their goals.</p>
        </div> 
        <div className="">
          <p className=" text-gray-400 text-[12px] pb-3 lg:text-[15px]">Contact </p>  
          <p className="text-[14px] lg:text-[17px]">Nairobi, Kenya <br /> elyeestatua@gmail.com <br /> +254 757 610 462</p>
          </div> 
        <div className="">
          <p className="text-gray-400 text-[12px] pb-3 lg:text-[15px]">Services </p> 
          <p className="text-[14px] whitespace-nowrap lg:text-[17px]"> Mobile Application Design <br />Website Design <br /> Animation <br /> Web Development </p>
        </div>              
      </div>
      {/* Middle */}
      <div className="w-[17rem] h-[25rem] lg:h-[35rem] lg:w-[23rem] xl:h-[36rem] xl:w-[27rem] gradient overflow-hidden -mt-4 rounded-full flex sm:mt-4 mx-5 ">
        <Image src={Picture } alt="user Image" className="object-cover pt-16 xl:ml-3 " />
      </div>  
      <div className="hidden sm:flex sm:flex-col text-right">
        <div className="">
          <p className="text-gray-400 text-[14px] pb-3 lg:text-[15px]">Years of <br />Experience </p>  
          <p className="text-[25px] lg:text-[40px]">3</p>     
        </div>              
        <div className="pt-10">
          <p className="text-gray-400 text-[14px] pb-3 lg:text-[15px]">Satisfaction <br />Clients </p>  
          <p className="text-[25px] lg:text-[40px]">100%</p>     
        </div>  
        <div className="pt-10">
          <p className="text-gray-400 text-[14px] pb-3 lg:text-[15px]">Clients <br />Worldwide </p>  
          <p className="text-[25px] lg:text-[40px]">+<span className="pl-2">13</span></p>     
        </div>      
        <div className="pt-10">
          <p className="text-gray-400 text-[14px] pb-3 lg:text-[15px]">Projects<br />Done </p>  
          <p className="text-[25px] lg:text-[40px]">127</p>     
        </div> 
      </div>
</div>
    </div>
  )
}

export default Hero 