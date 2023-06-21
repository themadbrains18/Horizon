import React from 'react'
import Image from 'next/image'
import SectonHeader from '../snippets/sectonHeader'
import DataCard from '../snippets/dataCard'


const cardData = [
  {
    heading : "Students",
    brief : "Our courses are designed for a wide range of individuals with different backgrounds and experience levels. If you're a student looking to gain practical skills for your future career, our programs are perfect for you."
  },
  {
    heading : "For Working Professionals",
    brief : "If you are a working professional, our courses will provide you with the necessary skills to stay current with the latest industry trends and advancements, and help you to increase your earning potential."
  },
  {
    heading : "Someone Who's Just Looking to Learn New.",
    brief : "Our courses are a great way to gain new skills and knowledge. You'll have the opportunity to learn about new technologies and methodologies, and develop a better understanding of the tech industry."
  },
  {
    heading : "Anyone Who is Interested in Designing",
    brief : "You'll learn about user research, prototyping, and design principles, as well as how to use industry-standard design tools."
  },
  {
    heading : "Who is Interested in Building Websites & etc.",
    brief : "You'll learn about web development basics, such as HTML, CSS, JavaScript, and responsive design, as well as more advanced topics like web development frameworks and libraries."
  },
  {
    heading : "Beginner or Have Some Experience",
    brief : "Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry."
  }
]

const ProgramSection = () => {
  return (
    <>
      <section className= "relative  py-10 text-white bg-[#0C1012] md:py-16 before:absolute before:w-[40.8rem] before:h-[33.8rem] before:content before:bg-effect2 before:left-[-34.5rem] md:before:left-[-7.5rem] before:top-[-13.6rem]  md:before:top-[-7rem] before:rotate-[-27.78deg] before:bg-no-repeat lg:py-25" >
          <div className='px-5 max-w-[90.625rem] w-full mx-auto '>
              <SectonHeader heading="Who is Program for" subHeading="Anyone who is interested to learn about: Design & Development"/> 
              <div className='grid gap-5 col-auto lg:grid-cols-2 overflow-hidden '>
                {
                  cardData.map((val,index) => ( 
                     (
                        <DataCard  key={index} title={val.heading} content={val.brief}  />
                    )))
                }
              </div>
          </div>
      </section>
    </>
  )
}

export default ProgramSection;