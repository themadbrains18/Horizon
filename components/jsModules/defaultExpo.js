import React from 'react'

const DefaultExpo = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <h2 className='sec_heading mt-10 mb-6'>Default Export</h2>
                <p className='main_text mb-4'>You can also perform default export of the module. For example,</p>
                <p className='main_text mb-4'>In the file <span className='!font-extrabold'>greet.js:</span></p>\
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                            // default export <br />
                        export default function greet(name) &#123;<br />
                        return `Hello $&#123;name&#125;`;<br />
                        &#125;<br /><br />

                        export const age = 23;<br />
                    </p>
                </div>
                <p className='main_text mb-4'>Then when importing, you can use:</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>import random_name from './greet.js';</p>
                </div>
                <p className='main_text mb-4'>While performing default export,</p>
                <ul className=''>
                    <li className='main_text mb-3 list-disc' >random_name is imported from greet.js. Since, random_name is not in greet.js, the default export (greet() in this case) is exported as random_name.</li>
                    <li className='main_text mb-3 list-disc'>You can directly use the default export without enclosing curly brackets &#123; &#125;.</li>
                </ul>
                <div className='bg-light-dark mb-4 p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>A file can contain multiple exports. However, you can only have one default export in a file.</p>
                </div>
            </section>
        </>
    )
}

export default DefaultExpo