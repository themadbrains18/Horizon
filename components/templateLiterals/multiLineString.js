import React from 'react'

const MultiLineString = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Multiline Strings Using Template Literals</h3>
                    <p className='main_text mb-4'>Template literals also make it easy to write multiline strings. For example,</p>
                    <p className='main_text mb-4'>Using template literals, you can replace</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                        // using the + operator <br />
                            const message1 = 'This is a long message\n' + <br />
                            'that spans across multiple lines\n' + <br />
                            'in the code.'<br /><br />

                            console.log(message1)<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>with</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const message1 = `This is a long message <br />
                            that spans across multiple lines<br />
                            in the code.`<br /><br />

                            console.log(message1)<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>The output of both these programs will be the same.</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            This is a long message <br/>
                            that spans across multiple lines<br/>
                            in the code.<br/>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MultiLineString