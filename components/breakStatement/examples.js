import React from 'react'

const Examples = () => {
  return (
    <>
      <section className='bg-dark pb-10 border_bottom'>
        <div className=''>
          <h2 className='sec_heading mt-10 mb-6'>Example 1: break with for Loop</h2>
          <div className='bg-light-dark p-3 mb-6'>
            <p className='medium_text'>
      // program to print the value of i <br />
              for (let i = 1; i &#60;= 5; i++) &#123;<br />
          // break condition     <br />
              if (i == 3) &#123;<br />
              break;<br />
              &#125;<br />
              console.log(i);<br />
              &#125;<br />
            </p>

          </div>
          <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
          <div className='bg-light-dark p-5 mb-6 mt-6'>
            <p className='medium_text'>1</p>
            <p className='medium_text'>2</p>
          </div>
          <p className='main_text mb-6'>In the above program, the for loop is used to print the value of i in each iteration. The break statement is used as:</p>
          <div className='bg-light-dark p-5 mb-6 mt-6'>
            <p className='medium_text'>
              if(i == 3) &#123;<br />
              break;<br />
              &#125;<br />
            </p>
          </div>
          <p className='main_text mb-6'>This means, when i is equal to 3, the break statement terminates the loop. Hence, the output doesn't include values greater than or equal to 3.</p>

          <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
            <p className='body_text'><span className='!text-white'>Note: </span>The break statement is almost always used with decision-making statements. To learn more, visit JavaScript if...else Statement.</p>
          </div>
          <p className='main_text pb-10 mt-4 border_bottom'>To learn more about for loop, visit JavaScript for loop.</p>
          
        </div>

        <div>
          <h2 className='sec_heading mt-10 mb-6'>Example 2: break with while Loop</h2>
          <div className='bg-light-dark p-3 mb-6'>
            <p className='medium_text'>
            // program to find the sum of positive numbers <br />
              // if the user enters a negative numbers, break ends the loop<br />
              // the negative number entered is not added to sum<br /><br />

              let sum = 0, number;<br /><br />

              while(true) &#123;<br /><br />

              // take input again if the number is positive<br />
              number = parseInt(prompt('Enter a number: '));<br /><br />

              // break condition<br />
              if(number &#60; 0)  &#123;<br />
              break;<br />
              &#125;<br /><br />

              // add all positive numbers<br />
              sum += number;<br /><br />

              &#125;<br /><br />

              // display the sum<br />
              console.log(`The sum is $&#123;sum &#125;.`);<br /><br />
            </p>

          </div>
          <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
          <div className='bg-light-dark p-5 mb-6 mt-6'>
            <p className='medium_text'>Enter a number: 1</p>
            <p className='medium_text'>Enter a number: 2</p>
            <p className='medium_text'>Enter a number: 3</p>
            <p className='medium_text'>Enter a number: -5</p>
            <p className='medium_text'>The sum is 6. </p>
          </div>
          <p className='main_text mb-4'>In the above program, the user enters a number. The while loop is used to print the total sum of numbers entered by the user.</p>
          <p className='main_text mb-4'>Here the break statement is used as:</p>
          <div className='bg-light-dark p-5 mb-6 mt-6'>
            <p className='medium_text'>
              if(number &#60; 0) &#123; <br />
              break;<br />
              &#125;<br />
            </p>
          </div>
          <p className='main_text mb-4'>When the user enters a negative number, here -5, the break statement terminates the loop and the control flow of the program goes outside the loop.</p>
          <p className='main_text mb-4'>Thus, the while loop continues until the user enters a negative number.</p>
          <p className='main_text '>To learn more about while loop, visit JavaScript while loop.</p>
        </div>
      </section>
    </>
  )
}

export default Examples