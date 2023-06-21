import Image from 'next/image';
import React from 'react'

const DataCard = ({title,content}) => {
  return (
    <>
      <div className='font-lato hover:bg-[#18c9c02e] transition duration-500 isolate overflow-hidden relative before:absolute before:bg-offer md:before:bg-desktop-offer before:-top-[1px] before:-right-[2px] before:w-16 before:h-9 md:before:w-[96px] md:before:h-[66px] after:absolute after:bg-[#094743] after:opacity-10 z-10 after:z-20  after:w-full after:h-full after:left-0 after:top-0 after:rounded-30 md:after:rounded-20 border-[#094743] text-white flex items-start   gap-1.5 md:gap-3 rounded-20 md:rounded-30 border-2 p-4 md:p-13'>
          <div>
            <Image src={'/checkMark_icon.png'} alt="check icon"  width={52}  height={52} className="block md:max-w-[inherit] max-w-none w-[30px] h-[30px] md:h-[52px] md:w-[52px] " />
          </div>
          <div>
              <h3 className='font-bold text-xl  md:text-13xl '>{title}</h3>
              <p className='font-normal text-[0.75rem] mt-4 md:mt-5 md:text-[1.125rem]'>
                 {content}
              </p>
          </div>
      </div>
    </>
  )

}

export default DataCard;