import React from 'react'

const GeneratorsMethod = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Generator Methods</h3>
                    <div className=' border border-[#37474F] p-5 mb-8'>
                        <div className='overflow-x-auto'>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words !font-extrabold'>Method</li>
                                <li className='body_text mb-6 break-words !font-extrabold'>Description</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>next()</li>
                                <li className='body_text mb-6 break-words'>Returns a value of yield</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>return()</li>
                                <li className='body_text mb-6 break-words'>Returns a value and terminates the generator</li>
                            </ul>
                            <ul className='pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text break-words '>throw()</li>
                                <li className='body_text break-words'>Throws an error and terminates the generator</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript return Vs yield Keyword</h3>
                    <div className=' border border-[#37474F] p-5 mb-8'>
                        <div className='overflow-x-auto'>
                            <ul className='border_bottom pt-5 grid grid-cols-2 gap-5 items-center '>
                                <li className='body_text mb-6 break-words !font-extrabold'>return Keyword</li>
                                <li className='body_text mb-6 break-words !font-extrabold'>yield Keyword</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid-cols-2 gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>Returns the value and terminates the function.</li>
                                <li className='body_text mb-6 break-words'>Returns the value and halts the function but does not terminate the function.</li>
                            </ul>
                            <ul className='pt-5 grid grid-cols-2 gap-5 items-center'>
                                <li className='body_text break-words '>Available in both the normal functions and generator functions.</li>
                                <li className='body_text break-words'>Available only in generator functions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GeneratorsMethod