import React, { memo, useEffect, useState } from 'react'

function AnimationComponents(props) {
    const [imgopacity,setImgopacity] = useState('opacity-0')
    const [setting,setSetting] = useState({imgtime:1000, imgduration:'300'})
    const { children, duration, styleanime} = props

    useEffect(() => {
        setTimeout(() => {
            setImgopacity('opacity-100')
        }, setting.imgtime);

        return ()=>{
            setImgopacity('opacity-0')
        }
    }, [])

   

    useEffect(() => {
        duration && setSetting({imgduration:duration})    
    }, [duration])
    
    return (
        <>

        <div className={`${imgopacity} transition-all duration-${setting.imgduration} ${styleanime}`}>
            {children}
        </div>
        </>
    )
}

export default memo(AnimationComponents);