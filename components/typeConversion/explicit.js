import React from 'react'

const Explicit = () => {
    return (
        <section className='bg-dark pb-10 border_bottom'>
            <div className=''>
                <h2 className='sec_heading mt-10 mb-6'>JavaScript Explicit Conversion</h2>
                <p className='main_text mb-6'>You can also convert one data type to another as per your needs. The type conversion that you do manually is known as explicit type conversion.</p>
                <p className='main_text mb-6'>In JavaScript, explicit type conversions are done using built-in methods.</p>
                <p className='main_text mb-6'>Here are some common methods of explicit conversions.</p>
                <h2 className='sec_heading mt-10 mb-6'>1. Convert to Number Explicitly</h2>

                <p className='main_text mb-6'> To convert numeric strings and boolean values to numbers, you can use Number(). For example,</p>

                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        let result;<br /><br />

            // string to number<br />
                        result = Number('324');<br />
                        console.log(result); // 324<br /><br />

                        result = Number('324e-1')  <br />
                        console.log(result); // 32.4<br /><br />

            // boolean to number<br />
                        result = Number(true);<br />
                        console.log(result); // 1<br /><br />

                        result = Number(false);<br />
                        console.log(result); // 0<br />

                    </p>
                </div>
                <p className='main_text mb-6'>In JavaScript, empty strings and null values return 0. For example,</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        let result;<br />
                        result = Number(null);<br />
                        console.log(result);  // 0<br /><br />

                        let result = Number(' ')<br />
                        console.log(result);  // 0<br />
                    </p>
                </div>
                <p className='main_text mb-6'> If a string is an invalid number, the result will be NaN. For example,</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        let result;<br />
                        result = Number('hello');<br />
                        console.log(result); // NaN<br /><br />

                        result = Number(undefined);<br />
                        console.log(result); // NaN<br /><br />

                        result = Number(NaN);<br />
                        console.log(result); // NaN<br />
                    </p>
                </div>
                <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span> You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,</p>
                    <br />
                    <p className='body_text'>
                        let result;<br />
                        result = parseInt('20.01');<br />
                        console.log(result); // 20<br /><br />

                        result = parseFloat('20.01');<br />
                        console.log(result); // 20.01<br /><br />

                        result = +'20.01';<br />
                        console.log(result); // 20.01<br /><br />

                        result = Math.floor('20.01');<br />
                        console.log(result); // 20<br />
                    </p>
                </div>
                <h2 className='sec_heading mt-10 mb-6'>2. Convert to String Explicitly</h2>
                <p className='main_text mb-6'>To convert other data types to strings, you can use either String() or toString(). For example,</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                //number to string<br />
                        let result;<br />
                        result = String(324);<br />
                        console.log(result);  // "324"<br /><br />

                        result = String(2 + 4);<br />
                        console.log(result); // "6"<br /><br />

                        //other data types to string<br />
                        result = String(null);<br />
                        console.log(result); // "null"<br /><br />

                        result = String(undefined);<br />
                        console.log(result); // "undefined"<br /><br />

                        result = String(NaN);<br />
                        console.log(result); // "NaN"<br /><br />

                        result = String(true);<br />
                        console.log(result); // "true"<br /><br />

                        result = String(false);<br />
                        console.log(result); // "false"<br /><br />

                        // using toString()<br />
                        result = (324).toString();<br />
                        console.log(result); // "324"<br /><br />

                        result = true.toString();<br />
                        console.log(result); // "true"<br />

                    </p>
                </div>
                <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>String() takes null and undefined and converts them to string. However, toString() gives error when null are passed.
                    </p>
                </div>

                <h2 className='sec_heading mt-10 mb-6'>3. Convert to Boolean Explicitly</h2>
                <p className='main_text mb-6'>To convert other data types to a boolean, you can use Boolean().</p>
                <p className='main_text mb-6'>In JavaScript, undefined, null, 0, NaN, '' converts to false. For example,</p>

                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        let result;<br />
                        result = Boolean('');<br />
                        console.log(result); // false<br /><br />

                        result = Boolean(0);<br />
                        console.log(result); // false<br /><br />

                        result = Boolean(undefined);<br />
                        console.log(result); // false<br /><br />

                        result = Boolean(null);<br />
                        console.log(result); // false<br /><br />

                        result = Boolean(NaN);<br />
                        console.log(result); // false<br />

                    </p>
                </div>
                <p className='main_text mb-6'> All other values give true. For example,</p>
                <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'>
                        result = Boolean(324);<br />
                        console.log(result); // true<br /><br />

                        result = Boolean('hello');<br />
                        console.log(result); // true<br /><br />

                        result = Boolean(' ');<br />
                        console.log(result); // true<br />
                    </p>
                </div>


                <h2 className='sec_heading mt-10 mb-6'>JavaScript Type Conversion Table</h2>
                <p className='main_text mb-6'>The table shows the conversion of different values to String, Number, and Boolean in JavaScript.</p>
                <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE]'>
                    <div className='flex gap-4 justify-between overflow-x-auto'>
                        <div>
                            <p className='body_text'>Value</p>
                            <p className='body_text'>1</p>
                            <p className='body_text'>0</p>
                            <p className='body_text'>"1"</p>
                            <p className='body_text'>"0"</p>
                            <p className='body_text'>"ten"</p>
                            <p className='body_text'>true</p>
                            <p className='body_text'>false</p>
                            <p className='body_text'>null</p>
                            <p className='body_text'>undefined</p>
                            <p className='body_text'>''</p>
                            <p className='body_text'>' '</p>
                        </div>
                        <div>
                            <p className='body_text'>String Conversion</p>
                            <p className='body_text'>"1"</p>
                            <p className='body_text'>"0"</p>
                            <p className='body_text'>"1"</p>
                            <p className='body_text'>"0"</p>
                            <p className='body_text'>"ten"</p>
                            <p className='body_text'>"true"</p>
                            <p className='body_text'>"false"</p>
                            <p className='body_text'>"null"</p>
                            <p className='body_text'>"undefined"</p>
                            <p className='body_text'>""</p>
                            <p className='body_text'>" "</p>
                        </div>
                      
                        <div>
                            <p className='body_text'>  Number Conversion</p>
                            <p className='body_text'>1</p>
                            <p className='body_text'>0</p>
                            <p className='body_text'>1</p>
                            <p className='body_text'>0</p>
                            <p className='body_text'>NaN</p>
                            <p className='body_text'>1</p>
                            <p className='body_text'>0</p>
                            <p className='body_text'>0</p>
                            <p className='body_text'>NaN</p>
                            <p className='body_text'>0</p>
                            <p className='body_text'>0</p>
                        </div>
                        <div>
                        <p className='body_text'>  Boolean Conversion</p>
                        <p className='body_text'>true</p>
                        <p className='body_text'>false</p>
                        <p className='body_text'>true</p>
                        <p className='body_text'>true</p>
                        <p className='body_text'>true</p>
                        <p className='body_text'>true</p>
                        <p className='body_text'>false</p>
                        <p className='body_text'>false</p>
                        <p className='body_text'>false</p>
                        <p className='body_text'>false</p>
                        <p className='body_text'>true</p>
                    </div>
                    </div>
                </div>
                <p className='main_text'>You will learn about the conversion of objects and arrays to other data types in later tutorials.</p>
                
            </div>
        </section>
    )
}

export default Explicit