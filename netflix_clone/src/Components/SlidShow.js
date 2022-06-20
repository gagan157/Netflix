import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faClose } from '@fortawesome/free-solid-svg-icons'
import AnimationComponents from '../customHooks/AnimationComponents';
import { useNavigate } from 'react-router-dom';
import MovieTrailerinfo from '../Components/MovieTrailerinfo';


export default function SlidShow(props) {
    const base_url = 'https://image.tmdb.org/t/p/original'
    const [istrailer, setIstrailer] = useState(false)

    const { slideshow, genre  } = props;
    const navigate = useNavigate()
    const handlemoreinfo = (id, name) => {
        // console.log(id,name)
        navigate(`/movies_details/${name}/${id}`)
    }
    const handleplay = (id) => {
        setIstrailer(true)
    }
    const handleClose =()=>{
        setIstrailer(false)
    }

   
    return (
        <>
            {/* {console.log(props.slideshow)} */}
            {/* {console.log([...new Map(props.genre.flat().map((item)=>
                [item.id,item]
                )).values()])} */}


            <div className='overflow-hidden h-[45rem] relative'>
                {istrailer ? <>
                    <MovieTrailerinfo movieinfo={slideshow[0]} slideshow={true} handleClose={handleClose}/>
                    <button onClick={handleClose} className='absolute top-[33rem] right-0 bg-transparent border-2 text-white text-lg font-semibold capitalize w-20 h-8 hover:scale-105 hover:bg-white hover:text-black transition-all duration-700 rounded-tl-md rounded-bl-md group'><FontAwesomeIcon className='transition-all group-hover:rotate-180 duration-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-5 group-hover:translate-x-0' icon={faClose}/> close</button>
                </>
                    : slideshow.length && slideshow.map((item) =>
                        <AnimationComponents key={item.id} duration={'1000'} styleanime={'w-full h-full'}>
                            {/* <div  className=' w-full h-full'>                     */}
                            <img className={`${item.backdrop_path ? 'object-cover' : 'object-contain'} object-top w-full h-full`} src={item.backdrop_path ? item.backdrop_path !== null ? `${base_url}${item.backdrop_path}` : `${base_url}${item.poster_path}` : item.profile_path !== null ? `${base_url}${item.profile_path}` : 'noimage'} alt={`${base_url}${item.poster_path}`} srcSet="" />

                            <div className='w-full h-full bg-gradient-to-t from-black via-transparent absolute top-0 left-0'></div>
                            <div className='absolute top-0 w-full h-full  p-4 bg-black/30'>

                                <div className={`flex-1 max-w-2xl h-full flex flex-col justify-center gap-3`}>
                                    <div>
                                        <div className='flex flex-row justify-start items-center gap-0'>
                                            <div className='w-6'>
                                                <img className='w-full h-full' src={process.env.PUBLIC_URL + '/favicon.ico'} alt="" />
                                            </div>
                                            <h1 className='uppercase tracking-[0.2em] font-serif'>{item.media_type === 'tv' ? 'Series' : item.media_type}</h1>
                                        </div>
                                        <h1 className='text-6xl capitalize'>{item.title ? item.title : item.original_title || item.name ? item.name : item.original_name}</h1>
                                    </div>
                                    <p className='truncate'>{item.overview}</p>
                                    {genre && <ul className='flex gap-5 flex-row list-disc list-inside marker:text-gray-500'>
                                        {item.genre_ids ? item.genre_ids.map((id) =>
                                            <li key={id}>{[...new Map(genre.flat().map((item) =>
                                                [item.id, item]
                                            )).values()].map((genre) => genre.id === id ? genre.name : null)}</li>
                                        ) : null}

                                    </ul>}
                                    <div className='flex gap-5'>
                                        <button onClick={() => { handleplay(item.id) }} className='bg-white text-black w-24 rounded-sm py-1 font-medium flex justify-center items-center gap-2 hover:scale-105 transition-all group hover:shadow-lg hover:shadow-black duration-500'><FontAwesomeIcon className='group-hover:rotate-[360deg] group-hover:text-[#e50914] transition-all duration-700' icon={faPlay} /><span className='text-lg'>Play</span></button>
                                        <button onClick={() => { handlemoreinfo(item.id, item.title || item.original_title) }} className='bg-gray-400/70 w-28 rounded-sm py-1 font-medium text-lg hover:bg-gray-400/80 hover:scale-105 transition-all group hover:shadow-lg hover:shadow-black duration-500'>More Info</button>
                                    </div>
                                </div>

                            </div>
                            {/* </div> */}
                        </AnimationComponents>
                    )}

            </div>



        </>
    )
}
