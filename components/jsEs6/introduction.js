import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=' pb-10 b-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript ES6</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript ES6 with the help of examples.</p>
                    <p className='main_text mb-4'>JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.</p>
                    <p className='main_text mb-4'>ECMAScript is the standard that JavaScript programming language uses. ECMAScript provides the specification on how JavaScript programming language should work</p>
                    <p className='main_text mb-4'>This tutorial provides a brief summary of commonly used features of ES6 so that you can start quickly in ES6.</p>
                </div>
                <div className='py-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>JavaScript let</h2>
                    <p className='main_text mb-4'>JavaScript let is used to declare variables. Previously, variables were declared using the var keyword.</p>
                    <p className='main_text mb-4'>Learn more about the difference between let and var.</p>
                    <p className='main_text mb-4'>The variables declared using let are block-scoped. This means they are only accessible within a particular block. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        // variable declared using let <br />
                            let name = 'Sara';<br />
                            &#123;<br />
                            // can be accessed only inside<br />
                            let name = 'Peter';<br /><br />

                            console.log(name); // Peter<br />
                            &#125;<br />
                            console.log(name); // Sara <br />
                        </p>
                    </div>
                </div>
                <div className='pt-10'>
                    <h2 className='sec_heading mb-6'>JavaScript const</h2>
                    <p className='main_text mb-4'>The const statement is used to declare constants in JavaScript. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        // name declared with const cannot be changed <br />
                            const name = 'Sara';
                        </p>
                    </div>
                    <p className='main_text mb-4'>Once declared, you cannot change the value of a const variable.</p>
                </div>
            </section>
        </>
    )
}

export default Introduction