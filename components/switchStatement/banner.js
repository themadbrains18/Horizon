import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'
import flowchartSwitch from '/public/javascript-switch-statement.webp'

const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading'>JavaScript switch Statement</h1>
                    <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about the JavaScript switch statement with the help of examples.</p>
                    <div className='py-10 mb-10 border_bottom'>
                        <h2 className='sec_heading'>Video: JavaScript switch Statement</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                    </div>
                    <div>
                        <p className='main_text mb-6'>The JavaScript switch statement is used in decision making.</p>
                        <p className='main_text mb-6'>The JavaScript switch statement is used in decision making.</p>
                        <p className='main_text mb-6'>The syntax of the switch statement is:</p>
                        <div className='bg-light-dark p-3 mb-6'>
                            <p className='medium_text'>
                                switch(variable/expression) &#123;
                                case value1:<br />
                                // body of case 1<br />
                                break;<br /><br />

                                case value2:<br />
                                // body of case 2<br />
                                break;<br /><br />

                                case valueN:<br />
                                // body of case N<br />
                                break;<br /><br />

                                default:<br />
                                // body of default<br />
                                &#125;<br />
                            </p>
                        </div>
                        <p className='main_text mb-6'>The switch statement evaluates a variable/expression inside parentheses ().</p>
                        <ul>
                            <li className='main_text mb-4 list-disc'>If the result of the expression is equal to value1, its body is executed.</li>
                            <li className='main_text mb-4 list-disc'>If the result of the expression is equal to value2, its body is executed.</li>
                            <li className='main_text mb-4 list-disc'>This process goes on. If there is no matching case, the default body executes.</li>
                        </ul>
                        <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                            <p className='body_text'><span className='!text-white'>Notes: </span> </p>
                            <ul className='body_text'>
                                <li className='ml-5 mb-4 list-disc'>The break statement is optional. If the break statement is encountered, the switch statement ends.</li>
                                <li className='ml-5 mb-4 list-disc'>If the break statement is not used, the cases after the matching case are also executed.</li>
                                <li className='ml-5 mb-4 list-disc'>The default clause is also optional.</li>
                            </ul>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='sec_heading my-6'>Flowchart of switch Statement</h2>
                        <Image src={flowchartSwitch} width={650} height={500} alt='FlowChart Switch' className='py-6 bg-white' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner