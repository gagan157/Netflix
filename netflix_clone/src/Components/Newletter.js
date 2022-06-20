import React, { memo, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { setemail } from '../slicers/newletter/newsletterSlicer'
import { useNavigate } from 'react-router-dom'

function Newletter() {
    const email = useSelector((state) => state.newsletter.email)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const msg = useRef()
    const lable = useRef()
    const emailinp = useRef()
    const reg = new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)
    const handlesignup = () => {
        if (!email) {
            msg.current.style.display = 'block'
            msg.current.innerText = 'All field are required'
        }
        if(reg.test(email)){
            navigate('/signup')
        }
    }
    const handlelable = () => {
        emailinp.current.focus()
    }
    const handleonChange = (e) => {
        dispatch(setemail(e.target.value))
        msg.current.style.display = 'block'
        if (!reg.test(email)) {
            msg.current.innerText = 'please Enter valid email'
        }
        else{
            msg.current.style.display = 'none'
            msg.current.innerText = ''
        }
    }
    return (
        <>
            <div className='flex flex-col lg:max-w-[50rem] sm:max-w-[40rem] max-xs:max-w-[50rem] max-xs:px-10 mx-auto px-16 gap-2 justify-center items-center text-white'>
                <h1 className='text-center lg:text-lg md:text-2xl sm:text-xl max-xs:w-[90%] max-xs:self-center max-xs:text-lg'>Ready to watch? Enter your email to create or restart your membership.</h1>
                <div className='flex w-full lg:flex-row lg:gap-0 items-center justify-center  relative sm:flex-col max-xs:flex-col max-xs:gap-3 sm:gap-3'>
                    <input ref={emailinp} onChange={handleonChange} required className='peer text-black w-full h-16 px-5 sm:rounded-sm lg:rounded-l-sm  outline-none pt-2' type="text" value={email} />
                    <label ref={lable} onClick={handlelable} className='absolute text-lg peer-focus:font-semibold left-5 peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:-translate-x-1 text-slate-400 transition-all peer-valid:-translate-y-5 peer-valid:-translate-x-1 peer-valid:text-sm cursor-text appearance-none'>Email address</label>
                    <button onClick={handlesignup} className='lg:w-1/2 bg-red-600 hover:bg-red-500 lg:rounded-r-sm sm:rounded-sm lg:text-3xl capitalize lg:h-16 lg:p-0 sm:text-xl sm:h-12 sm:px-5 sm:py-2 max-xs:text-xl max-xs:h-12 max-xs:px-5 max-xs:py-2 '>get started <FontAwesomeIcon className='font-thin' icon={faAngleRight} size="xs" /></button>
                </div>
                <span ref={msg} className="text-sm tracking-widest text-red-600 before:content-['*'] uppercase hidden"></span>
            </div>
        </>
    )
}

export default memo(Newletter)