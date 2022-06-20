import React, { useState, memo, useEffect } from 'react'
// import AnimationComponents from '../customHooks/AnimationComponents'
import InfiniteCustomScroll from '../customHooks/InfiniteCustomScroll'


function Test() {
    // const [result, setResult] = useState([])
    const [urlpage, setUrlpage] = useState(1)
    const [movieslist, setMovieslist] = useState({result:[], totalpages: null, totalresult: null })

    const fetchdata = async () => {
        setUrlpage(urlpage+1)        
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=50b43dc195512316fa649b7e2dde0473&page=${urlpage}`)
        const data = await response.json()
        console.log('hooks', data)
        const totalpages = data.total_pages
        const totalresult = data.total_results
        setMovieslist({result:[...movieslist.result, ...data.results], totalpages: totalpages, totalresult: totalresult })
        // setResult([...result].concat(...data.results))
    }
   


    useEffect(() => {
        fetchdata()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>

            {console.log('result=', movieslist.result, 'page', urlpage)}

            <InfiniteCustomScroll
                next={fetchdata}
                datalength={movieslist.result.length}
                hasMore={movieslist.result.length !== movieslist.totalresult}             
                loader={<h1>Loading....</h1>}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    overflowX: 'scroll', overflowY: 'hidden'
                }}
                horizontalscroll={true} loading={true}
                classname={'p-5 gap-1'}>

                {movieslist.result.map((item, index) => {
                    return <div key={index} className='w-52 flex-none'>
                        <img className='object-cover w-full h-full' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />

                    </div>
                }
                )}
            </InfiniteCustomScroll>
            {/* <div
                id="scrollableDiv"
                style={{
                    height: 300,
                    overflowY: 'hidden',
                    overflowX: 'auto',
                    display: 'flex',
                }}
            >
                <InfiniteScroll
                    dataLength={result.length}
                    next={fetchmoredata}
                    style={{ display: 'flex', flexDirection: 'row' }} //To put endMessage and loader to the top.
                    inverse={true} //
                    hasMore={result.length !== movieslist.totalresult}
                    loader={<h4>Loading...</h4>}
                    useWindow={false}
                    scrollableTarget="scrollableDiv">
                    {result.map((item, index) => {
                        return <div key={index} className='w-52 flex-none'>
                            <img className='object-cover w-full h-full' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" /></div>
                    }
                    )}
                </InfiniteScroll>
            </div> */}


            {/* <div>Test</div>
            <AnimationComponents duration={'1000'}>
                <img src="https://cdn.pixabay.com/photo/2021/12/11/07/50/forest-6862143_960_720.jpg" alt="" />
            </AnimationComponents> */}
        </>
    )
}

export default memo(Test)