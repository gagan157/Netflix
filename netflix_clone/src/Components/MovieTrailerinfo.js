import React, { memo, useEffect, useState, useCallback } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function MovieTrailerinfo(props) {
  const [trailerid, setTrailerurl] = useState([])
  const [onerdmtrailerid, setOnerdmtrailerid] = useState('')
  const [error, setError] = useState(false)
  const { movieinfo, slideshow, handleClose } = props

  const opts = {
    height: slideshow?'850':'390',
    width: slideshow?'1520':'690',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls : slideshow?0:1,
      modestbranding : 1,

    },
  };
  // const onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    // console.log('onready work',event.target)
  // }
 
  const onPlay =(e)=>{
    
    const quality = e.target.playerInfo.availableQualityLevels[0]
    // console.log(quality)
    e.target.playerInfo.playbackQuality = quality
  }
  const onEnd =()=>{
    handleClose()
  }
  const getmovietrailerIdlist = async () => {
    const title = movieinfo.title || movieinfo.original_title || movieinfo.name || movieinfo.original_name
    const trailerid = await movieTrailer(title, { id: true, multi: true })

    if (!trailerid) {
      return setError(true)
    }
    setTrailerurl(trailerid)
  }

  const getonemovieIDlist = useCallback((trailerid) => {
    const listlength = trailerid.length
    const rdmino = Math.floor(Math.random() * listlength)
    for (let id in trailerid) {
      setOnerdmtrailerid(trailerid[rdmino])
    }
  }, [trailerid])


  useEffect(() => {
    getonemovieIDlist(trailerid)
  }, [trailerid])

  useEffect(() => {
    getmovietrailerIdlist()
  }, [])
  return (
    <>
      {error ?
        <h1 className='text-xl font-bold flex justify-center items-center w-full h-full text-white'>No Trailer found</h1>
        : onerdmtrailerid ?<>
         <YouTube className={`${slideshow&& 'relative -translate-y-[6.5rem]' }`} ref={props.setRef} videoId={onerdmtrailerid} opts={opts} onEnd={onEnd} onPlay={onPlay}/>
         {slideshow && <div className='absolute top-0 left-0 bg-gradient-to-t from-black w-full h-full'></div>}
         
        </>
          : null}
    </>

  )
}

export default memo(MovieTrailerinfo)