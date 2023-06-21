import React from 'react'

const Examples = () => {
  return (
    <>
      <section className='bg-dark pb-10 border_bottom'>
        <div className='py-10 border_bottom'>
          <h2 className='sec_heading  mb-6'>Example 1: Arrow Function with No Argument</h2>
          <p className='main_text mb-6'>If a function doesn't take any argument, then you should use empty parentheses. For example,</p>
          <div className='bg-light-dark p-3 mb-6'>
            <p className='medium_text'>
              let greet = () =&#62; console.log('Hello');<br />
              greet(); // Hello
            </p>
          </div>
        </div>
        <div className='py-10 border_bottom'>
          <h2 className='sec_heading  mb-6'>Example 2: Arrow Function with One Argument</h2>
          <p className='main_text mb-6'>If a function has only one argument, you can omit the parentheses. For example,</p>
          <div className='bg-light-dark p-3 mb-6'>
            <p className='medium_text'>
              let greet = x =&#62; console.log(x);<br />
              greet('Hello'); // Hello
            </p>
          </div>
        </div>
        <div className='py-10 border_bottom'>
          <h2 className='sec_heading  mb-6'>Example 3: Arrow Function as an Expression</h2>
          <p className='main_text mb-6'>You can also dynamically create a function and use it as an expression. For example,</p>
          <div className='bg-light-dark p-3 mb-6'>
            <p className='medium_text'>
              let age = 5; <br /><br />

              let welcome = (age &#60; 18) ?<br />
              () =&#62; console.log('Baby') :<br />
              () =&#62; console.log('Adult');<br /><br />

              welcome(); // Baby<br />
            </p>
          </div>
        </div>
        <div className='pt-10'>
          <h2 className='sec_heading  mb-6'>Example 4: Multiline Arrow Functions</h2>
          <p className='main_text mb-6'>If a function body has multiple statements, you need to put them inside curly brackets &#123; &#125;. For example,</p>
          <div className='bg-light-dark p-3 mb-6'>
            <p className='medium_text'>
              let sum = (a, b) =&#62; &#123;<br />
              let result = a + b;<br />
              return result;<br />
              &#125;<br /><br />

              let result1 = sum(5,7);<br />
              console.log(result1); // 12<br />
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Examples