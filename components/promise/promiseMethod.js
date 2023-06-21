import React from 'react'

const PromiseMethod = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>JavaScript Promise Methods</h2>
                    <p className='main_text mb-4'>There are various methods available to the Promise object.</p>


                    <div className=' border border-[#37474F] p-5 mb-8'>
                    <div className='overflow-x-auto'>
                        <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                            <li className='body_text mb-6 break-words !font-extrabold'>Method</li>
                            <li className='body_text mb-6 break-words !font-extrabold'>Description</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                            <li className='body_text mb-6 break-words '>all(iterable)</li>
                            <li className='body_text mb-6 break-words'>Waits for all promises to be resolved or any one to be rejected</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                            <li className='body_text mb-6 break-words '>allSettled(iterable)</li>
                            <li className='body_text mb-6 break-words'>Waits until all promises are either resolved or rejected</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                            <li className='body_text mb-6 break-words '>any(iterable)	</li>
                            <li className='body_text mb-6 break-words'>Returns the promise value as soon as any one of the promises is fulfilled</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                            <li className='body_text mb-6 break-words '>race(iterable)</li>
                            <li className='body_text mb-6 break-words'>Wait until any of the promises is resolved or rejected</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                            <li className='body_text mb-6 break-words '>reject(reason)</li>
                            <li className='body_text mb-6 break-words'>Returns a new Promise object that is rejected for the given reason</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                            <li className='body_text mb-6 break-words '>resolve(value)</li>
                            <li className='body_text mb-6 break-words'>Returns a new Promise object that is resolved with the given value</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                            <li className='body_text mb-6 break-words '>catch()</li>
                            <li className='body_text mb-6 break-words'>Appends the rejection handler callback</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                            <li className='body_text mb-6 break-words '>then()</li>
                            <li className='body_text mb-6 break-words'>Appends the resolved handler callback</li>
                        </ul>
                        <ul className='pt-5 grid grid_30p_1fr gap-5 items-center'>
                            <li className='body_text break-words '>finally()</li>
                            <li className='body_text break-words'>Appends a handler to the promise</li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default PromiseMethod