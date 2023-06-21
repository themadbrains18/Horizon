import React from 'react'

const ModuleUseStrict = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h2 className='sec_heading mt-10 mb-6'>Modules Always use Strict Mode</h2>
                    <p className='main_text mb-4'>By default, modules are in strict mode. For example,</p>
                    <div className='bg-light-dark p-3 mb-2'>
                        <p className='medium_text'>
               // in greet.js <br />
                            function greet() &#123;<br />
                        // strict by default<br />
                            &#125;<br /><br />

                            export greet();<br />
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='sec_heading mt-10 mb-6'>Benefit of Using Module</h2>
                    <ul className=''>
                        <li className='main_text mb-3 list-disc' >The code base is easier to maintain because different code having different functionalities are in different files.</li>
                        <li className='main_text mb-3 list-disc'>Makes code reusable. You can define a module and use it numerous times as per your needs.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ModuleUseStrict