import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MentorCard = ({ mentorLogo, mentorImgMob, mentorImg, mentorName, mentorInfo, mentorProfession, brief }) => {
  return (
    <>
      <div className='bg-[#182024] p-4 rounded-20 border-[#094743] border-[2px] lg:p-[1.875rem]'>
        <div className='flex gap-[10px] justify-between mb-5 items-center md:mb-[3.125rem]'>
          <div>
            <Image src={mentorLogo} alt="logo" height={24} width={24} />
            <h3 className='font-lato text-white text-[1.25rem] font-bold my-[0.75rem] lg:text-[1.5rem]'>{mentorName}</h3>
            <p className='font-lato text-[#B0BEC5] text-[0.875rem] pb-5 border-b-[1px] border-[#37474F] md:pb-7 md:text-[1rem] lg:pb-10 lg:text-[1.125rem]'>{mentorInfo}</p>
            <span className='inline-block font-lato text-[#D2F4F2]  py-1 px-[0.625rem] bg-[#37474F] rounded-[1.438rem] text-center mt-5 md:text-[0.75rem] md:mt-7 md:px-[0.813rem] md:py-[0.375rem] lg:mt-10 lg:px-[1.463rem] lg:py-[0.344rem] xl:text-[1.5rem]'>{mentorProfession}</span>
          </div>
          <div className='relative after:absolute after:bg-mentor_name after:w-15 after:h-15 after:bg-[length:60px_60px] after:top-0 after:right-0'>
            <Image src={mentorImgMob} alt="Mentor image" height={194} width={104} className='xsm:object-contain md:hidden' />
            <Image src={mentorImg} alt="Mentor image" height={397} width={260} className='xsm:hidden md:block object-contain' />
          </div>
        </div>
        <p className='font-lato text-[#CFD8DC] text-[0.75rem]  md:text-[0.938rem] lg:text-[1.125rem]'>{brief}</p>
      </div>
    </>
  )

}

export default MentorCard;