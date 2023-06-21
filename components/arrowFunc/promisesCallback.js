import React from 'react'

const PromisesCallback = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <h2 className='sec_heading mt-10 mb-6'>Arrow Function with Promises and Callbacks</h2>
                <p className='main_text mb-6'>Arrow functions provide better syntax to write promises and callbacks. For example,</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        // ES5 <br />
                        asyncFunction().then(function() &#123;<br />
                        return asyncFunction1();<br />
                        &#125;).then(function() &#123;<br />
                        return asyncFunction2();<br />
                        &#125;).then(function() &#123;<br />
                        finish;<br />
                        &#125;);<br />
                    </p>
                </div>
                <p className='main_text mb-6'>can be written as</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        // ES6<br />
                        asyncFunction()<br />
                        .then(() =&#62; asyncFunction1())<br />
                        .then(() =&#62; asyncFunction2())<br />
                        .then(() =&#62; finish);<br />
                    </p>
                </div>
            </section>
        </>
    )
}

export default PromisesCallback