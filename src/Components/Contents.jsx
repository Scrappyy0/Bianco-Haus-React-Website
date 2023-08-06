import React, {useEffect} from 'react';
import House1 from './Images/House1.png';
import House2 from './Images/House2.png';
import House3 from './Images/House3.png';
import House4 from './Images/House4.png';
import AOS from 'aos'
import 'aos/dist/aos.css'


const ImageWithTextLeft = ({ image, text, text2 }) => (

  <div data-aos='fade-up' className="flex flex-col justify-start items-center sm:flex-row mb-4 object-bottom">
    <img src={image} alt="Image"  className="w-[800px] mb-4 sm:mb-0 sm:mr-4" />
    <div data-aos='fade-up' className="sm:w-64" >
      <p style={{ fontFamily: 'Lato' }}  className="text-3xl font-bold text-white">{text}</p>
      <p style={{ fontFamily: 'Lato' }}  className="text-2xl text-white">{text2}</p>
    </div>
  </div>
);

const ImageWithTextRight = ({ image, text, text2 }) => (

  <div data-aos='fade-up' className="flex flex-col justify-end items-center sm:flex-row mb-4 object-bottom">
    <img src={image} alt="Image" className="w-[750px] mb-4 sm:mb-0 sm:mr-4" />
    <div data-aos='fade-up' className="sm:w-64">
      <p style={{ fontFamily: 'Lato' }}  className="text-3xl font-bold text-white">{text}</p>
      <p style={{ fontFamily: 'Lato' }}  className="text-2xl text-white ">{text2}</p>
    </div>
  </div>
);

function Contents() {
  useEffect(()=> {
    AOS.init({duration:2000});
  }, []);
  return (
 
    <div className='sm:flex-row'  id="Aspects">

<div>
        <div className='mt-[250px]'></div>

       <p style={{ fontFamily: 'Lato' }} className="text-white tracking-wide font-bold text-6xl text-center">Aspects</p>
       <p className='text-center text-white'> _____________________________________________________________________________</p>
    
    </div>

    <div className="container mx-auto p-4">
      <div className='mt-[50px]'></div>

      <ImageWithTextLeft
        image={House1}
        text="A stunning coastal home"
        text2="with a white lux backdrop."
      />

<div className='mt-[100px]'></div>

      <ImageWithTextRight
        image={House2}
        text="Suitable as a fashion home"
        text2="for lifestyle, skin care and pets."
      />

<div className='mt-[100px]'></div>

      <ImageWithTextLeft
        image={House3}
        text="Light filled, bright spaces"
        text2="on a sparkling water setting."
      />

<div className='mt-[100px]'></div>

      <ImageWithTextRight
        image={House4}
        text="tranquil pool area, Abundace of Greenery"
        text2="for a holiday chilled vibe."
      />


<div className='mt-[100px]'></div>


    </div>
    </div>
   
  );
};

export default Contents;
