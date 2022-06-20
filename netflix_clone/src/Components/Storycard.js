import React from 'react'

export default function Storycard(props) {
    let { title, para, img, videosrc, reverse, videosetting } = props.card
    return (
        <>
            {/* <div className='h-full max-w-6xl mx-auto p-10'>
                <div className={`flex lg:flex-row sm:flex-col sm:text-center max-xs:flex-col
                 max-xs:text-center lg:text-left justify-center items-center w-full h-full gap-14 ${reverse}`}>
                    <div className='textcard'>
                        <h1 className='text-5xl font-bold my-5'>{title}</h1>
                        <p className='text-2xl font-medium'>{para}</p>
                    </div>
                    <div className='imgvideocard flex-none'>
                        <div className='relative'>
                            <img className='h-96 relative z-10 object-cover w-30' src={img} alt="" />

                            <video className={`absolute ${videosetting}`} autoPlay playsInline muted loop><source src={videosrc} type="video/mp4" /></video>

                        </div>
                    </div>
                </div>
            </div> */}
            <div className='h-full max-w-6xl mx-auto p-10 '>
                <div className={`flex lg:flex-row sm:flex-col sm:text-center max-xs:flex-col
                 max-xs:text-center lg:text-left justify-center items-center w-full h-full lg:gap-14 sm:gap10 ${reverse}`}>
                    <div className='textcard'>
                        <h1 className='lg:text-5xl font-bold my-5 sm:text-5xl max-xs:text-4xl '>{title}</h1>
                        <p className='lg:text-2xl font-medium sm:text-xl max-xs:text-lg'>{para}</p>
                    </div>
                    <div className='imgvideocard flex-none '>
                        <div className='relative w-full overflow-hidden'>
                            <img className='lg:h-96 relative z-10 object-cover lg:w-30 sm:w-30 sm:h-[25rem]' src={img} alt="" />
                            <div className={`absolute w-full h-full  top-0 `}>
                                <video className={`h-full w-full ${videosetting}  m-auto  object-cover object-center`} autoPlay playsInline muted loop><source src={videosrc} type="video/mp4" /></video>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
