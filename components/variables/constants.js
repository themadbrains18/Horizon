import React from 'react'

const Constants = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom '>
                <h1 className='large_heading mb-6'>JavaScript Constants</h1>
                <p className='main_text mb-6'>The const keyword was also introduced in the ES6(ES2015) version to create constants. For example,</p>

                <div className='bg-light-dark p-5 mb-6 mt-6 main_text'>
                    const x = 5;
                </div>
                <p className='main_text '>Once a constant is initialized, we cannot change its value.</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 main_text'>
                    const x = 5;<br />
                    x = 10;  // Error! constant cannot be changed.<br />
                    console.log(x)<br />
                </div>
                <p className='main_text mb-6 '>Simply, a constant is a type of variable whose value cannot be changed.</p>
                <p className='main_text mb-6 '> Also, you cannot declare a constant without initializing it. For example,</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 main_text'>
                    const x;  // Error! Missing initializer in const declaration.<br />
                    x = 5;<br />
                    console.log(x)<br />
                </div>
                <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span> If you are sure that the value of a variable won't change throughout the program, it's recommended to use const. However, there are a few browsers that do not support const. Visit JavaScript const browser support to learn more.
                    </p>
                </div>

                <p className='main_text pt-10 border_top '>Now that you know about variables, you will learn about different types of data a variable can store in the next tutorial.</p>

            </section>
        </>
    )
}

export default Constants