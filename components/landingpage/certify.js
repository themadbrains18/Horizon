import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SectonHeader from '../snippets/sectonHeader'

const Certify = () => {
    return (
        <section className='bg-[#0C1012] text-white bg-certificateBg bg-no-repeat  bg-bottom py-10 md:py-16 lg:py-25'>
            <div className='px-5 max-w-[90.625rem] w-full mx-auto'>
                <div className='max-w-[46.25rem] mx-auto'>
                    <SectonHeader heading="Certify Your Learning" subHeading="After completing your course, you'll receive a certificate of completion that you can share with potential employers or clients to showcase your skills." />
                </div>
                
                <Image src={'/Certificate-title.svg'} alt="certificate title" height={40} width={240} className='mx-auto h-10'></Image>
                <div className=' border-b-[1px] border-b-[#FFDB78] mb-13 w-60 m-auto relative before:absolute before:w-[7px] before:h-[7px] before:rounded-full before:bg-[#FFDB78] before:-top-[0%] before:left-0  before:-translate-y-[44%] after:absolute after:w-[7px] after:h-[7px] after:rounded-full after:bg-[#FFDB78] after:-top-[0%] after:right-0  after:-translate-y-[44%]'>
                </div>
                <div className='lg:flex gap-7'>
                    <Image src={'/certificate.png'} alt="certificate" height={568} width={810} className='mb-5 mx-auto w-full lg:mb-0'></Image>
                    <div className=''>
                        <div className='flex gap-2.5 bg-[#182024] rounded-20 p-4 mb-5'>
                            <span className='p-1 rounded-full bg-[#0E7972] font-lato font-bold text-[1.25rem] self-start'>01.</span>
                            <div>
                                <h3 className='font-lato font-bold text-[1.25rem] mb-4 lg:text-13xl'> Official and verified:</h3>
                                <p className='font-lato text-[#CFD8DC] text-[0.75rem]  md:text-[0.938rem] lg:text-[1.125rem]'>Sed ac metus blandit ultrices. Rhoncus quis elementum nulla sit diam egestas. Gravida faucibus faucibus amet nunc fringilla sagittis phasellus. Eget massa donec interdum duis morbi pretium. </p>
                            </div>
                        </div>
                        <div className='flex gap-2.5 bg-[#182024] rounded-20 p-4 mb-5 lg:mb-20'>
                            <span className='p-1 rounded-full bg-[#0E7972] font-lato font-bold text-[1.25rem] self-start'>01.</span>
                            <div>
                                <h3 className='font-lato font-bold text-[1.25rem] mb-4 lg:text-13xl'> Official and verified:</h3>
                                <p className='font-lato text-[#CFD8DC] text-[0.75rem]  md:text-[0.938rem] lg:text-[1.125rem]'>Sed ac metus blandit ultrices. Rhoncus quis elementum nulla sit diam egestas. Gravida faucibus faucibus amet nunc fringilla sagittis phasellus. Eget massa donec interdum duis morbi pretium. </p>
                            </div>
                        </div>
                        <Link href="/" className='block text-white font-lato font-medium text-[1.125rem] bg-[#18C9BF] hover:bg-[#18c9c0c4] transition duration-500 py-[0.625rem] w-full text-center rounded-large m-auto lg:py-[0.875rem] lg:font-semibold lg:text-[1.25rem]'> Certificate Details</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certify;