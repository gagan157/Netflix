import React, { Suspense, memo, useMemo, useCallback } from 'react'
import { useContext, useEffect } from 'react'
import moviescontext from '../Context/moviescontext'
import Movieslist from './Movieslist'
// import SlidShow from './SlidShow'
import Navbar from './Navbar'
import Footer from './Footer'

const SlidShow = React.lazy(() => import('./SlidShow'));
// const Movieslist = React.lazy(() => import('./Movieslist'));

function Movies() {


    const context = useContext(moviescontext)
    const { genre, trendmovies, originalmovies, top_rated, popular_movie, upcoming_movies, slide_show, slideshow, gernewisemovies, genrewise_movies, get_movies_genre, trending_movies, toprated_movies, discover_movies, popular_movies, upcoming_movie } = context || []
    // const { totalpages, } = context || ''


    const blankcontexthandle = useMemo(() => {
        return slideshow.length > 0 && slideshow
    }, [slideshow])
    // console.log('memo',blankcontexthandle)

    // useEffect(() => {
    //     if (totalpages !== null) {
    //         slide_show(totalpages)
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [totalpages])

    useEffect(() => {
        get_movies_genre()
        slide_show()
        discover_movies()
        trending_movies()
        toprated_movies()
        popular_movies()
        upcoming_movie()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    useEffect(() => {
        if (genre.length > 0) {
            genrewise_movies(genre)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps     
    }, [genre])

   

    const norrenderlargeoringal = useMemo(() => {
        return { islarge: true, isposter: true }
    }, [])
    const norendertrending = useMemo(() => {
        return { extralarge: true, isposter: true }
    }, [])
    const norendernormal = useMemo(() => {
        return { normalsize: true, isposter: true }
    }, [])

    const gernwisemoviecallback = useCallback((id) => {
        return genrewise_movies(genre,id)
    }, [genrewise_movies])

    console.log('movie render')
    return (
        <>
            <div className='max-h-full bg-black text-white pb-10'>
                <Navbar />
                <div className='max-w-full max-h-[35rem] h-[35rem]'>
                    <Suspense fallback={<div className='text-white font-bold text-2xl'>Loading...</div>}>
                        {blankcontexthandle && <SlidShow slideshow={blankcontexthandle} genre={genre} />}
                    </Suspense>
                </div>

                {originalmovies.length > 0 && <Movieslist title={'Netflix Original'} item={originalmovies} getMoreMovies={discover_movies} large={norrenderlargeoringal} />}

                {trendmovies.length > 0 && <Movieslist title={'trending'} item={trendmovies} getMoreMovies={trending_movies} large={norendertrending} />}
                {top_rated.length > 0 && <Movieslist title={'top rated'} item={top_rated} getMoreMovies={toprated_movies} />}
                {popular_movie.length > 0 && <Movieslist title={'popular movies'} item={popular_movie} getMoreMovies={popular_movies} />}
                {upcoming_movies.length > 0 && <Movieslist title={'upcoming movies'} item={upcoming_movies} getMoreMovies={upcoming_movie} large={norendernormal} />}
                {gernewisemovies.length ?
                    <>
                        {gernewisemovies.map((item, index) => {
                          
                          return  Object.values(item).flat().length>0 && <Movieslist key={index} title={Object.keys(item)[0]} item={Object.values(item)[0]} getMoreMovies={gernwisemoviecallback} large={norendernormal} />
    

                        }
                        )}

                    </>
                    : null}
                    <hr className='mb-5'/>
                    <Footer />
            </div>
        </>
    )
}

export default memo(Movies)