import React from 'react'

const VarVsLet = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom '>
                <h1 className='large_heading mb-6'>JavaScript var Vs let</h1>
                <p className='main_text mb-6'>Both var and let are used to declare variables. However, there are some differences between them.</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 grid grid-cols-2 '>
                    <p className='medium_text pb-4 border_bottom'>var</p>
                    <p className='medium_text pb-4 border_bottom'>let</p>

                    <p className='medium_text py-4'>var is used in the older versions of JavaScript</p>
                    <p className='medium_text py-4'>let is the new way of declaring variables starting ES6 (ES2015).</p>

                    <p className='medium_text pb-4'>var is function scoped (will be discussed in later tutorials).</p>
                    <p className='medium_text pb-4'>let is block scoped (will be discussed in later tutorials).</p>

                    <p className='medium_text pb-4'>For example, var x;</p>
                    <p className='medium_text pb-4'>For example, let y;</p>
                </div>
              
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>It is recommended we use let instead of var. However, there are a few browsers that do not support let. Visit JavaScript let browser support to learn more.</p>
                </div>
            </section>
        </>
    )
}

export default VarVsLet