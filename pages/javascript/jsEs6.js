import TopicsBar from '@/components/snippets/topicsBar'
import React, { useState } from 'react'
import Image from 'next/image'
import menuBtn from '/public/menu.svg'
import closeBtn from '/public/Close.svg'
import Introduction from '@/components/jsEs6/introduction'
import ArrowFunc from '@/components/jsEs6/arrowFunc'
import JsClasses from '@/components/jsEs6/jsClasses'
import DefaultParameter from '@/components/jsEs6/defaultParameter'
import TemplateLiterals from '@/components/jsEs6/templateLiterals'
import Destructuring from '@/components/jsEs6/destructuring'
import ImpoExpo from '@/components/jsEs6/impoExpo'
import Promises from '@/components/jsEs6/promises'
import SpreadOp from '@/components/jsEs6/spreadOp'

const JsEs6 = () => {
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
                            <Introduction/>
                            <ArrowFunc/>
                            <JsClasses/>
                            <DefaultParameter/>
                            <TemplateLiterals/>
                            <Destructuring/>
                            <ImpoExpo/>
                            <Promises/>
                            <SpreadOp/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default JsEs6