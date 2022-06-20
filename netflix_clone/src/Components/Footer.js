import React from 'react'


export default function Footer() {
  return (
    <div className='text-white/50 flex flex-col gap-3 max-w-6xl mx-auto justify-center items-center h-full lg:px-40 md:px-32 sm:px-24 max-xs:px-16 max-xs:py-10'>
        <h1 className='self-start'>Questions? Call <span className='cursor-pointer hover:underline '> 000-800-040-1843</span></h1>
        <div className='lg:columns-4 mt-5 md:columns-3 sm:columns-3 max-xs:columns-2 text-sm w-full'>
            <ul className='space-y-4'>
                <li className='cursor-pointer hover:underline w-fit'>FAQ</li>
                <li className='cursor-pointer hover:underline w-fit'>Investor Relations</li>
                <li className='cursor-pointer hover:underline w-fit'>Privacy</li>
                <li className='cursor-pointer hover:underline w-fit'>Speed Test</li>
            
                <li className='cursor-pointer hover:underline w-fit'>Help Centre</li>
                <li className='cursor-pointer hover:underline w-fit'>Jobs</li>
                <li className='cursor-pointer hover:underline w-fit'>Cookie Preferences</li>
                <li className='cursor-pointer hover:underline w-fit'>Legal Notices</li>
           
                <li className='cursor-pointer hover:underline w-fit'>Account</li>
                <li className='cursor-pointer hover:underline w-fit'>Ways to Watch</li>
                <li className='cursor-pointer hover:underline w-fit'>Corporate Information</li>
                <li className='cursor-pointer hover:underline w-fit'>Only on Netflix</li>
            
                <li className='cursor-pointer hover:underline w-fit'>Media Centre</li>
                <li className='cursor-pointer hover:underline w-fit'>Terms of Use</li>
                <li className='cursor-pointer hover:underline w-fit'>Contact Us</li>               
            </ul>
        </div>
        <select className='border w-fit relative bg-transparent p-2 px-3 rounded-sm my-5 self-start text-xl'>
            <option value="">English</option>
            <option value="">Hindi</option>
            
        
        </select>
        
        <p className='text-xs self-start'>Netflix India</p>
    </div>
  )
}
