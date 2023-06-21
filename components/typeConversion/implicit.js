import React from 'react'

const Implicit = () => {
    return (
        <section className='bg-dark pb-10 border_bottom'>
            <div className=''>
                <h2 className='sec_heading mt-10 mb-6'>JavaScript Implicit Conversion</h2>
                <p className='main_text pb-10 border_bottom'>In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.</p>

                <h2 className='sec_heading mt-10 mb-6'> Example 1: Implicit Conversion to String</h2>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                     // numeric string used with + gives string type<br />
                        let result;<br /><br />

                        result = '3' + 2; <br />
                        console.log(result) // "32"<br /><br />

                        result = '3' + true; <br />
                        console.log(result); // "3true"<br /><br />

                        result = '3' + undefined; <br />
                        console.log(result); // "3undefined"<br /><br />

                        result = '3' + null; <br />
                        console.log(result); // "3null"<br />
                    </p>
                </div>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span> When a number is added to a string, JavaScript converts the number to a string before concatenation.</p>
                </div>

                <h2 className='sec_heading mt-10 mb-6'>Example 2: Implicit Conversion to Number</h2>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                    // numeric string used with - , / , * results number type<br/><br/>

                    let result;<br/><br/>
                    
                    result = '4' - '2'; <br/>
                    console.log(result); // 2<br/><br/>
                    
                    result = '4' - 2;<br/>
                    console.log(result); // 2<br/><br/>
                    
                    result = '4' * 2;<br/>
                    console.log(result); // 8<br/><br/>
                    
                    result = '4' / 2;<br/>
                    console.log(result); // 2<br/>
                    </p>
                </div>

                <h2 className='sec_heading mt-10 mb-6'>Example 3: Non-numeric String Results to NaN</h2>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                    // non-numeric string used with - , / , * results to NaN<br/><br/>

                    let result;<br/><br/>
                    
                    result = 'hello' - 'world';<br/>
                    console.log(result); // NaN<br/><br/>
                    
                    result = '4' - 'hello';<br/>
                    console.log(result); // NaN<br/>
                    
                    </p>
                </div>

                <h2 className='sec_heading mt-10 mb-6'>Example 4: Implicit Boolean Conversion to Number</h2>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                    // if boolean is used, true is 1, false is 0<br/><br/>

                    let result;<br/><br/>
                    
                    result = '4' - true;<br/>
                    console.log(result); // 3<br/><br/>
                    
                    result = 4 + true;<br/>
                    console.log(result); // 5<br/><br/>
                    
                    result = 4 + false;<br/>
                    console.log(result); // 4<br/>
                    
                    </p>
                </div>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                <p className='body_text'><span className='!text-white'>Note: </span> JavaScript considers 0 as false and all non-zero number as true. And, if true is converted to a number, the result is always 1.</p>
            </div>

            <h2 className='sec_heading mt-10 mb-6'>Example 5: null Conversion to Number</h2>
            <div className='bg-light-dark p-3 mb-6'>
                <p className='medium_text'>
                // null is 0 when used with number<br/>
                let result;<br/><br/>
                
                result = 4 + null;<br/>
                console.log(result);  // 4<br/><br/>
                
                result = 4 - null;<br/>
                console.log(result);  // 4<br/>
                
                </p>
            </div>

            <h2 className='sec_heading mt-10 mb-6'>Example 6: undefined used with number, boolean or null</h2>
            <div className='bg-light-dark p-3 mb-6'>
                <p className='medium_text'>
                // Arithmetic operation of undefined with number, boolean or null gives NaN<br/><br/>

                let result;<br/><br/>
                
                result = 4 + undefined;<br/>
                console.log(result);  // NaN<br/><br/>
                
                result = 4 - undefined;<br/>
                console.log(result);  // NaN<br/><br/>
                
                result = true + undefined;<br/>
                console.log(result);  // NaN<br/><br/>
                
                result = null + undefined;<br/>
                console.log(result);  // NaN<br/>
                </p>
            </div>

            </div>
        </section>
    )
}

export default Implicit