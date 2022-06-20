import React,{memo, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useGetuserdetailsQuery } from '../slicers/service/auth/userServices'
import { useNavigate } from 'react-router-dom'

function ProtectedRouter(props) {
    const responseinfo  = useGetuserdetailsQuery({ },{ refetchOnMountOrArgChange: true })
    const navigate = useNavigate()
    const { Component  } = props 
    const login = sessionStorage.getItem('loginToken')
    // console.log(responseinfo)
    useEffect(() => {
        console.log('useeefect working')
        if (responseinfo.data) {            
            if (responseinfo.data.errormsg) {               
                if (responseinfo.data.errormsg.name === 'TokenExpiredError') {
                    sessionStorage.removeItem('loginToken')
                    navigate('/login',{state:{'logoutmsg':responseinfo.data.errormsg}})
                    navigate(0)
                }
            }
        }
    })
    
    return (
        <>
         {login? <Component /> : <Navigate to='/login' />}
        
        </>
    )
}

export default memo(ProtectedRouter)