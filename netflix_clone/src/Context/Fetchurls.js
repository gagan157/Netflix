
const Api_key = '50b43dc195512316fa649b7e2dde0473' 
const host = 'https://api.themoviedb.org/3'

const Fetchurls = [
    {
        'trending': `${host}/trending/all/day?api_key=${Api_key}&language=en-US`,
        'discover': `${host}/discover/movie?api_key=${Api_key}&with_networks=213`,
        'toprated': `${host}/movie/top_rated?api_key=${Api_key}&language=en-US`,        
        "nowplaying": `${host}/movie/now_playing?api_key=${Api_key}&language=en-US&page=1`,
        'popular': `${host}/movie/popular?api_key=${Api_key}&language=en-US&page=1`,        
        'upcoming': `${host}/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
    }

]
export const genreUrl = [
    { "movies": `${host}/genre/movie/list?api_key=${Api_key}&language=en-US` },
    { "tv": `${host}/genre/tv/list?api_key=${Api_key}&language=en-US` }
]

export const genreWiseUrls = [

    // `${host}/discover/movie?api_key=${Api_key}&with_genres=`
    `${host}/discover/movie?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&page=1&with_genres=`

]


export default Fetchurls;