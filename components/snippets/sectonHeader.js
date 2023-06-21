import Image from 'next/image'
import React from 'react'


const SectonHeader = ({heading,subHeading}) => {
  return (
    <>
        <div>
            <div className='text-center'>
                <Image src={'/spacer.svg'} alt="spacer"  width={234}  height={32} className="mx-auto block" />       
                
                { heading && 
                <h2 className='font-Oswald text-white text-center font-semibold xsm:pt-3 xsm:leading-44 xsm:text-3xl smd:text-4xl md:text-12xl md:pt-4 md:leading-86 lg:text-6xl lg:pt-5 '>{heading}</h2>
                }

                { subHeading && 
                <h3 className='font-lato text-[0.875rem] mb-13 mt-3 text-center font-medium md:mb-11 md:mt-4 md:text-xl lg:mt-5 lg:mb-15 text-white'>{subHeading}</h3>
                }
            </div>
        </div>
    </>
  )
}
export default SectonHeader;