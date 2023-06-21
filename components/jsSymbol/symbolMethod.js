import React from 'react'

const SymbolMethod = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='sec_heading mb-6'>Symbol Methods</h1>
                    <p className='main_text mb-4'>There are various methods available with Symbol.</p>
                    <div className=' border border-[#37474F] p-5 mb-8'>
                        <div className='overflow-x-auto'>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words !font-extrabold'>Method</li>
                                <li className='body_text mb-6 break-words !font-extrabold'>Description</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>for()</li>
                                <li className='body_text mb-6 break-words'>Searches for existing symbols</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>keyFor()</li>
                                <li className='body_text mb-6 break-words'>Returns a shared symbol key from the global symbol registry.</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>toSource()</li>
                                <li className='body_text mb-6 break-words'>Returns a string containing the source of the Symbol object</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>toString()</li>
                                <li className='body_text mb-6 break-words'>Returns a string containing the description of the Symbol</li>
                            </ul>
                            <ul className='pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text  break-words '>valueOf()</li>
                                <li className='body_text  break-words'>Returns the primitive value of the Symbol object.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='sec_heading mb-6'>Example: Symbol Methods</h1>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        // get symbol by name <br />
                            let sym = Symbol.for('hello');<br />
                            let sym1 = Symbol.for('id');<br /><br />

                        // get name by symbol<br />
                            console.log( Symbol.keyFor(sym) ); // hello<br />
                            console.log( Symbol.keyFor(sym1) ); // id<br />
                        </p>
                    </div>
                </div>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='sec_heading mb-6'>Symbol Properties</h1>
                    <div className=' border border-[#37474F] p-5 mb-8'>
                        <div className='overflow-x-auto'>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words !font-extrabold'>Properties</li>
                                <li className='body_text mb-6 break-words !font-extrabold'>Description</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>asyncIterator</li>
                                <li className='body_text mb-6 break-words'>Returns the default AsyncIterator for an object</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>hasInstance</li>
                                <li className='body_text mb-6 break-words'>Determines if a constructor object recognizes an object as its instance</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>isConcatSpreadable</li>
                                <li className='body_text mb-6 break-words'>Indicates if an object should be flattened to its array elements</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>iterator</li>
                                <li className='body_text mb-6 break-words'>Returns the default iterator for an object</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>match</li>
                                <li className='body_text mb-6 break-words'>Matches against a string</li>
                            </ul>

                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>matchAll</li>
                                <li className='body_text mb-6 break-words'>Returns an iterator that yields matches of the regular expression against a string</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>replace</li>
                                <li className='body_text mb-6 break-words'>Replaces matched substrings of a string</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>search</li>
                                <li className='body_text mb-6 break-words'>Returns the index within a string that matches the regular expression</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>split</li>
                                <li className='body_text mb-6 break-words'>Splits a string at the indices that match a regular expression</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>species</li>
                                <li className='body_text mb-6 break-words'>Creates derived objects</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>toPrimitive</li>
                                <li className='body_text mb-6 break-words'>Converts an object to a primitive value</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>toStringTag</li>
                                <li className='body_text mb-6 break-words'>Gives the default description of an object</li>
                            </ul>
                            <ul className='pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text  break-words '>description</li>
                                <li className='body_text  break-words'>Returns a string containing the description of the symbol</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='sec_heading mb-6'>Example: Symbol Properties Example</h1>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const x = Symbol('hey'); <br /><br />

                        // description property<br />
                            console.log(x.description); // hey<br /><br />

                            const stringArray = ['a', 'b', 'c'];<br />
                            const numberArray = [1, 2, 3];<br /><br />

                        // isConcatSpreadable property<br />
                            numberArray[Symbol.isConcatSpreadable] = false;<br /><br />

                            let result = stringArray.concat(numberArray);<br />
                            console.log(result); // ["a", "b", "c", [1, 2, 3]]<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SymbolMethod