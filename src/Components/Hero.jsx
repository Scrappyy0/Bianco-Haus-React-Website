import React from "react";
import House from './Images/HouseTour.mp4';


function Hero() {
  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-75"
      >
        <source src={House} type="video/mp4" />
      </video>

      <div className=" absolute inset-0 flex items-center justify-center flex-col">
        <p style={{ fontFamily: 'Lato' }} className="text-white drop-shadow-2xl text-shadow-lg font-bold text-6xl text-center">Your perfect costal living backdrop</p>
        <p2 style={{ fontFamily: 'Lato' }} className="text-white drop-shadow-2xl text-shadow-lg  font-bold text-6xl text-center">on the water!</p2>
      </div>

    </div>
  );
}



export default Hero;
