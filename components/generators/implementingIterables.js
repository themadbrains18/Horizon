import React from 'react'

const ImplementingIterables = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Generators are Used for Implementing Iterables</h3>
                    <p className='main_text mb-4'>Generators provide an easier way to implement iterators.Generators provide an easier way to implement iterators.</p>
                    <p className='main_text mb-4'>If you want to implement an iterator manually, you have to create an iterator with the next() method and save the state. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // creating iterable object <br />
                            const iterableObj = &#123; <br />
                            <br />
                            // iterator method <br />
                            [Symbol.iterator]() &#123; <br />
                            let step = 0; <br />
                            return &#123; <br />
                            next() &#123; <br />
                            step++; <br />
                            if (step === 1) &#123; <br />
                            return &#123; value: '1', done: false&#125;; <br />
                            &#125; <br />
                            else if (step === 2) &#123; <br />
                            return &#123; value: '2', done: false&#125;; <br />
                            &#125; <br />
                            else if (step === 3) &#123; <br />
                            return &#123; value: '3', done: false&#125;; <br />
                            &#125; <br />
                            return &#123; value: '', done: true &#125;; <br />
                            &#125; <br />
                            &#125; <br />
                            &#125; <br />
                            &#125; <br />
                            <br />
                            for (const i of iterableObj) &#123; <br />
                            console.log(i); <br />
                            &#125; <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            1 <br />
                            2 <br />
                            3 <br />
                            4 <br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Since generators are iterables, you can implement an iterator in an easier way. Then you can iterate through the generators using the <code className='code_border'> for...of</code>  loop. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                         // generator function <br />
                            function* generatorFunc() &#123; <br />
                            <br />
                            yield 1; <br />
                            yield 2; <br />
                            yield 3; <br />
                            &#125; <br />
                            <br />
                            const obj = generatorFunc(); <br />
                            <br />
                            // iteration through generator <br />
                            for (let value of obj) &#123; <br />
                            console.log(value); <br />
                            &#125; <br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImplementingIterables