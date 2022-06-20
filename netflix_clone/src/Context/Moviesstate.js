import React, { useState, memo, useCallback } from 'react'
import Moviescontext from './moviescontext'
import Fetchurls, { genreUrl, genreWiseUrls } from './Fetchurls'

function Moviesstate(props) {

    const [genre, setGenre] = useState([])
    const [trendmovies, setTreandmovies] = useState([])
    const [originalmovies, setOriginalmovies] = useState([])
    const [top_rated, setToprated] = useState([])
    const [popular_movie, setPopular] = useState([])
    const [upcoming_movies, setUpcoming] = useState([])
    const [slideshow, setSlideshow] = useState([])
    // const [totalpages, setTotalpages] = useState(null)
    const [gernewisemovies, setGernewisemovies] = useState([])
    const [totalresult, setTotalresult] = useState(0)
    const [urlpage, setUrlpage] = useState(1)
   

    const [{ trending, discover, toprated, popular, upcoming }] = Fetchurls
    const [{ movies }, { tv }] = genreUrl



    const slide_show = useCallback(async () => {
        const reponse = await fetch(trending)
        const jsondata = await reponse.json()
        const tpage = jsondata.total_pages
        const get_rdm_pageno = Math.floor(Math.random() * tpage)

        const getrndpageurl = `https://api.themoviedb.org/3/trending/all/week?api_key=50b43dc195512316fa649b7e2dde0473&page=${get_rdm_pageno}`
        const response1 = await fetch(getrndpageurl)
        const jsondata1 = await response1.json()
        const result_lenth = jsondata1.results.length
        let slideshowno = []
        while (slideshowno.length < 1) {
            const get_rdm_item = Math.floor(Math.random() * result_lenth)
            if (!slideshowno.includes(get_rdm_item)) {
                slideshowno.push(get_rdm_item)
            }

        }
        const result_item = jsondata1.results
        let slide = slideshowno.map((no) =>
            result_item[no]
        )
        // console.log('slide work')
        setSlideshow(slide)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideshow])

    const get_movies_genre = useCallback(async () => {
        const response = await fetch(movies)
        const jsondata = await response.json()
        const responsetv = await fetch(tv)
        const jsondatatv = await responsetv.json()
        // console.log('genre work')
        setGenre([...genre, jsondata.genres, jsondatatv.genres])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genre])

    const discover_movies = useCallback(async () => {
        setUrlpage(urlpage + 1)
        const response = await fetch(`${discover}&page=${urlpage}`)
        const jsondata = await response.json()
        setTotalresult(jsondata.total_results)
        // console.log('orignal work')
        setOriginalmovies([...originalmovies, ...jsondata.results])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [originalmovies])

    const trending_movies = useCallback(async () => {
        setUrlpage(urlpage + 1)
        const response = await fetch(`${trending}&page=${urlpage}`)
        const jsondata = await response.json()
        setTreandmovies([...trendmovies, ...jsondata.results])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trendmovies])

    const toprated_movies = useCallback(async () => {
        setUrlpage(urlpage + 1)
        const response = await fetch(`${toprated}&page=${urlpage}`)
        const jsondata = await response.json()
        setToprated([...top_rated, ...jsondata.results])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [top_rated])

    const popular_movies = useCallback(async () => {
        setUrlpage(urlpage + 1)
        const response = await fetch(`${popular}&page=${urlpage}`)
        const jsondata = await response.json()
        setPopular([...popular_movie, ...jsondata.results])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [popular_movie])

    const upcoming_movie = useCallback(async () => {
        setUrlpage(urlpage + 1)
        const response = await fetch(`${upcoming}&page=${urlpage}`)
        const jsondata = await response.json()
        setUpcoming([...upcoming_movies, ...jsondata.results])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [upcoming_movies])

    const genrewise_movies = useCallback((gene, id) => {
       
        const gernelist = [...new Map(gene.flat().map((item) => [item.id, item])).values()]        
        const datamovieslist = gernelist.map(async(item,index)=>{
            if(gernewisemovies.length === 0){                
                let response = await fetch(`${genreWiseUrls}${item.id}`)
                const jsondata = await response.json()
                const result = await jsondata.results                
                const allgernemoviesdata = {}
                allgernemoviesdata[item.name] = result
                localStorage.removeItem(item.name)
                return allgernemoviesdata
                
            }
            else{
                if(item.name===id){   
                    //page not set new cat
                    localStorage.setItem(item.name,urlpage)                    
                    setUrlpage(prev=>prev+1)
                    let response = await fetch(`${genreWiseUrls}${item.id}&page=${urlpage}`)
                    const jsondata = await response.json()                    
                    const result = await jsondata.results 
                    const concatmovielist = []
                    gernewisemovies.forEach((lis)=>{
                        if(item.name===Object.keys(lis)[0]){
                            const obj = {}
                            obj[item.name] = lis[item.name].concat(result)
                            concatmovielist.push(obj)
                        }
                        else{
                            concatmovielist.push(lis)
                        }
                    })
                    setGernewisemovies(concatmovielist)                   
                }
            }
        })
       
        if (gernewisemovies.length === 0){
            
           Promise.all(datamovieslist).then((result)=>setGernewisemovies(result))
            
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gernewisemovies])

   

    return (
        <Moviescontext.Provider value={{ genre, trendmovies, originalmovies, top_rated, popular_movie, upcoming_movies, slideshow, genrewise_movies, gernewisemovies, totalresult, slide_show, get_movies_genre, trending_movies, discover_movies, toprated_movies, popular_movies, upcoming_movie }}>
            {props.children}
        </Moviescontext.Provider>
    )
}

export default memo(Moviesstate);