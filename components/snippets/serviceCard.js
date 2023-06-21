import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ServiceCard = ({secImg,title,heading,content,type}) => {
  return (
    <>
        <div className={`bg-[#182024] border border-[#182024] p-4 rounded-20 lg:p-[1.875rem] hover:bg-[#18202400] hover:border hover:border-[#18C9BF] transition duration-500`}>
            <Image src={secImg} className="mx-auto border-8 rounded-20 border-[#094743] w-full" alt="Card Image" height={124} width={287} />
            <span className='block font-lato text-[#18C9BF] font-medium my-4 lg:my-[1.875rem] lg:text-[1.25rem] lg:font-bold'>{title}</span>
            <h3 className='font-lato text-white text-[1.25rem] font-bold mb-[0.75rem] lg:text-[1.5rem] lg:mb-[1.25rem]'>{heading}</h3>
            <p className='font-lato text-[#CFD8DC] text-[0.75rem] mb-[4px] lg:text-[1rem]'>{content}</p>
            <Link href="/" className='font-lato font-medium text-[#676989] inline-flex items-baseline gap-2'>View more
                <Image src={'/card-btn-arrow.svg'} alt="Button" height={8} width={5} />
            </Link>
        </div>
    </>      
  )

}

export default ServiceCard;