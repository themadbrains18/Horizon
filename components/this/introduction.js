import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-6'>JavaScript this</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript's this keyword with the help of examples.</p>
                    <p className='main_text mb-4'>In JavaScript, this keyword refers to the object where it is called.</p>
                    <h1 className='sec_heading mb-6'>1. this Inside Global Scope</h1>
                    <p className='main_text mb-4'>When <code className='code_border'>this</code>  is used alone, <code className='code_border'>this</code>this refers to the global object (<code className='code_border'>window</code> object in browsers). For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let a = this;   <br />
                            console.log(a);  // Window &#123; &#125; <br />
                            <br />
                            this.name = 'Sarah'; <br />
                            console.log(window.name); // Sarah <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here,  <code className='code_border'>this.name</code> is the same as <code className='code_border'>window.name</code> .</p>
                </div>
            </section>
        </>
    )
}

export default Introduction