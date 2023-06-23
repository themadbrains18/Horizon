import React from 'react'
import Image from 'next/image'
import consoleImg from '/public/console-method.webp'
const UsingConsoleLog = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>1. Using console.log()</h3>
                    <p className='main_text mb-4'>You can use the <code className='code_border'> console.log()</code> method to debug the code. You can pass the value you want to check into the <code className='code_border'>console.log()</code> method and verify if the data is correct.</p>
                    <p className='main_text mb-4'>The syntax is:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            console.log(object/message);
                        </code>
                    </div>
                    <p className='main_text mb-4'>You could pass the object in <code className='code_border'>console.log()</code> or simply a message string.</p>
                    <p className='main_text mb-4'>In the previous tutorial, we used <code className='code_border'>console.log()</code> method to print the output. However, you can also use this method for debugging. For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <code>
                            let a = 5; <br />
                            let b = 'asdf'; <br />
                            let c = a + b; <br />
                            <br />
                            // if you want to see the value of c <br />
                            console.log(c); <br />
                            <br />
                            // then do other operations <br />
                            if(c) &#123; <br />
                                // do something <br />
                            &#125; <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Using <code className='code_border'>console.log()</code> method in the browser opens the value in the debugger window.</p>
                    <Image src={consoleImg} width={700} height={630} alt='console Img' className='bg-white my-6' />
                    <p className='main_text mb-4'>The <code className='code_border'>console.log()</code> is not specific to browsers. It's also available in other JavaScript engines.</p>
                </div>
            </section>
        </>
    )
}

export default UsingConsoleLog