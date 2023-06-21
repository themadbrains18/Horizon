import React from 'react'

const ExportMultipleObjects = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>

                <h2 className='sec_heading mt-10 mb-6'>Export Multiple Objects</h2>
                <p className='main_text mb-4'>It is also possible to export multiple objects from a module. For example,</p>
                <p className='main_text mb-4'>In the file <span className='!font-extrabold'>module.js</span></p>

                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        // exporting the variable <br />
                        export const name = 'JavaScript Program';<br /><br />

                        // exporting the function<br />
                        export function sum(x, y) &#123;<br />
                        return x + y;<br />
                        &#125;<br />
                    </p>
                </div>
                <p className='main_text mb-4'>In main file,</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        import  &#123; name, sum  &#125; from './module.js';<br /><br />

                        console.log(name);<br />
                        let add = sum(4, 9);<br />
                        console.log(add); // 13<br />
                    </p>
                </div>
                <p className='main_text mb-4'>Here,</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        import &#123; name, sum &#125; from './module.js';
                    </p>
                </div>
                <p className='main_text mb-4'>This imports both the <span className='!font-extrabold'>name</span> variable and the <span className='!font-extrabold'>sum()</span> function from the <span className='!font-extrabold'>module.js</span>   file.</p>

            </section>
        </>
    )
}

export default ExportMultipleObjects