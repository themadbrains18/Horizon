import React from 'react'

const ImpoExpo = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript import and export</h2>
                <p className='main_text mb-4'>You could export a function or a program and use it in another program by importing it. This helps to make reusable components. For example, if you have two JavaScript files named contact.js and home.js.</p>
                <p className='main_text mb-4'>In contact.js file, you can <span className='!font-extrabold'>export</span> the <span className='border px-2 rounded-[5px]'>contact()</span>  function:</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        // export<br />
                        export default function contact(name, age) &#123;<br />
                        console.log(`The name is $&#123;name&#125;. And age is $&#123;age&#125;.`);<br />
                        &#125;<br />
                    </p>
                </div>
                <p className='main_text mb-4'> Then when you want to use the <span className='border px-2 rounded-[5px]'>contact()</span>  function in another file, you can simply import the function. For example, in home.js file:</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        import contact from './contact.js'; <br /><br />

                        contact('Sara', 25);<br />
                        // The name is Sara. And age is 25<br />
                    </p>
                </div>
            </section>
        </>
    )
}

export default ImpoExpo