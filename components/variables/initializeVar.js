import React from 'react'

const InitializeVar = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom '>
                <h1 className='large_heading mb-6'>JavaScript Initialize Variables</h1>
                <p className='main_text mb-6'>We use the assignment operator = to assign a value to a variable.</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 '>
                    <p className='medium_text'>
                        let x; <br />
                        x = 5;
                    </p>
                </div>
                <p className='main_text mb-6'>Here, 5 is assigned to variable x.</p>
                <p className='main_text mb-6'>You can also initialize variables during its declaration.</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 '>
                    <p className='medium_text'>
                        let x = 5;<br />
                        let y = 6;
                    </p>
                </div>
                <p className='main_text mb-6'>   In JavaScript, it's possible to declare variables in a single statement.</p>

                <div className='bg-light-dark p-5 mb-10 border-l-2 border-[#54D7CE]'>
                    <p className='medium_text'>
                        let x = 5, y = 6, z = 7;
                    </p>
                </div>
                <p className='main_text pt-10 border_top mb-6'>If you use a variable without initializing it, it will have an undefined value.</p>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='medium_text'>
                        let x; // x is the name of the variable<br />
                        <br />
                        console.log(x); // undefined
                    </p>
                </div>
                <p className='main_text my-6 '>Here x is the variable name and since it does not contain any value, it will be undefined.</p>
                <p className='main_text'>You will learn about undefined and other data types in the next tutorial in detail.</p>


                


            </section>
        </>
    )
}

export default InitializeVar