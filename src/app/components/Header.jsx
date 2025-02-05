'use client'
import { Facebook, Instagram, Linkedin, Menu, Twitter, X, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
const Header = () => {
  const [isOpen , setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Services", path: "/" },
    { name: "Pricing", path: "/" },
    { name: "Careers", path: "/" },
  ];

  return (
    <>
    <nav className='flex items-center justify-between lg:w-[80%] w-[90%] mx-auto mt-5 lg:px-5 px-3 bg-Frost-white lg:h-24 h-16 rounded-xl'>
      {/* Left Section - Logo */}
      <div>
        <h2 className='lg:text-4xl text-3xl font-bold text-Purple font-Bebas'>WebAura</h2>
      </div>

      {/* Center Section - Navigation */}
      <div className='lg:flex hidden items-center text-black space-x-16'>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      {/* mobile menu */}
      <div className='lg:hidden flex '>
        <button onClick={()=> setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className='text-Purple' strokeWidth={3} size={30}/>
          ):(
            <Menu className='text-Purple' strokeWidth={3} size={30} />
          )}
        </button>

      </div>
{/* <div className='lg:hidden flex'>
  <Menu className='text-Purple' 
  strokeWidth={3}
  size={30}
  />
</div> */}
      {/* Right Section - Button */}
      <div className="lg:block hidden">
        <button className='bg-Purple px-8 py-3 tracking-wider text-white rounded-lg'>
          Get in Touch
        </button>
      </div>
    </nav>
    <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] h-[85vh] rounded-xl bg-Frost-white transition-all duration-500 ${
      isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
    } lg:hidden`}>
      <div className='text-Purple flex flex-col items-center space-y-9 text-lg   pt-20 '>
      {navLinks.map((link)=>(
        <Link key={link.name} href={link.path} onClick={()=> setIsOpen(false)}>{link.name}</Link>
      ))}
      </div>
     
      <button className='bg-Purple px-8 py-3 flex flex-col items-center justify-center mt-12 mx-auto w-[70vw] tracking-wider rounded-lg text-white'
      onClick={()=> setIsOpen(false)}
      >
        Get in Touch
      </button>
      <div className='flex space-x-5 text-Purple mt-10 items-center justify-center pb-4'>
<div className='bg-Cyan rounded-full p-3 text-Purple'>
        <Instagram />
       </div>
               <div className='bg-Cyan  rounded-full p-3 text-Purple'>
               <Facebook/>
               </div>
               <div className='bg-Cyan  rounded-full p-3 text-Purple'>
               <Linkedin/>
               </div>
               <div className='bg-Cyan  rounded-full p-3 text-Purple'>
               <Twitter/>
               </div>
               <div className='bg-Cyan  rounded-full p-3 text-Purple'>
               <Youtube/>
               </div>

      </div>
    </div>
    </>
  );
};

export default Header;
