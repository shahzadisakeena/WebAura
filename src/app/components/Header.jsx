import Link from 'next/link';
import React from 'react'

const Header = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/" },
        { name: "Services", path: "/" },
        { name: "Pricing", path: "/" },
        { name: "Careers", path: "/" },
      ];
  return (
    <nav className=' flex items-center w-[75%] mx-auto mt-5 px-5 bg-Frost-white h-24 rounded-xl'>
        <div className='flex items-center justify-center  space-x-24 mx-auto'>
            <div>
                <h2 className='text-4xl font-bold text-Purple font-Bebas'>WebAura</h2>
            </div>
            <div className=' flex items-center justify-between text-Deep-blue space-x-12'>
                {navLinks.map((link)=>{
                    return(
                        <Link
                        key={link.name}
                        href={link.path}
                        >
                        {link.name}
                        </Link>
                    )
                })}
            </div>
<div>
    <button className='bg-Purple px-8 py-3 tracking-wider text-white rounded-lg'>
        Get in Touch
    </button>
</div>
        </div>
    </nav>
  )
}

export default Header