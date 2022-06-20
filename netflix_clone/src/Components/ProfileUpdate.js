import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useUpdateuserdetailMutation, useGetuserdetailsQuery } from '../slicers/service/auth/userServices'
import { useParams,useNavigate } from 'react-router-dom'

function ProfileUpdate() {
    const [update, updateinfo] = useUpdateuserdetailMutation()
    const responseinfo = useGetuserdetailsQuery()
    const {data,isSuccess} = responseinfo
    const [gender, setGender] = useState({ Male: false, Female: false, Other: false, value: '' })
    const [formdata, setFormdata] = useState({ first_name:'', last_name: '', phone: '', address: '' })
    const {id} = useParams() 
    const navigate = useNavigate()
    const handlecheck = (e) => {
        if (e.target.id === 'male') {
            setGender({ Male: !gender.Male, Female: false, Other: false, value: e.target.value })
        }
        if (e.target.id === 'female') {
            setGender({ Male: false, Female: !gender.Female, Other: false, value: e.target.value })
        }
        if (e.target.id === 'other') {
            setGender({ Male: false, Female: false, Other: !gender.Other, value: e.target.value })
        }
    }
    const handleonChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const handleupdate = (e) => {
        e.preventDefault();
        if (formdata.first_name && formdata.last_name && formdata.phone && formdata.address && gender.value) {
            const updatedata = {
                'id': id,
                'first_name': formdata.first_name,
                'last_name': formdata.last_name,
                'phone': formdata.phone,
                'address': formdata.address,
                'gender': gender.value
            }
            update(updatedata)
            
        }
    }
    useEffect(() => {
      if(updateinfo.isSuccess){
        navigate('/profile')
        
      }
    }, [updateinfo.isSuccess])

    useEffect(()=>{
        if(isSuccess){
            setFormdata({first_name:data.data.first_name,last_name:data.data.last_name,phone:data.data.phone,address:data.data.address})
            setGender(data.data.gender==='male'||data.data.gender==='Male'?{Male:true,Female:false,Other:false}:data.data.gender==='female'||data.data.gender==='Female'?{Male:false,Female:true,Other:false}:{Male:false,Female:false,Other:true})
        }

    },[data])
    
    return (
        <>
            <div className='w-full min-h-screen max-h-full bg-black text-white'>
                <Navbar />
                <div className='py-36 max-w-6xl mx-auto h-full '>
                    <form className='flex flex-col gap-10'>
                        <div className='relative'>
                            <input required onChange={handleonChange} className="border-b-2 border-gray-300 text-white rounded-br-sm rounded-bl-sm focus:rounded-md focus:border-2 transition-all focus:border-[#e87c03] bg-transparent w-full outline-none p-5 placeholder:focus:-translate-y-8 placeholder:transition-all focus:placeholder:invisible valid:border-2 valid:border-[#e87c03] valid:rounded-md peer" type="text" value={formdata.first_name} name="first_name" id="" placeholder='First Name' />
                            <div htmlFor="" className='-translate-y-20 bg-black w-fit translate-x-5 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible peer-focus:transition-all peer-valid:opacity-100 peer-valid:visible'>First Name</div>
                        </div>
                        <div className='relative'>
                            <input required onChange={handleonChange} className="border-b-2 border-gray-300 text-white rounded-br-sm rounded-bl-sm focus:rounded-md focus:border-2 transition-all focus:border-[#e87c03] bg-transparent w-full outline-none p-5 placeholder:focus:-translate-y-8 placeholder:transition-all focus:placeholder:invisible valid:border-2 valid:border-[#e87c03] valid:rounded-md peer" type="text" value={formdata.last_name} name="last_name" id="" placeholder='Last Name' />
                            <div htmlFor="" className='-translate-y-20 bg-black w-fit translate-x-5 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible peer-focus:transition-all peer-valid:opacity-100 peer-valid:visible'>Last Name</div>
                        </div>
                        <div className='relative'>
                            <input required onChange={handleonChange} className="border-b-2 border-gray-300 text-white rounded-br-sm rounded-bl-sm focus:rounded-md focus:border-2 transition-all focus:border-[#e87c03] bg-transparent w-full outline-none p-5 placeholder:focus:-translate-y-8 placeholder:transition-all focus:placeholder:invisible valid:border-2 valid:border-[#e87c03] valid:rounded-md peer" type="text" value={formdata.phone} name="phone" id="" placeholder='Phone' />
                            <div htmlFor="" className='-translate-y-20 bg-black w-fit translate-x-5 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible peer-focus:transition-all peer-valid:opacity-100 peer-valid:visible'>Phone</div>
                        </div>
                        <div className='relative'>
                            <input required onChange={handleonChange} className="border-b-2 border-gray-300 text-white rounded-br-sm rounded-bl-sm focus:rounded-md focus:border-2 transition-all focus:border-[#e87c03] bg-transparent w-full outline-none p-5 placeholder:focus:-translate-y-8 placeholder:transition-all focus:placeholder:invisible valid:border-2 valid:border-[#e87c03] valid:rounded-md peer" type="text" value={formdata.address} name="address" id="" placeholder='Address' />
                            <div htmlFor="" className='-translate-y-20 bg-black w-fit translate-x-5 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible peer-focus:transition-all peer-valid:opacity-100 peer-valid:visible'>Address</div>
                        </div>
                        <div className="border-2 p-4 rounded-md uppercase relative group">
                            <div className="before:content-['Gender'] before:absolute before:-top-4 before:bg-black before:w-fit flex gap-5">
                                <div className='space-x-1'>
                                    <input onChange={handlecheck} checked={gender.Male} value='Male' type="checkbox" name="Male" id="male" />
                                    <label htmlFor="">Male</label>
                                </div>
                                <div className='space-x-1'>
                                    <input onChange={handlecheck} checked={gender.Female} value='Female' type="checkbox" name="Female" id="female" />
                                    <label htmlFor="">Female</label>
                                </div>
                                <div className='space-x-1'>
                                    <input onChange={handlecheck} checked={gender.Other} value='Other' type="checkbox" name="Other" id="other" />
                                    <label htmlFor="">other</label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" onClick={(e) => { handleupdate(e) }} className='bg-red-500 w-full h-10 tracking-widest rounded-md font-semibold text-lg uppercase hover:bg-red-600 text-white hover:-translate-y-1 transition-all duration-500'>Update</button>





                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileUpdate