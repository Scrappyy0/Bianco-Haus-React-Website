import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Circle } from 'react-feather'

const Contents2 = () => {

  const slides = [
    {
      url: 'https://cdn6.ep.dynamics.net/s3/rw-propertyimages/d86b-H2803499-60850324__1667956168-29013-DJI0900copy.jpg?height=1026&maxheight=2560&maxwidth=2560&quality=60&scale=down&width=1370&format=webp',
    },
    {
      url: 'https://cdn6.ep.dynamics.net/s3/rw-propertyimages/2838-H2803499-62781343__1674430913-10411-1.jpg?height=915&maxheight=2560&maxwidth=2560&quality=60&scale=down&width=1370&format=webp',
    },
    {
      url: 'https://cdn6.ep.dynamics.net/s3/rw-propertyimages/029c-H2803499-60595183__1667174789-24725-028Open2viewID740976-29NirvanaCourtRunawayBay.jpg?height=915&maxheight=2560&maxwidth=2560&quality=60&scale=down&width=1370&format=webp',
    },

    {
      url: 'https://cdn6.ep.dynamics.net/s3/rw-propertyimages/7ec6-H2803499-60595149__1667174737-25448-Photo10-2-202211704am.jpg?height=915&maxheight=2560&maxwidth=2560&quality=60&scale=down&width=1370&format=webp',
    },
    {
      url: 'https://cdn6.ep.dynamics.net/s3/rw-propertyimages/5cc2-H2803499-60595163__1667174753-25463-054NEWPHOTOWITHBEACH.jpg?height=915&maxheight=2560&maxwidth=2560&quality=60&scale=down&width=1370&format=webp',
    },
    {
      url: 'https://cdn6.ep.dynamics.net/s3/rw-propertyimages/3ea6-H2803499-60850307__1667956152-29058-DSC9542a.jpg?height=911&maxheight=2560&maxwidth=2560&quality=60&scale=down&width=1370&format=webp',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  

  return (
    <div id="Gallery">
       <p style={{ fontFamily: 'Lato' }}  className="text-white tracking-wide font-bold text-6xl text-center">Gallery</p>
       <p className='text-center text-white'> _____________________________________________________________________________</p>
    
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-1000'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
      {/* lil dots */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${currentIndex === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contents2











