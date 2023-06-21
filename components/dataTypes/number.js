import React from 'react'

const Number = () => {
  return (
    <section className='bg-dark pb-10 border_bottom'>
      <div className=''>
        <h2 className='sec_heading mt-10 mb-6'>JavaScript Number</h2>
        <p className='main_text mb-6'>Number represents integer and floating numbers (decimals and exponentials). For example,</p>
        <div className='bg-light-dark p-3 mb-6'>
          <p className='medium_text'>
            const number1 = 3;<br />
            const number2 = 3.433;<br />
            const number3 = 3e5 // 3 * 10^5<br />
          </p>
        </div>
        <p className='main_text mb-6'>A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,</p>
        <div className='bg-light-dark p-3'>
          <p className='medium_text'>
            const number1 = 3/0;<br />
            console.log(number1); // Infinity<br /><br />

            const number2 = -3/0;<br />
            console.log(number2); // -Infinity<br /><br />

            // strings can't be divided by numbers<br />
            const number3 = "abc"/3;<br />
            console.log(number3);  // NaN<br />
          </p>
        </div>
      </div>
    </section>
  )
}

export default Number