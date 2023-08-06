import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from './Images/Bianco Home without text.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
     setNav(!nav)
    }

  return (
    <div  className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white bg-black'>
        <img className="h-20 w-[120px] mr-4" src={Logo} alt="Logo" />
        <h1 style={{ fontFamily: 'Lato' }}  className='w-full font-bold text-3xl text-white tracking-widest'>BIANCO COSTAL HAUS</h1>
        <ul className='hidden md:flex'>
          
            <Link style={{ fontFamily: 'Lato' }} className='p-4 text-3xl  text-gray-500 hover:text-gray-100 transition duration-300 ease-in-out hover:cursor-pointer' to="Contact" spy={true} smooth={true} offset={-50} duration={1000}>Contact</Link>
           
            <Link style={{ fontFamily: 'Lato' }} className='p-4 text-3xl  text-gray-500 hover:text-gray-100 transition duration-300 ease-in-out hover:cursor-pointer' to="Aspects" spy={true} smooth={true} offset={-50} duration={1500}>Aspects</Link>
            <Link style={{ fontFamily: 'Lato' }} className='p-4 text-3xl  text-gray-500 hover:text-gray-100 transition duration-300 ease-in-out hover:cursor-pointer' to="Gallery" spy={true} smooth={true} offset={-50} duration={2500}>Gallery</Link>

        </ul>
        <div onClick={handleNav} className=''>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            
        </div>
        <div className={nav ? 'fixed left-0 z-10 top-0 w-[70%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'} >
            <div className='mt-[10px]'></div>
            <img className="h-20 w-[120px] mr-10" src={Logo} alt="Logo" />
            <h1 style={{ fontFamily: 'Lato' }} className='w-full text-3xl font-bold text-white tracking-widest'>BIANCO COSTAL HAUS</h1>
            <div className='mt-[25px]'></div>
             <ul className='pt-4 uppercase '>
                <Link style={{ fontFamily: 'Lato' }} onClick={handleNav} className='p-4 text-3xl text-gray-500 hover:text-gray-100 transition duration-300 ease-in-out hover:cursor-pointer'  to="Contact" spy={true} smooth={true} offset={-50} duration={1000}>Contact</Link>
                <div className='mb-[25px] border-b border-gray-600'></div>
                <Link style={{ fontFamily: 'Lato' }} onClick={handleNav} className='p-4 text-3xl text-gray-500 hover:text-gray-100 transition duration-300 ease-in-out hover:cursor-pointer'  to="Aspects" spy={true} smooth={true} offset={-50} duration={1500}>Aspects</Link>
                <div className='mb-[25px] border-b border-gray-600'></div>
                <Link style={{ fontFamily: 'Lato' }} onClick={handleNav} className='p-4 text-3xl text-gray-500 hover:text-gray-100 transition duration-300 ease-in-out hover:cursor-pointer'  to="Gallery" spy={true} smooth={true} offset={-50} duration={2500}>Gallery</Link>
                <div className='mb-[25px] border-b border-gray-600'></div>
             </ul>
        </div>
    </div>
  )

  
}

export default Navbar