import Image from 'next/image'
import React, { useState } from 'react'
import SectonHeader from '../snippets/sectonHeader'
import ServiceCard from '../snippets/serviceCard'

const serviceCardData = [
  {
    sectionImage: "/card-img.png",
    title: "Week 1-4",
    heading: "Fundamentals of Web Development",
    content: "Tellus consequat maecenas praesent arcu libero et egestas sed commodo. ",
    type: 1
  },
  {
    sectionImage: "/card-img2.png",
    title: "Week 4-8",
    heading: "Projects You Will be Doing",
    content: "Tellus consequat maecenas praesent arcu libero et egestas sed commodo.  ",
    type: 0
  },
  {
    sectionImage: "/card-img3.png",
    title: "Week 8-12",
    heading: "UI Libraries, Reusable Components",
    content: "Tellus consequat maecenas praesent arcu libero et egestas sed commodo. ",
    type: 1
  },
  {
    sectionImage: "/card-img4.png",
    title: "Week 12-16",
    heading: "All Languages CSS, Python, Java ect.",
    content: "Tellus consequat maecenas praesent arcu libero et egestas sed commodo. ",
    type: 1
  },
  {
    sectionImage: "/card-img5.png",
    title: "Week 16-20",
    heading: "System Design Basics",
    content: "Tellus consequat maecenas praesent arcu libero et egestas sed commodo. ",
    type: 0
  },
  {
    sectionImage: "/card-img6.png",
    title: "Week 20-25",
    heading: "Project Management interview Questions",
    content: "Tellus consequat maecenas praesent arcu libero et.. ",
    type: 0
  },
]
const ProgramPeriod = () => {

  const [filter, setFilter] = useState(0)
  const [activeFilter, setActiveFilter] = useState(0)

  const setActive = (index) => {
    setActiveFilter(index)
    setFilter(index)
  }




  return (
    <section className='bg-[#0C1012] py-10 md:py-16 lg:py-25'>
      <div className='px-5 max-w-[90.625rem] w-full mx-auto'>

        <SectonHeader heading="What Will You Learn In 25 Weeks" />

        <div className='bg-[#182024] p-[0.625rem] flex justify-center gap-[0.625rem] my-[1.875rem] rounded-[0.875rem] m-auto xsm:max-w-[22.938rem] md:max-w-[28.125rem] lg:my-15'>
          <button className={`text-white  transition duration-500 py-[0.625rem] px-[1.563rem] rounded-large whitespace-nowrap xsm:px-[1.25rem] lg:text-[1.25rem] ${activeFilter == 0 ? 'bg-[#18C9BF]' : ''} ${activeFilter == 0 ? ' hover:bg-[#18c9c088]' : ''} `} onClick={() => setActive(0)}>Designing 🎨</button>
          <button className={`text-white py-[0.625rem] transition duration-500 px-[1.563rem]  rounded-large whitespace-nowrap xsm:px-[1.25rem] lg:text-[1.25rem] ${activeFilter == 1 ? 'bg-[#18C9BF]' : ''} ${activeFilter == 1 ? ' hover:bg-[#18c9c088]' : ''}`} onClick={() => setActive(1)}>Development 👩🏾‍💻</button>
        </div>

        <div className='relative  overflow-hidden m-auto mb-[1.875rem] md:max-w-[500px] lg:mb-15  max-w-[600px]'>
          <Image src={'/lines.svg'} alt="lines" height={0} width={690} className='py-5' />
          <div className='flex items-center justify-center absolute top-[20%] left-0 gap-10 md:gap-15 lg:gap-20 overflow-hidden m-auto animate-moving'>
            <Image src={'/periodIcon1.svg'} alt="icon" height={30} width={30} />
            <Image src={'/periodIcon2.svg'} alt="icon" height={30} width={30} />
            <Image src={'/periodIcon3.svg'} alt="icon" height={30} width={30} />
            <Image src={'/periodIcon4.svg'} alt="icon" height={30} width={30} />
            <Image src={'/periodIcon3.svg'} alt="icon" height={30} width={30} />
          </div>
        </div>


        <div className='xsm:grid grid-cols-1  md:grid-cols-2 gap-7 lg:grid-cols-3'>
          {
            serviceCardData.filter(course => course.type == filter).map((val, index) => {
              return (
                <ServiceCard  key={index} secImg={val.sectionImage} title={val.title} heading={val.heading} content={val.content} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ProgramPeriod