import React from 'react'

const Weakset = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h3 className='sec_heading mb-4'>JavaScript WeakSet</h3>
                <p className='main_text mb-4'>The WeakSet is similar to a Set. However, WeakSet can only contain objects whereas a Set can contain any data types such as strings, numbers, objects, etc. For example,</p>

                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        const weakSet = new WeakSet(); <br />
                        console.log(weakSet); // WeakSet &#123;&#125;<br /><br />

                        let obj = &#123;<br />
                        message: 'Hi',<br />
                        sendMessage: true<br />
                        &#125;<br /><br />

                    // adding object (element) to WeakSet<br />
                        weakSet.add(obj);<br /><br />

                        console.log(weakSet); // WeakSet &#123;&#123;message: "Hi", sendMessage: true&#125;&#125;<br />
                    </code>
                </div>
                <p className='main_text mb-4'>When you try to add other data types besides objects, WeakSet throws an error. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                     // trying to add string to WeakSet<br />
                        weakSet.add('hello');<br /><br />

                        // throws error<br />
                        // TypeError: Attempted to add a non-object key to a WeakSet<br />
                        console.log(weakSet);<br />
                    </code>
                </div>
            </section>
        </>
    )
}

export default Weakset