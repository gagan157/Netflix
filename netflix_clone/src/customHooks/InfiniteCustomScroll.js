import React, { useState, useEffect, memo,useRef } from 'react'

function InfiniteCustomScroll(props) {
    const [isloading, setIsloading] = useState(true)
    const [horizontal, setHorizontal] = useState(false)
    const [vertical, setVertical] = useState(false)

    const { next, children, style, classname, loader, horizontalscroll, verticalscroll,datalength,hasMore ,id} = props
    const previousresultl = useRef();
    // console.log('infinite scroll work')
    useEffect(()=>{
        previousresultl.current = datalength
    },[datalength])

    const fetchdata = (id) => {       
        next(id) 
    }

    const handlescroll = (e) => {
        const top = e.target.documentElement.scrollTop
        const innerheight = window.innerHeight
        const scrollheight = e.target.documentElement.scrollHeight
        
        if (innerheight + top + 1 > scrollheight) {
            console.log('infinite work')
            fetchdata()
        }
    }
    const handlehorizontalscroll = (e) => {
        const scrollleft = e.target.scrollLeft
        const scrollWidth = e.target.scrollWidth
        const clientWidth = e.target.clientWidth
        // console.log('scrollleft', scrollleft)
        // console.log('scrollWidth', scrollWidth)
        // console.log('clientWidth',clientWidth)
        // console.log('sub',scrollWidth - clientWidth - 2)
        if (scrollWidth - clientWidth - 2 < scrollleft) {
            if(hasMore){
                setIsloading(true)                
                fetchdata(id)
            }
        }
    }

    
    useEffect(() => {
        window.addEventListener('scroll', vertical ? handlescroll : undefined)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vertical])


 
    useEffect(() => {
        setHorizontal(horizontalscroll)

        return () => {
            setHorizontal(false)
        }
    }, [horizontalscroll])

    useEffect(() => {
        setVertical(verticalscroll)

        return () => {
            setVertical(false)
        }
    }, [verticalscroll])

    useEffect(()=>{
        datalength!==previousresultl.current?setIsloading(true):setIsloading(false)
        // console.log('before',previousresultl.current,'now',datalength)
        // console.log('length',datalength===previousresultl.current)
        // datalength>previousresultl?setIsloading(true):setIsloading(false)
    },[datalength])

    return (
        <>
        {/* {console.log('before',previousresultl,'now',datalength)} */}
        {/* {console.log('loading=',isloading)} */}
           
            <div className={classname} onScroll={horizontal ? handlehorizontalscroll : undefined} style={style}>{children}{isloading?loader:null}</div>
        </>
    )
}

export default memo(InfiniteCustomScroll)