import React, { useEffect, useState } from 'react'
import backgroundimg from "../Images/net_backcover.jpg";
import logo from '../Images/Netflix_logo.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useCreateuserMutation } from '../slicers/service/auth/authService';

export default function Signup() {
    const email = useSelector((state) => state.newsletter.email)
    const [isvalid, setIsvalid] = useState({ email: email, password: '', confirm_password: '' })
    const [allfiledrequired, setAllfiledrequired] = useState({status:false,errmsg:''})
    const navigate = useNavigate()
    const checkformvaldation = (e) => {
        let id = e.target.id
        let emailclassdata = document.getElementById('email').getAttribute('class')
        let passclassdata = document.getElementById('password').getAttribute('class')

        if (id === 'email') {
            if (!isvalid.email) {
                document.getElementById('emailerror').style.display = 'block'
                document.getElementById('inneremailerror').innerHTML = 'email address or phone number.'
                document.getElementById('email').setAttribute('class', emailclassdata + ' border-b-2 border-[#e87c03]')
            }
        }
        else {
            if (!isvalid.password) {
                document.getElementById('passerror').style.display = 'block'
                document.getElementById('password').setAttribute('class', passclassdata + ' border-b-2 border-[#e87c03]')
            }
        }
    }
    const handleerror = (e) => {
        let id = e.target.id
        const reg = new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)
        if (id === 'email') {

            if (isNaN(isvalid.email)) {
                if (reg.test(isvalid.email)) {
                    document.getElementById('emailerror').style.display = 'none'
                    document.getElementById('email').setAttribute('class', 'outline-none bg-[#333] h-[3.5rem] px-5 rounded-md')

                }
                else {
                    document.getElementById('emailerror').style.display = 'block'
                    document.getElementById('inneremailerror').innerHTML = 'email address.'
                    document.getElementById('email').setAttribute('class', 'outline-none bg-[#333] h-[3.5rem] px-5 rounded-md border-b-2 border-[#e87c03]')
                }
            }
            else {

                document.getElementById('inneremailerror').innerHTML = 'phone number.'
                document.getElementById('email').setAttribute('class', 'outline-none bg-[#333] h-[3.5rem] px-5 rounded-md border-b-2 border-[#e87c03]')
            }
            if (!isvalid.email) {
                document.getElementById('emailerror').style.display = 'block'
                document.getElementById('inneremailerror').innerHTML = 'email address or phone number.'
                document.getElementById('email').setAttribute('class', 'outline-none bg-[#333] h-[3.5rem] px-5 rounded-md border-b-2 border-[#e87c03]')
            }



        }
        else if (id === 'password') {
            if (isvalid.password.length >= 4 && isvalid.password.length < 60) {
                document.getElementById('passerror').style.display = 'none'
                document.getElementById('password').style.borderStyle = 'none'
            }

            else {
                document.getElementById('passerror').style.display = 'block'
                document.getElementById('password').setAttribute('class', 'outline-none bg-[#333] h-[3.5rem] px-5 rounded-md border-b-2 border-[#e87c03]')
            }
        }
        if (isvalid.password !== isvalid.confirm_password) {
            document.getElementById('repasserror').style.display = 'block'
            const getarrCirfpassword = document.getElementById('confirm_password').getAttribute('class')
            document.getElementById('confirm_password').setAttribute('class', getarrCirfpassword + ' border-b-2 border-[#e87c03]')
        }
        else {
            document.getElementById('repasserror').style.display = 'none'
            document.getElementById('confirm_password').style.borderStyle = 'none'
        }
    }
    const onchange = (e) => {
        setIsvalid({ ...isvalid, [e.target.name]: e.target.value })
    }
    const [createuser, createuserinfo] = useCreateuserMutation()
    const handleSignup = (e) => {
        e.preventDefault()
        const reg = new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)
        if (isvalid.email && isvalid.password && isvalid.confirm_password) {
            if(isvalid.password !== isvalid.confirm_password){
               return setAllfiledrequired({status:true,errmsg:'Password does not Match'})
            }
            if(!(isvalid.password.length>=4)){
                return setAllfiledrequired({status:true,errmsg:'Your password must contain between 4 and 60 characters.'})
            }
            if (reg.test(isvalid.email)) {
                // navigate('/login')
                const senddata = {
                    'email': isvalid.email,
                    'password': isvalid.password
                }
                createuser(senddata)
            }

        }
        else{
            setAllfiledrequired({status:true,errmsg:'All filed required'})
        }
    }
    useEffect(()=>{
        if(createuserinfo.isError){
            setAllfiledrequired({status:true,errmsg:createuserinfo.error.data})
        }
        if(createuserinfo.isSuccess){
            navigate('/login')
        }
        return ()=>{
            setAllfiledrequired({status:false})
        }
    },[createuserinfo])
    return (
        <>
            <div style={{ backgroundImage: `url(${backgroundimg})` }} className="relative h-[1100px] max-xs:h-[900px] bg-auto bg-no-repeat  max-w-full">
                <div className='bg-black/50 w-full h-full max-xs:bg-black'>
                    <div className='logo pt-5 mx-10 w-40 max-xs:mx-3'><img className='object-cover' src={logo} alt="" srcSet="" /></div>
                    <form action="" className='max-w-[30rem] max-xs:max-w-full max-xs:px-3 mx-auto mt-10 max-xs:mt-5 h-fit max-h-full rounded-sm py-10 max-xs:py-5 text-white bg-black/70'>
                        <div className='flex flex-col max-w-[21rem] max-xs:max-w-full mx-auto gap-5'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            <div className='flex flex-col'>
                                <input required onChange={onchange} onBlur={checkformvaldation} onKeyUp={handleerror} className='outline-none bg-[#333] h-[3.5rem] px-5 rounded-md ' value={isvalid.email} type='text' name="email" id="email" placeholder='Email or Phone number' />
                                <span id='emailerror' className='text-sm text-[#e87c03] hidden'>Please enter a valid <span id='inneremailerror'></span></span>
                            </div>
                            <div className='flex flex-col'>
                                <input required onChange={onchange} onBlur={checkformvaldation} onKeyUp={handleerror} className='outline-none bg-[#333] h-[3.5rem] px-5 rounded-md' value={isvalid.password} type="password" name="password" id="password" placeholder='Password' />
                                <span id='passerror' className='text-sm text-[#e87c03] hidden'>Your password must contain between 4 and 60 characters.</span>
                            </div>
                            <div className='flex flex-col'>
                                <input required onChange={onchange} onBlur={checkformvaldation} onKeyUp={handleerror} className='outline-none bg-[#333] h-[3.5rem] px-5 rounded-md' value={isvalid.confirm_password} type="password" name="confirm_password" id="confirm_password" placeholder='Confirm-Password' />
                                <span id='repasserror' className='text-sm text-[#e87c03] hidden'>Your Password does not Match</span>
                            </div>
                            <div className='flex flex-col'>
                                <button disabled={createuserinfo.isLoading} type='submit' onClick={handleSignup} className='bg-[#e50914] h-[3.5rem] rounded-md font-bold disabled:cursor-not-allowed'> Sign Up </button>
                                <span className={`text-[#e87c03] before:content-['*'] ${allfiledrequired.status? 'opacity-100' : 'opacity-0'}`}>{allfiledrequired.status? allfiledrequired.errmsg:null}</span>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex flex-row justify-start items-center gap-1 my-1'>
                                        <input className='accent-white' type="checkbox" name="" id="" />
                                        <h1>Remember me</h1>
                                    </div>
                                    <h1 className='hover:underline cursor-pointer text-sm'>Need help?</h1>
                                </div>
                            </div>
                            <div className='space-y-2 text-white/50 pt-2'>
                                <div className='flex flex-row gap-1'>
                                    <h1>If you Already Members?</h1>
                                    <h1 onClick={() => { navigate('/login') }} className='hover:underline cursor-pointer'>Sign In</h1>
                                </div>
                                <p className='text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-900 cursor-pointer hover:underline'>Learn more.</span></p>
                            </div>
                        </div>
                    </form>
                    <footer className='w-full bg-black/70 py-5  max-xs:border-t-2 max-xs:border-white/40  absolute bottom-0'>
                        <div className='text-white/50 flex flex-col gap-3 max-w-7xl mx-auto justify-center items-center h-full px-40 max-xs:max-w-full max-xs:px-5'>
                            <h1 className='self-start'>Questions? Call <span className='cursor-pointer hover:underline '> 000-800-040-1843</span></h1>
                            <div className='columns-3 mt-5 text-sm w-full max-xs:columns-2'>
                                <ul className='space-y-4'>
                                    <li className='cursor-pointer hover:underline w-fit'>FAQ</li>
                                    <li className='cursor-pointer hover:underline w-fit'>Cookie Preferences</li>
                                    <li className='cursor-pointer hover:underline w-fit'>Help Centre</li>
                                    <li className='cursor-pointer hover:underline w-fit'>Corporate Information</li>
                                    <li className='cursor-pointer hover:underline w-fit'>Terms of Use</li>
                                    <li className='cursor-pointer hover:underline w-fit'>Privacy</li>

                                </ul>
                            </div>
                            <select className='border w-fit relative bg-transparent p-2 px-3 rounded-sm my-5 self-start text-xl'>
                                <option value="">English</option>
                                <option value="">Hindi</option>
                            </select>

                        </div>
                    </footer>
                </div>
            </div>
        </>

    )
}
