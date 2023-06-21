import React from 'react'
import Image from 'next/image'
import recursionImg from '/public/javascript-recursion.webp'



const Banner = () => {
  return (
    <>
      <section className='bg-dark pb-5 border_bottom'>
        <div className=''>
          <h1 className='large_heading mb-7'>JavaScript Recursion</h1>
          <p className='main_text mb-6'>In this tutorial, you will learn about recursion in JavaScript with the help of examples.</p>
          <p className='main_text mb-6'>Recursion is a process of calling itself. A function that calls itself is called a recursive function.</p>
          <p className='main_text mb-6'>The syntax for recursive function is:</p>
          <div className='bg-light-dark p-3 mb-4'>
            <p className='medium_text'>
              function recurse() &#123;<br />
                      // function code<br />
              recurse();<br />
                      // function code<br />
              &#125;<br /><br />

              recurse();<br />
            </p>
          </div>
          <p className='main_text mb-6'>Here, the recurse() function is a recursive function. It is calling itself inside the function.</p>
          <Image src={recursionImg} width={750} height={500} alt='recursion img' className='mb-6 bg-white' />
          <p className='main_text mb-6'>A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.</p>
          <p className='main_text mb-6'>Once the condition is met, the function stops calling itself. This is called a base condition.</p>
          <p className='main_text mb-6'>To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.</p>
          <p className='main_text mb-6'>So, it generally looks like this.</p>
          <div className='bg-light-dark p-3 mb-4'>
            <p className='medium_text'>
              function recurse() &#123;<br />
              if(condition) &#123;<br />
              recurse();<br />
              &#125;<br />
              else &#123;<br />
                  // stop calling recurse()<br />
              &#125;<br />
              &#125;<br /><br />

              recurse();<br />
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner