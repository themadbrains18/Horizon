import Link from 'next/link'
import React from 'react'
import { useState } from "react";
import Image from 'next/image'
// import FormPopup from '../snippets/formPopup';

const Hero = ({show,setShow}) => {
    // const [show, setShow] = useState(false);

    return (
        <>
            <section className='hero_sec bg-[#0C1012] relative z-0  md:py-10'>
                <div className='px-5 max-w-[90.625rem] w-full mx-auto'>
                    <div className='hero_content md:grid grid-cols-2 items-center'>
                        <div className='hero_info mb-12'>
                            <h1 className='text-[#B0BEC5] font-normal font-Oswald text-[2.25rem] leading-[3.375rem] lg:text-[3.875rem] lg:leading-[5.375rem] xl:text-[4.875rem] tracking-[0.01em] xl:leading-[7.25rem]'>A Place to Learn</h1>
                            <h1 className='relative text-[1.875rem] font-semibold text-white font-Oswald lg:text-[2.625rem]  xl:text-[3.625rem] tracking-[0.01em] '>Web <span className=' inline-block border-b-[1px] border-[#18C9BF]'> Design & Development</span></h1>
                            <div className='relative after:absolute after:w-[11.063rem] after:h-[11.063rem] after:top-0 after:left-0 after:bg-gradient-to-r after:from-[#18C9BF] after:to-[#4946FF] after:blur-[125px]'>
                            </div>
                            <span className='my-[1.25rem] text-[#18C9BF] font-semibold text-[1.875rem] font-Oswald lg:text-[2.625rem] xl:text-[3.625rem]'>In 25 Weeks</span>
                            <p className='text-[#CFD8DC] font-medium text-[1rem] font-lato mb-5 md:mb-10 lg:text-[1.125rem]  xl:text-[1.25rem]'>Integer dictumst non vulputate tristique praesent. In scelerisque sollicitudin est dui posuere.</p>
                    <button className='xsm:hidden md:block text-white bg-[#4946FF] hover:bg-[#4946ff9f] transition duration-500 py-[0.875rem] max-w-[35.625rem] w-full text-center rounded-large mb-10' onClick={() => setShow(!show)} > Apply Now</button>
                            <div className='pl-1 hidden md:flex'>
                                <Image src={'/hero-icon1.svg'} alt="Icon" height={22} width={22} className='p-1 bg-[#182024] rounded-full -ml-2'></Image>
                                <Image src={'/hero-icon2.svg'} alt="Icon" height={22} width={22} className='p-1 bg-[#182024] rounded-full -ml-2'></Image>
                                <Image src={'/hero-icon3.svg'} alt="Icon" height={22} width={22} className='p-1 bg-[#182024] rounded-full -ml-2'></Image>
                                <Image src={'/hero-icon4.svg'} alt="Icon" height={22} width={22} className='p-1 bg-[#182024] rounded-full -ml-2'></Image>
                                <Image src={'/plus-icon.svg'} alt="Icon" height={22} width={22} className='p-1 bg-[#182024] rounded-full -ml-2'></Image>
                            </div>
                        </div>

                        <div className='relative before:absolute before:h-[13.438rem] before:w-[13.438rem] before:bg-[#182024] before:right-[50%] before:translate-x-[74%] before:-top-[2.375rem] before:rounded-full before:z-[-1] md:justify-self-end md:self-end lg:before:h-[20.875rem] lg:before:w-[20.875rem] xl:before:h-[26.875rem] xl:before:w-[26.875rem]'>
                            <Image src={'/girl.png'} alt="Hero Image" height={353} width={335} className=' mb-[-0.063rem] mx-auto lg:hidden'></Image>
                            <Image src={'/hero-image.png'} alt="HeroImage" height={718} width={754} className='mb-[-0.063rem] mx-auto hidden lg:block'></Image>
                        </div>
                        {/* </div> */}
                    </div>

                    
                    {/* <FormPopup  show={show} setShow={setShow}  /> */}
                   

                </div>
                <div className='bg-[#094743] p-5 flex justify-between items-center md:hidden'>
                    <p className='text-white font-lato text-[0.875rem] '> Integer dictumst non vulputate tristique.</p>
                    <button className='inline-block text-white bg-[#4946FF] py-[0.625rem] hover:bg-[#4946ff9f] transition duration-500 px-7 text-center rounded-large whitespace-nowrap' onClick={() => setShow(!show)}> Apply Now</button>
                </div>


                <div className='hidden md:block border-t-[2px] border-t-[#607D8B] border-b-[2px] border-b-[#fff] border-dashed -rotate-2 py-2 w-[calc(100%-1px)] m-auto'>
                    <div className='xsm:hidden md:flex bg-[#18C9BF] overflow-hidden w-full'>
                        <div className=' md:flex justify-around  animate-barMove w-full '>
                            <p className=' md:text-[1rem]   py-1 lg:text-[1.25rem] xl:text-[1.875rem] text-[#094743] font-bold	font-lato whitespace-nowrap'>Horizon: Learn Skills in <span className='text-[#000]'>25 Weeks</span></p>
                            <p className='md:text-[1rem]   py-1 lg:text-[1.25rem] xl:text-[1.875rem] text-[#094743] font-bold font-lato whitespace-nowrap'>Horizon: Learn Skills in <span className='text-[#000]'>25 Weeks</span></p>
                            <p className='md:text-[1rem]   py-1 lg:text-[1.25rem] xl:text-[1.875rem] text-[#094743] font-bold font-lato whitespace-nowrap'>Horizon: Learn Skills in <span className='text-[#000]'>25 Weeks</span></p>
                        </div>
                        
                        
                    </div>
                </div>
               

            </section>

        </>
    )
}

export default Hero