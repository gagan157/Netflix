import React from 'react'


export default function Notfound() {
    return (
        <div className='bg-black/70 relative h-screen max-w-full'>
            <div className='flex justify-center items-center h-full'>
                <div className='absolute max-w-xl aspect-w-0 aspect-h-0 text-center flex justify-center items-center w-full h-screen opacity-40'>
                    <img className='object-cover w-48' src={process.env.PUBLIC_URL + '/favicon.ico'} alt="" />
                </div>
                <h1 className='text-white text-8xl relative uppercase font-bold font-serif tracking-widest'>Page Not Found</h1>
            </div>
        </div>
    )
}
