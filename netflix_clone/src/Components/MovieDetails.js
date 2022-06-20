import React, { memo, useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetMovieDetailsByIdQuery } from '../slicers/service/getmoviedetails'
import Navbar from './Navbar'
import Rating from '@mui/material/Rating';
import MovieTrailerinfo from './MovieTrailerinfo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

function MovieDetails() {
  
  const location = useLocation()
  const {id} = useParams()
  const movieid = id || location.state.movieid 
  const { data, error, isLoading } = useGetMovieDetailsByIdQuery(movieid)
  const overviewPara = useRef()
  const [render,setRender] = useState(false)

  const truncate = () => {
    const para = overviewPara.current.innerText.slice(0, 100)
    const parajoin = para.concat('...')
    overviewPara.current.innerText = parajoin
  }
  const handleplay = () => {
   
      setRender(true)
    
  }

  const handleclosetrailer =()=>{
    setRender(false)
  }
  
 
  
  useEffect(() => {
    data && truncate()
  }, [data])
  return (
    <>
      <div className='w-full h-full relative overflow-hidden bg-[#181818] text-white'>
        <Navbar />
        {error ?
          <div className='w-full h-screen text-4xl font-bold flex justify-center items-center'>
            <div className='w-12'>
              <img className='w-full h-full' src={process.env.PUBLIC_URL + '/favicon.ico'} alt="" />
            </div>
            <h1 className=''>Movie Not Found</h1>
          </div>
          : isLoading ?
            <h1 className='w-full h-screen text-2xl font-bold flex justify-center items-center'>Loading...</h1>
            : data ?
              // <div className='w-full h-screen overflow-hidden bg-[#181818] text-white'>
              <div className='flex flex-row justify-between'>
                <div className='relative flex flex-col flex-1 justify-center items-center  p-5'>
                  <div className='flex flex-col gap-5 ml-10 mt-20'>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center'>
                        <div className='w-7'>
                          <img className='w-full h-full' src={process.env.PUBLIC_URL + '/favicon.ico'} alt="" />
                        </div>
                        <h1 className='text-base font-bold uppercase tracking-widest '>Movie</h1>
                      </div>
                      <h1 className='text-xs font-bold tracking-widest'>{data.tagline}</h1>
                      <h1 className={`${data.title.length>20 || data.original_title.length>20?'text-4xl':data.title.length>15 || data.original_title.length>15?'text-5xl':'text-6xl' } font-bold uppercase tracking-wider`}> {data.title || data.original_title}</h1>
                    </div>
                    <p ref={overviewPara} className='text-justify'>{data.overview}</p>
                    <ul className='marker:text-gray-400 list-disc flex gap-4 flex-wrap'>
                      {data.genres.map((genre,i) => {
                        return <li key={i} className='list-inside'>{genre.name}</li>
                      })}
                    </ul>
                    <h1>{data.release_date} | {data.status === 'In Production'?'Upcoming':data.status} | {data.runtime}m </h1>
                    {/* <h1>  {data.popularity}</h1> */}
                 
                    {data.vote_average>0? <div className='flex gap-1 items-center'>
                      <h1>  {data.vote_average}</h1>
                      <Rating classes={{ iconEmpty: 'white' }} name="half-rating-read" value={data.vote_average / 2} precision={0.1} readOnly  emptyIcon={<StarIcon style={{ color: 'gray' }}  />}/>
                    </div>:null}

                    <button onClick={handleplay} className='w-24 h-10 border-2 rounded-lg hover:bg-zinc-800 hover:-translate-y-1 hover:scale-105 transition-all'>Play</button>
                  </div>

                </div>
                <div className='w-[70%] h-screen relative flex-none'>
                  <img className='w-full h-full object-cover' src={`${process.env.REACT_APP_IMAGE_API_HOST}${data.backdrop_path || data.poster_path}`} alt="" />
                  <div className='w-full h-full absolute bg-gradient-to-r from-[#181818] via-transparent top-0 left-0 right-0 bottom-0'></div>
                  <div className='w-full h-full absolute bg-gradient-to-t from-[#181818] via-transparent top-0 left-0 right-0 bottom-0'></div>
                </div>
              </div>
              // </div>
              : null}

      </div>
      {render && <div className='absolute top-0 w-full h-screen backdrop-blur-md flex justify-center items-center  transition-all duration-700'>
        <MovieTrailerinfo movieinfo={data} handleClose={handleclosetrailer}/>
        <FontAwesomeIcon onClick={handleclosetrailer} className='text-2xl text-white -translate-x-4 -translate-y-52 cursor-pointer hover:rotate-180 transition-all duration-1000' icon={faXmark}/>
      </div>}
    </>
  )
}

export default memo(MovieDetails)