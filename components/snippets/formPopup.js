import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import states from '../../states.json';
import city from '../../cities.json';

const schema = Yup.object().shape({
    // password: Yup.string().min(8).max(32).required("This Field is Required."),
    course: Yup.string().required("This Field is Required."),
    name: Yup.string().min(8).max(32).required("This Field is Required."),
    email: Yup.string().email().required("This Field is Required."),
    phone: Yup.string().required("This Field is Required."),
    state: Yup.string().required("This Field is Required."),
    city: Yup.string().required("This Field is Required."),
    // select: Yup.string().required()
});


const FormPopup = ({ show, setShow }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const [cities, setCities] = useState([]);
    const [disable, setDisable] = useState(false);

    let States = states.filter((item) => {
        return item.country_code === 'IN'
    })

    const onSubmitHandler = async (data) => {

        try {
            let state = States.filter((item) => {
                return item.state_code === data.state
            })

            data.state = state[0]?.name;

            setDisable(true);
            let result = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users`, {
                method: "POST",
                body: JSON.stringify(data)
            }).then(response => response.json())
            if (result?.status === 'success') {
                toast.success('Your query successfully submited. Thanks!');
                reset();
                setDisable(false);
                setShow(!show)
            }
            else {
                if (result?.status === 'error') {
                    toast.error(result?.message);
                    reset();
                    setDisable(false);
                    setShow(!show)
                }
                else {
                    toast.error('Something Wrong!');
                    reset();
                    setDisable(false);
                    setShow(!show)
                }
            }
        } catch (error) {
            console.log(error);
            setDisable(false);
        }

    };

    const onChangeState = async (name) => {

        let Cities = city.filter((item) => {
            return item.state_code === `${name}` && item.country_code === 'IN'
        })

        setCities(Cities);
    }

    return (
        <>
            <ToastContainer />
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
                    <div className='w-full'>
                        <div className='border-[#37474F] border-[1px] p-3 rounded-large flex justify-between mb-5 w-full md:p-5'>
                            <select name="state" id="state" className='form-control outline-none bg-transparent text-[#CFD8DC] w-full'  {...register("state")} onChange={(e) => onChangeState(e.target.value)}>
                                <option className='bg-[#0B0F12]' value="">State</option>
                                {States.map((item) => {
                                    return <option key={item?.state_code} className='bg-[#0B0F12]' value={item?.state_code}>{item?.name}</option>
                                })}
                            </select>
                        </div>
                        <p className='text-red-700'>{errors.state?.message}</p>
                    </div>
                    <div className='w-full'>
                        <div className='border-[#37474F] border-[1px] p-3 rounded-large flex justify-between mb-5 w-full md:p-5'>
                            <select name="state" id="state" className='form-control outline-none bg-transparent text-[#CFD8DC] w-full' {...register("city")}>
                                <option className='bg-[#0B0F12]' value="">City</option>
                                {cities.map((item) => {
                                    return <option key={item?.name} className='bg-[#0B0F12]' value={item?.name}>	{item?.name}</option>
                                })}
                            </select>
                        </div>
                        <p className='text-red-700'>{errors.city?.message}</p>
                    </div>
                </div>
                <div className='py-13 border-t-[1px] border-[#37474F]'>
                    <button disabled={disable} type="submit" className={`inline-block text-white bg-[#4946FF] hover:bg-[#4946ffc7] transition duration-500 py-[0.625rem] px-7 w-full text-center rounded-large whitespace-nowrap font-lato font-semibold text-[1rem] md:py-[0.875rem] md:font-medium md:text-xl ${disable === true ? 'cursor-not-allowed	opacity-50	' : ''}`}> Apply Now</button>
                </div>
                <p className='font-lato text-[#B0BEC5] text-center text-[0.75rem] md:text-[1rem]'>Ultrices aliquet ipsum aliquet nec. Sit commodo adipiscing ullamcorper molestie aenean cursus bibendum risus nunc.</p>
            </form>
        </>
    )
}

export default FormPopup