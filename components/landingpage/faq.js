import React from 'react'
import Accordion from '../snippets/accordian'
import SectonHeader from '../snippets/sectonHeader'
import Link from 'next/link'

const accordionData = [
  {
    title: 'How long are the courses? ',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
  },
  {
    title: 'Are there any prerequisites?',
    content: `No, our courses are designed for beginners and don't require any prior knowledge or experience.`
  },
  {
    title: 'Do you offer any support or guidance?',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
  },
  {
    title: 'Quam sed pellentesque urna purus morbi.',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
  },
  {
    title: 'Urna augue iaculis a aliquam lacus massa eu elementum.',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
  },
  {
    title: 'Nunc at ullamcorper varius orci lectus.',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.Whether you're a beginner or have some experience, our courses are tailored to help you achieve your goals and advance your career in the tech industry.`
  }
];


export const Faq = ({ setShow, show }) => {
  return (
    <>
      <section className='bg-[#0C1012] font-lato py-10 md:py-16 lg:py-25 '>
        <div className='px-5 max-w-[73.125rem] w-full mx-auto'>
          <SectonHeader heading="Frequently Asked Questions" subHeading="Tellus amet neque diam. Interdum sit vras morni mi porta amet egestas lacinia. Diverra posuere Volor in arcu nisi arcu." />
          <div className='bg-faqEffect bg-no-repeat bg-center bg-[length:650px_540px]'>
            <div className="accordion">
              {
                accordionData.map(({ title, content }, index) => {
                  return (
                    <Accordion key={index} title={title} content={content} lastChild={accordionData.length - 1 === index ? true : false} />
                  )
                })
              }
            </div>
            <button onClick={() => setShow(!show)} className=' hover:bg-[#4946ff9f] transition duration-500 mt-[5.5rem] xsm:hidden md:block text-white bg-[#4946FF] py-[0.875rem] max-w-[28.125rem] w-full text-center rounded-large m-auto  ' > Apply Now</button>
          </div>
        </div>
      </section>
    </>
  )
}
