import TopicsBar from '@/components/snippets/topicsBar'
import React, { useState } from 'react'
import Image from 'next/image'
import menuBtn from '/public/menu.svg'
import closeBtn from '/public/Close.svg'
import Introduction from '@/components/forOf/introduction'
import ForOfLoop from '@/components/forOf/forOfLoop'
import ForOfwithArray from '@/components/forOf/forOfwithArray'
import ForOfWithString from '@/components/forOf/forOfWithString'
import ForOfWithSets from '@/components/forOf/forOfWithSets'
import ForOfWithMaps from '@/components/forOf/forOfWithMaps'
import UserDefinedIterates from '@/components/forOf/userDefinedIterates'
import ForOfWithGenerators from '@/components/forOf/forOfWithGenerators'
import ForOfVsForIn from '@/components/forOf/forOfVsForIn'

const ForOf = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <main className='bg-dark'>
                <div className='container'>
                    {/* // <Image src={menuBtn} width={30} height={30} alt='Menu ICon' className='pb-4 lg:hidden' onClick={() => { menu === false ? setMenu(true) : setMenu(false) }} /> */}
                    <div className='lg:flex lg:gap-[40px]'>
                        <div className={`max-w-[290px] w-full p-5 border-[1px] border-[#37474F] rounded-lg fixed z-10 bg-dark top-[154px] overflow-auto h-[100vh] pb-[200px] transition-500 lg:relative lg:left-auto  lg:top-auto lg:h-fit lg:pb-0 lg2:max-w-[330px]  ${menu === true ? "left-0" : "left-[-100%]"}`}>
                            <div className='flex justify-end'>
                                <Image src={closeBtn} width={30} height={30} alt='Menu ICon' className=' lg:hidden' onClick={() => { menu === false ? setMenu(true) : setMenu(false) }} />
                            </div>
                            <TopicsBar />
                        </div>
                        <div className='w-full'>
                            <Introduction />
                            <ForOfLoop />
                            <ForOfwithArray />
                            <ForOfWithString />
                            <ForOfWithSets/>
                            <ForOfWithMaps/>
                            <UserDefinedIterates/>
                            <ForOfWithGenerators/>
                            <ForOfVsForIn/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ForOf