import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='bg-dark pb-10 border_bottom'>
        <div className=''>
          <h1 className='large_heading'>JavaScript Hoisting</h1>
          <p className='main_text pb-6 '>In this tutorial, you will learn about JavaScript hoisting with the help of examples.</p>
          <p className='main_text pb-6 '>Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. For example,</p>
          <div className='bg-light-dark p-3 mb-6'>
            <p className='medium_text'>
                    // using test before declaring<br />
              console.log(test);   // undefined<br />
              var test;<br />
            </p>
          </div>
          <p className='main_text pb-6 '>The above program works and the output will be undefined. The above program behaves as</p>
          <div className='bg-light-dark p-3 mb-6'>
            <p className='medium_text'>
          // using test before declaring<br />
              var test;<br />
              console.log(test); // undefined<br />
            </p>
          </div>
          <p className='main_text pb-6'>Since the variable test is only declared and has no value, undefined value is assigned to it.</p>
          <p className='main_text pb-6'>If you want to learn more about variables, visit JavaScript Variables.</p>

          <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
            <p className='body_text'><span className='!text-white'>Note: </span>In hoisting, though it seems that the declaration has moved up in the program, the actual thing that happens is that the function and variable declarations are added to memory during the compile phase.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Banner