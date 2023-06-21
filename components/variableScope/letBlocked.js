import React from 'react'

const LetBlocked = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>let is Block Scoped</h2>
                    <p className='main_text mb-4'>The let keyword is block-scoped (variable can be accessed only in the immediate block).</p>
                    <h2 className='sec_heading mt-10 mb-6'>Example 2: block-scoped Variable</h2>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        // program showing block-scoped concept <br />
                        // global variable<br />
                            let a = 'Hello';<br /><br />

                            function greet() &#123;<br /><br />

                            // local variable<br />
                            let b = 'World';<br /><br />

                            console.log(a + ' ' + b);<br /><br />

                            if (b == 'World') &#123;<br /><br />

                                // block-scoped variable<br />
                            let c = 'hello';<br /><br />

                            console.log(a + ' ' + b + ' ' + c);<br />
                            &#125;<br /><br />

                            // variable c cannot be accessed here<br />
                            console.log(a + ' ' + b + ' ' + c);<br />
                            &#125;<br /><br />

                            greet();<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Hello World</p>
                        <p className='medium_text'>Hello World hello</p>
                        <p className='medium_text'>Uncaught ReferenceError: c is not defined</p>
                    </div>
                    <p className='main_text mb-6'>In the above program, variable</p>
                    <ul className='mb-6'>
                        <li className='main_text mb-4 list-disc ml-6'>a is a global variable. It can be accessed anywhere in the program.</li>
                        <li className='main_text mb-4 list-disc ml-6'>b is a local variable. It can be accessed only inside the function greet.</li>
                        <li className='main_text list-disc ml-6'>c is a block-scoped variable. It can be accessed only inside the if statement block.</li>
                    </ul>
                    <p className='main_text mb-6'>Hence, in the above program, the first two console.log() work without any issue.</p>
                    <p className='main_text pb-10 border_bottom'>However, we are trying to access the block-scoped variable c outside of the block in the third console.log(). This will throw an error.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>In JavaScript, var is function scoped and let is block-scoped. If you try to use var c = 'hello'; inside the if statement in the above program, the whole program works, as c is treated as a local variable.<br/><br/>
                        To learn more about let versus var, visit JavaScript let vs var. </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LetBlocked