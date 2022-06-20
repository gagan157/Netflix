import React,{memo} from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRouteNotLogin(props) {
    
    const { Component } = props
    const login = sessionStorage.getItem('loginToken')
   
    return (
        <>
            {login? <Navigate to='/profile'/> : <Component />}
        </>
    )
}

export default memo(ProtectedRouteNotLogin)