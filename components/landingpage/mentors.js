import React from 'react'
import Image from 'next/image'
import SectonHeader from '../snippets/sectonHeader'
import MentorCard from '../snippets/mentoCard'


const mentorCardData =[
    {
        mentorLogo:"/logologo.svg",
        mentorName:'Abhinav Sharma',
        mentorInfo:"Diam auctor tortor ultricies tortor.",
        mentorProfession:"Director of Design 🎨",
        brief:"Sed ac metus blandit ultrices. Rhoncus quis elementum nulla sit diam egestas. Gravida faucibus faucibus amet nunc fringilla sagittis phasellus. Eget massa donec interdum duis morbi pretium.  " ,
        mentorImg:"/mentor1.png", 
        mentorImgMob:"/mentor1.png"
    },
    {
        mentorLogo:"/logologo.svg",
        mentorName:'Baljeet Masih',
        mentorInfo:"Diam auctor tortor ultricies tortor.",
        mentorProfession:"Director of Design 👩🏾‍💻",
        brief:"Sed ac metus blandit ultrices. Rhoncus quis elementum nulla sit diam egestas. Gravida faucibus faucibus amet nunc fringilla sagittis phasellus. Eget massa donec interdum duis morbi pretium.  ",
        mentorImg:"/mentor-photo.png", 
        mentorImgMob:"/mentor-photo.png"
    }
]
const Mentors = ({show,setShow}) => {

    return (
        <section className='bg-[#0C1012] py-10 md:py-16 lg:py-25'>
            <div className='px-5 max-w-[90.625rem] w-full mx-auto'>

            <SectonHeader heading="Mentors"/>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-13 md:my-13 lg:my-15'>
                    {
                        mentorCardData.map((val,index) => {
                            return (
                                <MentorCard  key={index} mentorLogo={val.mentorLogo} mentorImg={val.mentorImg} mentorImgMob={val.mentorImgMob} mentorName={val.mentorName} mentorInfo={val.mentorInfo} mentorProfession={val.mentorProfession} brief={val.brief} />
                            )
                        })
                    }
                </div>
                    <button  className='xsm:hidden md:block text-white bg-[#4946FF] hover:bg-[#4946ff9f] transition duration-500 py-[0.875rem] max-w-[28.125rem] w-full text-center rounded-large m-auto  ' onClick={() => setShow(!show)}> Apply Now</button>
            </div>
        </section>
    )
}

export default Mentors