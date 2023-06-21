import React from 'react'

const MapVsObj = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>JavaScript Map vs Object</h3>
                    <div className=' border border-[#37474F] p-5 mb-8 overflow-auto'>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5  '>
                            <li className='body_text mb-6 !font-extrabold'>Map</li>
                            <li className='body_text mb-6 !font-extrabold'>Object</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>Maps can contain objects and other data types as keys.</li>
                            <li className='body_text mb-6'>Objects can only contain strings and symbols as keys.</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>Maps can be directly iterated and their value can be accessed.</li>
                            <li className='body_text mb-6'>Objects can be iterated by accessing its keys.</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>The number of elements of a Map can be determined by size property.</li>
                            <li className='body_text mb-6'>The number of elements of an object needs to be determined manually.</li>
                        </ul>
                        <ul className='pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text'>Map performs better for programs that require the addition or removal of elements frequently.</li>
                            <li className='body_text'>Object does not perform well if the program requires the addition or removal of elements frequently.</li>
                        </ul>
                    </div>
            </section>
        </>
    )
}

export default MapVsObj