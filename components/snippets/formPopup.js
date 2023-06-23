import React from 'react'
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
    // password: Yup.string().min(8).max(32).required("This Field is Required."),
    course: Yup.string().required("This Field is Required."),
    name: Yup.string().min(8).max(32).required("This Field is Required."),
    email: Yup.string().email().required("This Field is Required."),
    phone: Yup.string().required("This Field is Required."),
    state: Yup.string().required("This Field is Required."),
    city: Yup.string().required("This Field is Required."),
});


const FormPopup = ({ show, setShow }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = async (data) => {
        console.log(data, "================sfdjksf");
        let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users`, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => response.json())
        if (result) {
            console.log("=sucesss");
            reset();
        }
        else {
            console.log("===fail");
        }

    };

    return (
        <>
            {show && <div className='fixed overscroll-y-none left-0 overflow-y-scroll w-screen h-screen top-0 right-0 bottom-0 scrollbar-hide bg-black opacity-70  z-[99999999] ' onClick={() => setShow(!show)} ></div>}

            <form onSubmit={handleSubmit(onSubmitHandler)} className={`bg-[#0C1012]  w-[90%] max-w-[48.5rem] m-auto rounded-30 p-8  fixed left-[50%] top-[5%] -translate-x-[50%] shadow-inner border-[1px] overscroll-none border-[#37474F] z-[1]  md:p-10 ${show ? "" : "hidden"} z-[999999999] `}>
                <div className='relative after:absolute after:bg-crossIcon after:w-[17px] after:h-[17px] after:-top-4 after:-right-4 after:cursor-pointer' onClick={() => setShow(!show)}>
                </div>
                <h2 className='font-lato text-white text-[1.625rem] font-bold text-center leading-9 mb-8 md:text-[2rem] md:mb-10'>Apply For Courses</h2>
                <div className='border-[#37474F] border-[1px] p-3 rounded-large flex justify-between mb-5 md:p-5'>
                    <select name="state" id="state" className='form-control outline-none bg-transparent text-[#CFD8DC] w-full' {...register("course")}>
                        <option className='bg-[#0B0F12]' value="Development">Web Development</option>
                        <option className='bg-[#0B0F12]' value="Designing">Web Designing</option>
                        <option className='bg-[#0B0F12]' value="Full Stack">Full Stack</option>
                        <option className='bg-[#0B0F12]' value="SEO">SEO</option>
                        <option className='bg-[#0B0F12]' value="UI/UX">UI/UX</option>
                    </select>
                </div>
                <p className='text-white'>{errors.course?.message}</p>

                {/* <div className='border-[#37474F] border-[1px] p-5 rounded-large flex justify-between mb-5'>
                    <div className='relative w-full group'>
                        <input className='bg-transparent outline-none w-full text-white' id="popup_course"></input>
                        <label className=' text-[#CFD8DC] bg-[#0C1012] text-[1.125rem] absolute top-0 left-0 group-focus-within:-top-6 group-focus-within:text-[0.875rem] transition-all md:group-focus-within:-top-8' htmlFor="popup_course"> Select Courses</label>
                    </div>
                    <Image src={'/down_arrow.svg'} alt="" height={7} width={12} className=''></Image>
                </div> */}
                <div className='mb-5'>
                    <div className='border-[#37474F] border-[1px] p-3 rounded-large flex justify-between  md:p-5'>
                        <div className="relative w-full group">
                            <input {...register("name")} type="text" id="name" className="bg-transparent outline-none w-full text-white block appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                            <label htmlFor="name" className="absolute top-0 left-0  group-focus-within:-top-8' text-[#CFD8DC] bg-[#0C1012] peer-focus:text-[16px] peer-placeholder-shown:text-[1.125rem] peer-focus-text-[1.125rem] duration-300 -translate-y-[32px]  origin-[0] peer-focus:px-2 peer-placeholder-shown:px-2 px-2 peer-placeholder-shown:-translate-y-0 peer-focus:top-0 peer-focus:-translate-y-[32px] ">Your Name</label>
                        </div>
                    </div>
                    <p className='text-red-700'>{errors.name?.message}</p>
                </div>
                <div className='mb-5'>
                    <div className='border-[#37474F] border-[1px] p-3 rounded-large flex justify-between  md:p-5'>
                        <div className="relative w-full group">
                            <input {...register("email")} type="email" id="email" className=" bg-transparent outline-none w-full text-white block appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                            <label htmlFor="email" className="absolute top-0 left-0  group-focus-within:-top-8' text-[#CFD8DC] bg-[#0C1012] peer-focus:text-[16px] peer-placeholder-shown:text-[1.125rem] peer-focus-text-[1.125rem] duration-300 -translate-y-[32px]  origin-[0] peer-focus:px-2 peer-placeholder-shown:px-2 px-2 peer-placeholder-shown:-translate-y-0 peer-focus:top-0 peer-focus:-translate-y-[32px] ">Email</label>
                        </div>
                    </div>
                    <p className='text-red-700'>{errors.email?.message}</p>
                </div>
                <div className='mb-5'>
                    <div className='border-[#37474F] border-[1px] p-3 rounded-large flex justify-between md:p-5'>
                        <div className="relative w-full group">
                            <input {...register("phone")} type="number" id="phNumber" className="!bg-transparent outline-none w-full text-white block appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                            <label htmlFor="phNumber" className="absolute top-0 left-0  group-focus-within:-top-8' text-[#CFD8DC] bg-[#0C1012] peer-focus:text-[16px] peer-placeholder-shown:text-[1.125rem] peer-focus-text-[1.125rem] duration-300 -translate-y-[32px]  origin-[0] peer-focus:px-2 peer-placeholder-shown:px-2 px-2 peer-placeholder-shown:-translate-y-0 peer-focus:top-0 peer-focus:-translate-y-[32px] ">Phone No.</label>
                        </div>
                        <Image src={'/phone-popup.svg'} alt="phone icon" height={7} width={12} className=''></Image>
                    </div>
                    <p className='text-red-700'>{errors.phone?.message}</p>
                </div>

                <div className='flex justify-between gap-5 mb-5'>
                    <div className='border-[#37474F] border-[1px] p-3 rounded-large flex justify-between mb-5 w-full md:p-5'>
                        <select name="state" id="state" className='form-control outline-none bg-transparent text-[#CFD8DC] w-full' {...register("state")}>
                            <option className='bg-[#0B0F12]'>State</option>
                            <option className='bg-[#0B0F12]' value="Andhra Pradesh">Andhra Pradesh</option>
                            <option className='bg-[#0B0F12]' value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option className='bg-[#0B0F12]' value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option className='bg-[#0B0F12]' value="Assam">Assam</option>
                            <option className='bg-[#0B0F12]' value="Bihar">Bihar</option>
                            <option className='bg-[#0B0F12]' value="Chandigarh">Chandigarh</option>
                            <option className='bg-[#0B0F12]' value="Chhattisgarh">Chhattisgarh</option>
                            <option className='bg-[#0B0F12]' value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option className='bg-[#0B0F12]' value="Daman and Diu">Daman and Diu</option>
                            <option className='bg-[#0B0F12]' value="Delhi">Delhi</option>
                            <option className='bg-[#0B0F12]' value="Lakshadweep">Lakshadweep</option>
                            <option className='bg-[#0B0F12]' value="Puducherry">Puducherry</option>
                            <option className='bg-[#0B0F12]' value="Goa">Goa</option>
                            <option className='bg-[#0B0F12]' value="Gujarat">Gujarat</option>
                            <option className='bg-[#0B0F12]' value="Haryana">Haryana</option>
                            <option className='bg-[#0B0F12]' value="Himachal Pradesh">Himachal Pradesh</option>
                            <option className='bg-[#0B0F12]' value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option className='bg-[#0B0F12]' value="Jharkhand">Jharkhand</option>
                            <option className='bg-[#0B0F12]' value="Karnataka">Karnataka</option>
                            <option className='bg-[#0B0F12]' value="Kerala">Kerala</option>
                            <option className='bg-[#0B0F12]' value="Madhya Pradesh">Madhya Pradesh</option>
                            <option className='bg-[#0B0F12]' value="Maharashtra">Maharashtra</option>
                            <option className='bg-[#0B0F12]' value="Manipur">Manipur</option>
                            <option className='bg-[#0B0F12]' value="Meghalaya">Meghalaya</option>
                            <option className='bg-[#0B0F12]' value="Mizoram">Mizoram</option>
                            <option className='bg-[#0B0F12]' value="Nagaland">Nagaland</option>
                            <option className='bg-[#0B0F12]' value="Odisha">Odisha</option>
                            <option className='bg-[#0B0F12]' value="Punjab">Punjab</option>
                            <option className='bg-[#0B0F12]' value="Rajasthan">Rajasthan</option>
                            <option className='bg-[#0B0F12]' value="Sikkim">Sikkim</option>
                            <option className='bg-[#0B0F12]' value="Tamil Nadu">Tamil Nadu</option>
                            <option className='bg-[#0B0F12]' value="Telangana">Telangana</option>
                            <option className='bg-[#0B0F12]' value="Tripura">Tripura</option>
                            <option className='bg-[#0B0F12]' value="Uttar Pradesh">Uttar Pradesh</option>
                            <option className='bg-[#0B0F12]' value="Uttarakhand">Uttarakhand</option>
                            <option className='bg-[#0B0F12]' value="West Bengal">West Bengal</option>
                        </select>
                        <p className='text-white'>{errors.state?.message}</p>

                        {/* <div className='relative w-full group'>
                            <input className='bg-transparent outline-none w-full text-white' id="popup_state"></input>
                            <label className=' text-[#CFD8DC] bg-[#0C1012] text-[1.125rem] absolute top-0 left-0 group-focus-within:-top-6 group-focus-within:text-[0.875rem] transition-all md:group-focus-within:-top-8' htmlFor="popup_state" > State</label>
                        </div>
                        <Image src={'/down_arrow.svg'} alt="" height={7} width={12} className=''></Image> */}

                    </div>
                    <div className='border-[#37474F] border-[1px] p-3 rounded-large flex justify-between mb-5 w-full md:p-5'>
                        <select name="state" id="state" className='form-control outline-none bg-transparent text-[#CFD8DC] w-full' {...register("city")}>
                            <option className='bg-[#0B0F12]' >City</option>
                            <option className='bg-[#0B0F12]' value="Abohar">Abohar</option>
                            <option className='bg-[#0B0F12]' value="Ludhiana">	Ludhiana</option>
                            <option className='bg-[#0B0F12]' value="Amritsar">	Amritsar</option>
                            <option className='bg-[#0B0F12]' value="Jalandhar">Jalandhar</option>
                            <option className='bg-[#0B0F12]' value="Patiala">Patiala </option>
                            <option className='bg-[#0B0F12]' value="Chandigarh">Chandigarh</option>
                            <option className='bg-[#0B0F12]' value="	Bathinda">	Bathinda</option>
                            <option className='bg-[#0B0F12]' value="	Mohali">	Mohali</option>
                            <option className='bg-[#0B0F12]' value="Firozpur">Firozpur</option>
                            <option className='bg-[#0B0F12]' value="	Gurdaspur">	Gurdaspur</option>
                            <option className='bg-[#0B0F12]' value="Pathankot">Pathankot</option>
                            <option className='bg-[#0B0F12]' value="Fazilka">Fazilka</option>
                            <option className='bg-[#0B0F12]' value="	Muktsar">	Muktsar</option>
                            <option className='bg-[#0B0F12]' value="	Faridkot">	Faridkot</option>
                        </select>
                        <p className='text-white'>{errors.city?.message}</p>

                        {/* <Image src={'/down_arrow.svg'} alt="" height={7} width={12} className=''></Image> */}
                    </div>
                </div>
                <div className='py-13 border-t-[1px] border-[#37474F]'>
                    <button type="submit" className='inline-block text-white bg-[#4946FF] hover:bg-[#4946ffc7] transition duration-500 py-[0.625rem] px-7 w-full text-center rounded-large whitespace-nowrap font-lato font-semibold text-[1rem] md:py-[0.875rem] md:font-medium md:text-xl'> Apply Now</button>
                </div>
                <p className='font-lato text-[#B0BEC5] text-center text-[0.75rem] md:text-[1rem]'>Ultrices aliquet ipsum aliquet nec. Sit commodo adipiscing ullamcorper molestie aenean cursus bibendum risus nunc.</p>
            </form>
        </>
    )
}

export default FormPopup