import React from 'react'

const Examples = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='border_bottom '>
                    <h2 className='sec_heading mt-10 mb-6'>Example 1: Simple Program Using switch Statement</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // program using switch statement<br />
                            let a = 2;<br /><br />

                            switch (a)  &#123;<br /><br />

                            case 1:<br />
                            a = 'one';<br />
                            break;<br />
                            case 2:<br />
                            a = 'two';<br />
                            break;<br />
                            default:<br />
                            a = 'not found';<br />
                            break;<br />
                            &#125;<br />
                            console.log(`The value is $ &#123;a &#125;`);<br />
                        </p>

                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>The value is two.</p>
                    </div>
                    <p className='main_text mb-6'>In the above program, an expression a = 2 is evaluated with a switch statement.</p>
                    <ul>
                        <li className='main_text mb-6 list-disc'>The expression's result is evaluated with case 1 which results in false.</li>
                        <li className='main_text mb-6 list-disc'>Then the switch statement goes to the second case. Here, the expression's result matches with case 2. So The value is two is displayed.</li>
                        <li className='main_text mb-6 list-disc'>The break statement terminates the block and control flow of the program jumps to outside of the switch block.</li>
                    </ul>

                </div>


                <div>
                    <h2 className='sec_heading mt-10 mb-6'>  Example 2: Type Checking in switch Statement</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                    // program using switch statement<br />
                            let a = 1;<br /><br />

                            switch (a)  &#123;<br />
                            case "1":<br />
                            a = 1;<br />
                            break;<br />
                            case 1:<br />
                            a = 'one';<br />
                            break;<br />
                            case 2:<br />
                            a = 'two';<br />
                            break;<br /><br />

                            default:<br />
                            a = 'not found';<br />
                            break;<br />
                            &#125;
                            console.log(`The value is $ &#123;a &#125;`);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>The value is one.</p>
                    </div>
                    <p className='main_text mb-6'>In the above program, an expression a = 1 is evaluated with a switch statement.</p>
                    <ul>
                        <li className='main_text mb-6 list-disc'>In JavaScript, the switch statement checks the value strictly. So the expression's result does not match with case "1".</li>
                        <li className='main_text mb-6 list-disc'>Then the switch statement goes to the second case. Here, the expressions's result matches with case 1. So The value is one is displayed.</li>
                        <li className='main_text mb-6 list-disc'>The break statement terminates the block and control flow of the program jumps to outside of the switch block.</li>
                    </ul>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>In JavaScript, the switch statement checks the cases strictly (should be of the same data type) with the expression's result. Notice in the above example, 1 does not match with "1".</p>
                    </div>
                </div>


                <div>
                    <p className='main_text mt-10 mb-6'>Let's write a program to make a simple calculator with the switch statement.</p>
                    <h2 className='sec_heading  mb-6'>Example 3: Simple Calculator</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // program for a simple calculator<br />
                            let result;<br /><br />

                        // take the operator input<br />
                            const operator = prompt('Enter operator ( either +, -, * or / ): ');<br /><br />

                        // take the operand input<br />
                            const number1 = parseFloat(prompt('Enter first number: '));<br />
                            const number2 = parseFloat(prompt('Enter second number: '));<br /><br />

                            switch(operator) &#123;<br />
                            case '+':<br />
                            result = number1 + number2;<br />
                            console.log(`$&#123;number1&#125; + $&#123;number2&#125; = $&#123;result&#125;`);<br />
                            break;<br />
                            case '-':<br />
                            result = number1 - number2;<br />
                            console.log(`$&#123;number1&#125; - $&#123;number2&#125; = $&#123;result&#125;`);<br />
                            break;<br />
                            case '*':<br />
                            result = number1 * number2;<br />
                            console.log(`$&#123;number1&#125; * $&#123;number2&#125; = $&#123;result&#125;`);<br />
                            break;<br />
                            case '/':<br />
                            result = number1 / number2;<br />
                            console.log(`$&#123;number1&#125; / $&#123;number2&#125; = $&#123;result&#125;`);<br />
                            break;<br /><br />

                            default:<br />
                            console.log('Invalid operator');<br />
                            break;<br />
                            &#125;<br />

                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Enter operator: +<br />
                            Enter first number: 4<br />
                            Enter second number: 5<br />
                            4 + 5 = 9<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>In above program, the user is asked to enter either +, -, * or /, and two operands. Then, the switch statement executes cases based on the user input.</p>
                </div>
                <div>
                    <h1 className='large_heading mb-6'> JavaScript switch With Multiple Case</h1>
                    <p className='main_text mb-6'>In a JavaScript switch statement, cases can be grouped to share the same code.</p>
                    <h2 className='sec_heading mt-10 mb-6'>Example 4: switch With Multiple Case</h2>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                    // multiple case switch program <br/>
                            let fruit = 'apple';<br/>
                            switch(fruit)   &#123;<br/>
                            case 'apple':<br/>
                            case 'mango':<br/>
                            case 'pineapple':<br/>
                            console.log(`$&#123;fruit&#125; is a fruit.`);<br/>
                            break;<br/>
                            default:<br/>
                            console.log(`$&#123;fruit&#125; is not a fruit.`);<br/>
                            break;<br/>
                            &#125;<br/>
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>apple is a fruit.</p>
                    </div>
                    <p className='main_text mb-6'>In the above program, multiple cases are grouped. All the grouped cases share the same code.</p>
                    <p className='main_text mb-6'>If the value of the fruit variable had value mango or pineapple, the output would have been the same.</p>
                </div>
            </section>
        </>
    )
}

export default Examples