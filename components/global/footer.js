import React from 'react'
import Image from 'next/image'


const Footer = () => {
    return (
        <footer className=' bg-[#0C1012] text-center  text-white bg-[url("/effect.svg")] bg-no-repeat py-10 md:py-16 lg:py-25'>
            <div className='px-5 max-w-[90.625rem] w-full mx-auto'>
                <Image src={'/Horizon-Logo.png'} className="mx-auto" alt="logo" height={32} width={140} />  
                <p className="text-[0.75rem] font-lato mt-5 mb-13 md:text-[1rem] md:max-w-[58.125rem] mx-auto">
                    Thank you for considering Tech Academy. We are here to help you succeed and look forward to supporting you on your journey. Contact us with any questions or to enroll today!
                </p>

                <form className="border-2 border-[#18C9BF] rounded-large mb-13 p-4 flex items-center justify-between smd:max-w-md m-auto">
                    <input type="email" placeholder="Enter your email" className="bg-transparent outline-0 text-white" />
                    <button type='submit'><Image src={'/mail-btn.svg'}  alt="submit button" height={20} width={20} /></button>
                </form>

                <span className="text-[#18C9BF] text-xl mb-5 block font-lato font-medium ">Privacy Policy</span>
                <p className="text-base text-white font-lato">©️ 2023 Horizon. All rights reserved.</p>
            </div>
            {/* <span className="after:absolute bottom-0 after:inline-block after:w-8 after:h-11 after:bg-[url('/effect.svg')] relative" ></span> */}
          
        </footer>
    )
}

export default Footer