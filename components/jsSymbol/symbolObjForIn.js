import React from 'react'

const SymbolObjForIn = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='sec_heading mb-6'>Add Symbol as an Object Key</h1>
                    <p className='main_text mb-4'>You can add symbols as a key in an object using square brackets []. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            let id = Symbol("id"); <br /><br />

                            let person = &#123;<br />
                            name: "Jack",<br /><br />

                            // adding symbol as a key<br />
                            [id]: 123 // not "id": 123<br />
                            &#125;;<br /><br />

                            console.log(person); // &#123;name: "Jack", Symbol(id): 123&#125;
                        </p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='sec_heading mb-6'>Symbols are not included in for...in Loop</h1>
                    <p className='main_text mb-4'>The for...in loop does not iterate over Symbolic properties. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            let id = Symbol("id"); <br /><br />

                            let person = &#123;<br />
                            name: "Jack",<br />
                            age: 25,<br />
                            [id]: 12<br />
                            &#125;;<br /><br />

                        // using for...in<br />
                            for (let key in person) &#123;<br />
                            console.log(key);<br />
                            &#125;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            name<br />
                            age
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SymbolObjForIn