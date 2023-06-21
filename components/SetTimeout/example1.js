import React from 'react'

const Example1 = () => {
  return (
    <>
      <section className='bg-dark pb-10 mb-10 border_bottom'>
        <div className='mt-10'>
          <h1 className='sec_heading mb-6'>Example 1: Display a Text Once After 3 Second</h1>
          <div className='bg-light-dark p-5 mb-8'>
            <code>
          // program to display a text using setTimeout method<br />
              function greet() &#123;<br />
              console.log('Hello world');<br />
              &#125;<br /><br />

              setTimeout(greet, 3000);<br />
              console.log('This message is shown first');<br />
            </code>
          </div>
          <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
          <div className='bg-light-dark p-5 mb-6 mt-6'>
            <p className='medium_text'>
              This message is shown first <br />
              Hello world
            </p>
          </div>
          <p className='main_text mb-4'>In the above program, the <code className='code_border'>setTimeout()</code> method calls the <code className='code_border'>greet()</code> function after <span className='!font-extrabold'>3000</span> milliseconds (3 second).</p>
          <p className='main_text mb-4'>Hence, the program displays the text <span className='!font-extrabold'>Hello world</span> only once after <span className='!font-extrabold'>3</span> seconds.</p>
          <div className='bg-light-dark p-5 mb-8 border-l-2 border-[#54D7CE]'>
            <p className='body_text'><span className='!text-white'>Note: </span> The <code className='code_border'>setTimeout()</code> method is useful when you want to execute a block of once after some time. For example, showing a message to a user after the specified time.</p>
          </div>
          <p className='main_text mb-4'>The <code className='code_border'>setTimeout()</code> method returns the interval id. For example,</p>
          <div className='bg-light-dark p-5 mb-8'>
            <code>
          // program to display a text using setTimeout method<br />
              function greet() &#123;<br />
              console.log('Hello world');<br />
              &#125;<br /><br />

              let intervalId = setTimeout(greet, 3000);<br />
              console.log('Id: ' + intervalId);<br />
            </code>
          </div>
          <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
          <div className='bg-light-dark p-5 mb-6 mt-6'>
            <p className='medium_text'>
              Id: 3 <br />
              Hello world
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Example1