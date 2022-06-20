import React, { useEffect } from 'react'
import avatar from '../Images/Netflix-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useGetuserdetailsQuery } from '../slicers/service/auth/userServices'
import { useNavigate } from 'react-router-dom'

function UserProfile() {
    const responseinfo  = useGetuserdetailsQuery({ },{ refetchOnMountOrArgChange: true })
    // const [firstname , setFirstname] = useState('')
    const navigate = useNavigate()
    const handlemanageprofile = () => {
        navigate(`/profile_update/${responseinfo.data.data.userp_id}`)        
    }
    useEffect(() => {
        if (responseinfo.data) {
            // if (responseinfo.data.errormsg) {
            //     if (responseinfo.data.errormsg.name === 'TokenExpiredError') {
            //         localStorage.removeItem('loginToken')
            //         navigate('/login',{state:{'logoutmsg':responseinfo.data.errormsg}})
            //         navigate(0)
            //     }
            // }
            if (!responseinfo.data.data.first_name) {
                navigate(`/profile_update/${responseinfo.data.data.userp_id}`)
            }
        }

    }, [responseinfo.data])
    console.log(responseinfo)
    return (
        <div className='w-full h-screen bg-neutral-900 text-white overflow-hidden'>
            <Navbar islogin={true} />
            <div className='flex justify-center items-center h-full w-full'>
                <div className='flex flex-col justify-center items-center gap-12'>
                    <h1 className='text-4xl tracking-widest font-semibold'>Who's Watching?</h1>
                    <div className='flex flex-row justify-center items-center w-full h-full gap-10'>
                        <div className='flex flex-col w-[6rem] h-[7rem] justify-center items-center gap-1'>
                            <Link to='/movies'><div className='cursor-pointer transition-all hover:border-2 hover:border-white'>
                                <img className='object-cover' src={avatar} alt="" />
                            </div></Link>

                            {responseinfo.isError ? '' : responseinfo.isLoading ? 'Loading..' : responseinfo.isSuccess ? <h1 className='capitalize'> {responseinfo.data.data ? responseinfo.data.data.first_name : 'Guest'} </h1> : null}
                        </div>
                        <div className='flex flex-col w-[6rem] h-[7.7rem] justify-center items-center gap-1 '>
                            <div className='bg-stone-200 w-full h-full flex justify-center items-center cursor-pointer tracking-widest hover:border-2 border-green-800 transition-all'>
                                <h1 className='text-slate-600 text-3xl font-bold'>Kids</h1>
                            </div>
                            <h1>Kids</h1>
                        </div>
                        <div className='flex flex-col w-[5rem] h-[7rem] justify-center items-center gap-1 '>
                            <div className='w-full h-full bg-stone-500 rounded-full flex justify-center items-center cursor-pointer hover:border-2 transition-all'>
                                <FontAwesomeIcon className='text-zinc-900 text-6xl' icon={faPlus} />
                            </div>
                            <h1>Add Profile</h1>
                        </div>
                    </div>
                    <div>
                        <button onClick={handlemanageprofile} className='border-2 px-5 py-2 text-xl font-medium uppercase'>Manage profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;