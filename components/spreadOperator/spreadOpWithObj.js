import React from 'react'

const SpreadOpWithObj = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Spread Operator with Object</h3>
                    <p className='main_text mb-4'>You can also use the spread operator with object literals. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const obj1 = &#123; x : 1, y : 2 &#125;; <br />
                            const obj2 = &#123; z : 3 &#125;;<br /><br />

                        // add members obj1 and obj2  to obj3<br />
                            const obj3 = &#123;...obj1, ...obj2&#125;;<br /><br />

                            console.log(obj3); // &#123;x: 1, y: 2, z: 3&#125;<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'> Here, both <code className='code_border'>obj1</code> and <code className='code_border'>obj2</code> properties are added to obj3 using the spread operator.</p>
                </div>
                <div>
                    <h3 className='sec_heading mb-4'>Rest Parameter</h3>
                    <p className='main_text mb-4'>When the spread operator is used as a parameter, it is known as the rest parameter.</p>
                    <p className='main_text mb-4'>You can also accept multiple arguments in a function call using the rest parameter. For example,</p>
                    <div className='bg-light-dark p-5 mb-8 '>
                        <code>
                            let func = function(...args)  &#123;<br />
                            console.log(args);<br />
                            &#125;<br /><br />

                            func(3); // [3]<br />
                            func(4, 5, 6); // [4, 5, 6]<br />

                        </code>
                    </div>
                    <p className='main_text mb-4'>Here,</p>
                    <ul className='ml-4 mb-6'>
                        <li className='mb-6 ml-5 main_text list-disc'>When a single argument is passed to the func() function, the rest parameter takes only one parameter.</li>
                        <li className='mb-6 ml-5 main_text list-disc'>When three arguments are passed, the rest parameter takes all three parameters.</li>
                    </ul>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>Using the rest parameter will pass the arguments as array elements.</p>
                    </div>
                    <p className='main_text mb-4'>You can also pass multiple arguments to a function using the spread operator. For example,</p>
                    <div className='bg-light-dark p-5 mb-8 '>
                        <code>
                            function sum(x, y ,z)  &#123;<br />
                            console.log(x + y + z);<br />
                            &#125;<br /><br />

                            const num1 = [1, 3, 4, 5];<br /><br />

                            sum(...num1); // 8<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>If you pass multiple arguments using the spread operator, the function takes the required arguments and ignores the rest.</p>
                </div>
            </section>
        </>
    )
}

export default SpreadOpWithObj