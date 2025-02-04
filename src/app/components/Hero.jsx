import React from 'react'

const Hero = () => {
  return (
    <div className=' flex flex-col mx-auto items-center justify-center mt-28  w-[80%]'>
      <h1 className='font-Bebas text-Frost-white text-8xl  text-center'>
      &ldquo; Your Vision&#44; Our Code – Custom <br /><span className='text-Cyan'>Websites That Perform</span> &rdquo;

      </h1>
      <p className='text-gray-100 text-xl mx-32 mt-3 text-center   '>
      We craft custom websites that bring your vision to life with sleek design&#44; seamless functionality&#44;  
      and optimized performance to drive real results.
      </p>
      <div className='flex flex-row justify-center items-center mx-auto space-x-8 mt-16'>
        <button className='bg-Cyan px-10 py-4 tracking-wider text-lg font-semibold text-Purple rounded-lg'
        >
          Book a Call
        </button>
        <button className='border-Cyan border-2 px-10 py-4 tracking-wider font-semibold text-Cyan text-lg rounded-lg'>
          Learn More
        </button>
      </div>
</div>
  )
}

export default Hero