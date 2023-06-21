import Image from 'next/image'
import React from 'react'


const ProgramDetail = () => {
    return (
        <section className='bg-[#0C1012] py-10 md:py-16 lg:py-25'>
            <div className='px-5 max-w-[90.625rem] w-full mx-auto '>
                <Image src={'/spacer.svg'} alt="spacer" width={234} height={32} className="mx-auto block" />
                <div className='px-5 max-w-[90.625rem] w-full mx-auto text-white  mt-3 md:mt-5 '>
                    <p className='max-w-[58.125rem] m-auto text-center font-lato font-medium text-white text-[0.875rem] mb-13 md:mb-15 md:text-[1.25rem] '>Upon completion of one of our courses, you will be equipped with the knowledge and skills needed to start a career in the tech industry. Whether you are interested in UI/UX design or web development, our graduates have gone on to work at top companies and start their own successful businesses.</p>
                </div>
                <div className='grid grid-cols-1 gap-13 mb-[1.875rem] md:grid-cols-2 lg:grid-cols-4 lg:mb-[3.125rem] relative z-10'>
                    <div className='py-[1.875rem]  bg-[#182024] rounded-30 text-center max-w-[20.625] w-full before:hidden lg:before:block lg:py[3.125rem] relative before:absolute before:bg-line_effect before:bg-no-repeat before:w-[25.438rem] before:h-40 before:-bottom-[80%] before:left-0 before:translate-x-[48%] before-z-50'>
                        <p className=' font-lato text-[#18C9BF] text-[1.125rem] mb-[0.625rem] font-medium lg:text-[1.5rem] lg:font-semibold'>New students</p>
                        <p className='font-Oswald  text-[2.25rem] font-semibold text-[#D2F4F2] lg:text-[4.875rem]'>200+</p>
                    </div>
                    <div className='py-[1.875rem]  bg-[#182024] rounded-30 text-center max-w-[20.625] w-full before:hidden lg:before:block lg:py[3.125rem]  relative before:absolute before:bg-line_effect before:bg-no-repeat before:w-44 before:h-16 before:-bottom-[40%] before:left-28 before:-translate-x-[12%] before:rotate-12'>
                        <p className=' font-lato text-[#18C9BF] text-[1.125rem] mb-[0.625rem] font-medium lg:text-[1.5rem] lg:font-semibold'>Courses</p>
                        <p className='font-Oswald  text-[2.25rem] font-semibold text-[#D2F4F2] lg:text-[4.875rem]'>90+</p>
                    </div>
                    <div className='py-[1.875rem]  bg-[#182024] rounded-30 text-center max-w-[20.625] w-full before:hidden lg:before:block lg:py[3.125rem]  relative before:absolute before:bg-line_effect before:bg-no-repeat before:w-32 before:h-16 before:-bottom-[7%] before:left-28 before:translate-x-[30%] before:rotate-[136deg] before:origin-left	'>
                        <p className=' font-lato text-[#18C9BF] text-[1.125rem] mb-[0.625rem] font-medium lg:text-[1.5rem] lg:font-semibold'>Career Opportunity</p>
                        <p className='font-Oswald  text-[2.25rem] font-semibold text-[#D2F4F2] lg:text-[4.875rem]'>500+</p>
                    </div>
                    <div className='py-[1.875rem]  bg-[#182024] rounded-30 text-center max-w-[20.625] w-full before:hidden lg:before:block lg:py[3.125rem]  relative before:absolute before:bg-line_effect before:bg-no-repeat before:w-[25.438rem] before:h-60 before:-bottom-[62%] before:left-0 before:-translate-x-[80%] before:rotate-[150deg]'>
                        <p className=' font-lato text-[#18C9BF] text-[1.125rem] mb-[0.625rem] font-medium lg:text-[1.5rem] lg:font-semibold'>Job Placement</p>
                        <p className='font-Oswald  text-[2.25rem] font-semibold text-[#D2F4F2] lg:text-[4.875rem]'>99%</p>
                    </div>
                </div>
                <Image src={'/logologo.svg'} alt="logo" height={32} width={32} className='shadow-shadowLogo m-auto p-[1.5rem] bg-black rounded-full lg:p-[1.75rem] w-20 lg:w-[7.5rem] relative z-10' />
                <div className='relative after:absolute after:max-w-[1410px] after:w-full after:h-[160px] after:-top-[50%] after:left-[0%] after:-translate-y-[110%]  after:bg-gradient-to-t after:from-[#18C9BF] after:to-[#4946FF] opacity-60 after:blur-[200px]'>
                </div>
            </div>
        </section>
    )
}

export default ProgramDetail

