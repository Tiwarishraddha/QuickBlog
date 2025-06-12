import React from 'react'
import { assets, footer_data } from '../assets/assets'

function Footer() {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3 mt-12 '>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-580/30 text-gray-500'>

        {/* Logo & Description */}
        <div className='w-full md:w-[50%]'>
            
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />

          <p className='max-w-[410px] mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sit soluta temporibus cupiditate natus, ab laboriosam quis exercitationem,
            sapiente perspiciatis ex reprehenderit quas eaque error commodi delectus 
            quidem odit quo voluptates.
          </p>

        </div>

        {/* Footer Links */}
        <div className='flex flex-wrap justify-between w-full md:w-[50%] gap-5'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover:underline transition'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Bottom */}
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        © 2025 QuickBlog by GreatStack – All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
