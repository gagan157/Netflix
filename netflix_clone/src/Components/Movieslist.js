import React, { memo } from 'react'
// import { useHorizontalScroll } from './horizontalscroll'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import InfiniteCustomScroll from '../customHooks/InfiniteCustomScroll'
import { Link } from 'react-router-dom'


function Movieslist(props) {
    const base_url = process.env.REACT_APP_IMAGE_API_HOST
    // const scrollRef = useHorizontalScroll();
    const { islarge, extralarge, normalsize, isposter } = props.large || {}
    const { title, item, getMoreMovies } = props;

   

    return (
        <>
            <div className='py-5 mb-7 relative'>
                <h1 className='text-3xl font-semibold capitalize mx-10'>{title}</h1>
                {/* <div  className='flex flex-row overflow-y-hidden scrollbar-hide overflow-x-scroll scroll-smooth gap-3 px-5 py-4'> */}
                <InfiniteCustomScroll
                    id={title}
                    next={getMoreMovies}
                    loader={<h1>Loading....</h1>}
                    hasMore={true}
                    horizontalscroll={true} loading={true}
                    classname={'flex flex-row overflow-y-hidden overflow-x-scroll scroll-smooth scrollbar-hide gap-3 px-5 py-4'}
                >
                    {item.length === 0 ? <h1>Loading...</h1> : item.map((item, index) =>
                        <Link
                            key={index}
                            to={`/movies_details/${item.title ? item.title : item.original_title || item.name ? item.name : item.original_name}/${item.id}`} 
                            state={{movieid:item.id}}>
                            <div
                                id={item.id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL})` }} className={`cursor-pointer transition-all relative bg-slate-600 duration-1000 flex-none ${extralarge ? 'w-[20rem] group h-[30rem] hover:border-4 hover:border-white hover:w-[40rem] relative' : islarge ? 'w-52 max-h-80 h-96 ' : normalsize ? 'w-44 h-72' : 'w-72 h-60'}`}>
                                <div className='absolute overflow-hidden w-6 h-6 top-5 left-4 opacity-30'>
                                    <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/favicon.ico'} alt="" />
                                </div>
                                <LazyLoadImage className={`relative w-full h-full transition-all object-cover ${extralarge ? ' transition-all   relative group-hover:invisible group-hover:opacity-0 duration-1000' : 'hover:scale-110'} `}
                                    src={`${isposter ? `${base_url}${item.poster_path}` : `${base_url}${item.backdrop_path}`}`} alt={`${base_url}${item.backdrop_path}`} />

                                {extralarge && <div id={item.id} className='absolute top-0 w-full h-full invisible opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:visible'>
                                    <LazyLoadImage className='w-full h-full object-cover object-center' src={item.backdrop_path ? `${base_url}${item.backdrop_path}` : `${base_url}${item.poster_path}`} alt="" /></div>}
                            </div> </Link>
    

                    )}
                </InfiniteCustomScroll>
                {/* {item.length===0? <h1>Loading...</h1>:item.map((item,index) =>

                        <div key={index} id={item.id} className={`transition-all bg-slate-600 duration-1000 flex-none ${extralarge ? 'w-[20rem] group h-[30rem] hover:border-4 hover:border-white hover:w-[40rem] relative' : islarge ? 'w-52 h-auto' : normalsize ? 'w-44 h-auto' : 'w-72 h-auto'}`}>
                            <LazyLoadImage className={`w-full h-full transition-all object-cover ${extralarge ? ' transition-all   relative group-hover:invisible group-hover:opacity-0 duration-1000' : 'hover:scale-110'} `}
                                src={`${isposter ? `${base_url}${item.poster_path}` : `${base_url}${item.backdrop_path}`}`} alt={`${base_url}${item.backdrop_path}`} />

                            {extralarge && <div id={item.id} className='absolute top-0 w-full h-full invisible opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:visible'>
                                <LazyLoadImage className='w-full h-full object-cover object-center' src={item.backdrop_path ? `${base_url}${item.backdrop_path}` : `${base_url}${item.poster_path}`} alt="" /></div>}
                        </div>


                    )} 

                </div> */}
            </div>


        </>
    )
}

export default memo(Movieslist)