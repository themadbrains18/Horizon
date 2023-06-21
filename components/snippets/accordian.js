import React, { useState, useRef } from 'react';



const Accordion = ({ title, content,lastChild }) => {
  
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null)
  const rotate = useRef(null)

  const handleClick = () =>{
    let height=ref.current.scrollHeight;
        
    if(ref.current.getAttribute('style')){
        ref.current.removeAttribute('style')
        rotate.current.style.transform= "rotate(0deg)"
        setIsActive(false)

    }else{

        ref.current.setAttribute("style",`height:  ${height}px`);
        rotate.current.style.transform= "rotate(90deg)"
        setIsActive(true)
  }
}

  return (
    <div className={`accordion-item font-lato bg-[#182024] rounded-20   ${lastChild ? "": 'mb-5 md:mb-10'}  border transition-all duration-300 ${!isActive ?  'border-[#37474F]' : 'border-[#18C9BF]'}`}>
      <div className="accordion-title bg-[#37474F] cursor-pointer  pt-[14px] pb-5  md:py-5 pl-[48px] pr-[25px] md:pl-15 md:pr-13 rounded-[19px] flex gap-1 items-center justify-between" onClick={() => handleClick()}>
        <h2 className=' text-white text-base smd:text-xl font-medium list-item'>{title}</h2>
        <span className='block'  >
            <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={rotate} className=" ease-linear duration-300">
                <path d="M2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18C5.59 18 2 14.41 2 10ZM0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10ZM10 9H7C6.45 9 6 9.45 6 10C6 10.55 6.45 11 7 11H10V12.79C10 13.24 10.54 13.46 10.85 13.14L13.64 10.35C13.84 10.15 13.84 9.84 13.64 9.64L10.85 6.85C10.54 6.54 10 6.76 10 7.21V9Z" fill="#18C9BF"/>
            </svg>
        </span>
      </div>
      
      <div className='h-0 ease-linear duration-300 overflow-hidden' ref={ref}>
        <div className="accordion-content text-[0.875rem]  text-white p-5 md:py-13 md:px-10 md:text-[1.125rem]" >{content}</div>
      </div>
    </div>
  );    
};

export default Accordion;