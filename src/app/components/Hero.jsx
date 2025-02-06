import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className=' flex mx-auto'>
      <div className='flex mx-auto items-center justify-center  flex-col lg:w-[80%] mt-28'>
      <h1 className='font-Bebas text-Frost-white lg:text-8xl text-4xl  text-center mx-3'>
       &#44; Our Code – Custom <br /><span className='text-Cyan'>Websites That Perform</span>

      </h1>
      <p className='text-gray-100 text-xl lg:mx-32 mx-14 mt-5 text-center   '>
      We craft custom websites that bring your vision to life with sleek design&#44; seamless functionality&#44;  
      and optimized performance to drive real results.
      </p>
      <div className='flex lg:flex-row flex-col justify-center items-center mx-auto lg:space-x-8 mt-16'>
        <button className='bg-Cyan px-10 py-4 tracking-wider text-lg w-[70vw] lg:w-[20vw] font-semibold text-Purple rounded-lg'
        >
          Book a Call
        </button>
        <button className='border-Cyan border-2 px-10 py-4 tracking-wider lg:w-[20vw] w-[70vw]  lg:mt-0 mt-5 font-semibold text-Cyan text-lg rounded-lg'>
          Learn More
        </button>
      </div>
     
      </div>
      <div className='lg:flex hidden flex-col mt-28 bg-Purple p-4 rounded-full space-y-10 mr-6'>
        <div className='bg-Bright hover:bg-Cyan rounded-full p-3 text-Purple hover:scale-125 transition-transform duration-300'>
        <Instagram/>
        </div>
        <div className='bg-Bright hover:bg-Cyan  rounded-full p-3 text-Purple hover:scale-125 transition-transform duration-300'>
        <Facebook/>
        </div>
        <div className='bg-Bright hover:bg-Cyan  rounded-full p-3 text-Purple hover:scale-125 transition-transform duration-300'>
        <Linkedin/>
        </div>
        <div className='bg-Bright hover:bg-Cyan  rounded-full p-3 text-Purple hover:scale-125 transition-transform duration-300'>
        <Twitter/>
        </div>
        <div className='bg-Bright hover:bg-Cyan  rounded-full p-3 text-Purple hover:scale-125 transition-transform duration-300'>
        <Youtube/>
        </div>

      </div>


</div>
  )
}

export default Hero