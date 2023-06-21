import React from 'react'
import Image from 'next/image'
import defaultPara from '/public/default-arguments.webp'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Default Parameters</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript default parameters with the help of examples.</p>
                    <p className='main_text mb-6'>The concept of default parameters is a new feature introduced in the ES6 version of JavaScript. This allows us to give default values to function parameters. Let's take an example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            function sum(x = 3, y = 5) &#123;<br /><br />

                            // return sum<br />
                            return x + y;<br />
                            &#125;<br /><br />

                            console.log(sum(5, 15));  // 20 <br />
                            console.log(sum(7));        // 12<br />
                            console.log(sum());          // 8<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, the default value of <code className="code_border">x</code> is <strong>3</strong> and the default value of <code className="code_border">y</code> is <strong>5.</strong></p>
                    <ul className='ml-4 mb-6'>
                        <li className='mb-6 ml-5 main_text list-disc'><code className="code_border"> sum(5, 15)</code> - When both arguments are passed, <code className="code_border">x</code> takes <strong>5</strong> and <code className="code_border">y</code> takes <strong>15.</strong></li>

                        <li className='mb-6 ml-5 main_text list-disc'><code className="code_border">sum(7)</code> - When <strong>7</strong> is passed to the <code className="code_border">sum()</code> function, <code className="code_border">x</code> takes <strong>7</strong> and <code className="code_border">y</code> takes default value <strong>5.</strong></li>

                        <li className='mb-6 ml-5 main_text list-disc'><code className="code_border">sum()</code>- When no argument is passed to the <strong>sum()</strong> function, <code className="code_border">x</code> takes default value <strong>3</strong> and <code className="code_border">y</code> takes default value <strong>5.</strong></li>
                    </ul>
                    <Image src={defaultPara} width={1000} height={800} alt='defaultPara img' className='bg-white'/>
            </section>
        </>
    )
}

export default Introduction


