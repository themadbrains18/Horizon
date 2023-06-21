import React from 'react'

const ReadOnly = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>2. Read Only View of an Object</h3>
                    <p className='main_text mb-4'>There may be times when you do not want to let others make changes in an object. In such cases, you can use a proxy to make an object readable only. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let student = &#123; <br />
                            name: 'Jack',<br />
                            age: 23<br />
                            &#125;<br /><br />

                            const handler = &#123;<br />
                            set: function (obj, prop, value) &#123;<br />
                            if (obj[prop]) &#123;<br /><br />

                                    // cannot change the student value<br />
                            console.log('Read only')<br />
                            &#125;<br />
                            &#125;<br />
                            &#125;;<br /><br />

                            const proxy = new Proxy(student, handler);<br /><br />

                            proxy.name = 'John'; // Read only<br />
                            proxy.age = 33; // Read only<br />
                        </code>
                    </div>

                    <p className='main_text mb-4'>In the above program, one cannot mutate the object in any way.</p>
                    <p className='main_text mb-4'>If one tries to mutate the object in any way, you'll only receive a string saying <code className='code_border'> Read Only</code> .</p>
                </div>
            </section>
        </>
    )
}

export default ReadOnly