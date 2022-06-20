import React from 'react'
import backgroundimg from "../Images/net_backcover.jpg";
import tv from "../Images/tv.png";
import mob from "../Images/mobile-0819.jpg"
import tvmob from "../Images/device-pile-in.png"
import child from "../Images/child.png"
import Footer from './Footer';
import Navbar from './Navbar';
import Newletter from './Newletter';
import Storycard from './Storycard';
import Questioncard from './Questioncard';
// import   './custome.css'

export default function Home() {
    console.log('homer render')
    return (
        <>
        
            <div style={{ backgroundImage: `url(${backgroundimg})` }} className='w-full lg:h-screen sm:h-[700px] max-xs:h-[700px] bg-cover bg-center max-xs:bg-center max-xs:bg-cover max-xs:bg-no-repeat'>
                <div className='w-full h-full bg-gradient-to-t from-black/90 via-transparent to-black/90 bg-black/40'>
                    <Navbar />
                    <div className='flex flex-col gap-5'>
                        <div className='text-white px-10 lg:max-w-3xl sm:max-w-xl max-xs:w-full mx-auto flex flex-col items-center max-h-full gap-5 mt-[155px] max-xs:mt-[90px]'>
                            <h1 className='lg:text-[4rem] sm:text-[3rem] max-xs:text-5xl font-bold text-center leading-tight'>Unlimited movies, TV shows and more.</h1>
                            <h1 className='lg:text-3xl sm:text-2xl max-xs:text-xl'>Watch anywhere. Cancel anytime.</h1>
                        </div>
                        <div className='w-full'>
                            <Newletter />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-black lg:h-[465px] sm:h-[700px] max-w-full border-t-8 border-b-8 border-slate-400/25 text-white'>
                <Storycard card={{ title: 'Enjoy on your TV.', para: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.', img: tv, videosrc: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v', videosetting: 'px-[4.3rem] py-20 pb-[6rem] max-custom:px-[14%]  max-custom:pb-[19%] max-custom:pt-[16%] max-xs:px-[13%] max-xs:pb-[19%] max-xs:pt-[16%]' }} />
            </div>
            <div className='bg-black lg:h-[465px] sm:h-[700px] max-w-full border-b-8 border-slate-400/25 text-white'>
                <Storycard card={{ title: 'Download your shows to watch offline.', para: 'Save your favourites easily and always have something to watch.', img: mob, reverse: 'lg:flex-row-reverse' }} />
            </div>
            <div className='bg-black lg:h-[465px] sm:h-[700px] border-b-8 border-slate-400/25 text-white'>

                <Storycard card={{ title: 'Watch everywhere.', para: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.', img: tvmob, videosrc: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v", videosetting: 'px-[6rem] py-7 pb-[8rem] max-xs:px-[19%] max-xs:pb-[30%] max-xs:pt-[6%]' }} />

            </div>
            <div className='bg-black lg:h-[465px] sm:h-[700px] border-b-8 border-slate-400/25 text-white'>
                <Storycard card={{ title: 'Create profiles for children.', para: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.', img: child, reverse: 'lg:flex-row-reverse' }} />
            </div>
            <div className='bg-black lg:max-h-full border-b-8 border-slate-400/25'>
                <div className='pb-16'>
                <Questioncard />
                <Newletter/>
                </div>
            </div>

            {/* ----------------footer----------------------- */}
            <div className='bg-black lg:h-[400px] sm:max-h-full sm:py-10 border-slate-400/25'>                

                    <Footer />
                   
            </div>
        </>
    )
}
