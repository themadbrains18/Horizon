import React from 'react'

const Define = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom '>
                    <h1 className='large_heading'>JavaScript Methods and this Keyword</h1>
                    <p className='main_text mb-4 '>In this tutorial, you will learn about JavaScript object methods and this keyword with the help of examples.</p>
                    <p className='main_text mb-4 '>In JavaScript, objects can also contain functions. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // object containing method <br />
                            const person =  &#123; <br />
                            name: 'John',<br />
                            greet: function()  &#123;  console.log('hello');  &#125; <br />
                            &#125;;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4 '>In the above example, a person object has two keys (name and greet), which have a string value and a function value, respectively.</p>
                    <p className='main_text mb-4 '>Hence basically, the JavaScript method is an object property that has a function value.</p>
                </div>
                <div className="pt-10">
                    <h3 className='sec_heading mb-4'>Accessing Object Methods</h3>
                    <p className='main_text mb-4 '>You can access an object method using a dot notation. The syntax is:</p>
                    <p className='main_text mb-4 '>In JavaScript, objects can also contain functions. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>objectName.methodKey() </p>
                    </div>
                    <p className='main_text mb-4 '>You can access property by calling an objectName and a key. You can access a method by calling an objectName and a key for that method along with (). For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // accessing method and property<br />
                            const person = &#123;<br />
                            name: 'John',<br />
                            greet: function() &#123;console.log('hello'); &#125;<br />
                            &#125;;<br /><br />

                        // accessing property<br />
                            person.name; // John<br /><br />

                        // accessing method<br />
                            person.greet(); // hello<br />
                        </p>
                    </div>
                    <p className='main_text mb-4 '>Here, the greet method is accessed as person.greet() instead of person.greet.</p>
                    <p className='main_text mb-4 '>If you try to access the method with only person.greet, it will give you a function definition.</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'> person.greet; // ƒ () &#123; console.log('hello'); &#125;</p>
                    </div>
                </div>
                <div className='pb-10 border_bottom'>
                    <h3 className='sec_heading mb-8'>JavaScript Built-In Methods</h3>
                    <p className='main_text mb-4 '>In JavaScript, there are many built-in methods. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            let number = '23.32'; <br />
                            let result = parseInt(number);<br /><br />

                            console.log(result); // 23<br />
                        </p>
                    </div>
                    <p className='main_text mb-4 '>Here, the parseInt() method of Number object is used to convert numeric string value to an integer value.</p>
                    <p className='main_text'>To learn more about built-in methods, visit JavaScript Built-In Methods.</p>
                </div>
                <div className='pt-10'>
                    <h3 className='sec_heading mb-4'>Adding a Method to a JavaScript Object</h3>
                    <p className='main_text mb-4 '>You can also add a method in an object. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // creating an object<br />
                            let student = &#123; &#125;;<br /><br />

                            // adding a property<br />
                            student.name = 'John';<br /><br />

                            // adding a method<br />
                            student.greet = function() &#123;<br />
                            console.log('hello');<br />
                            &#125;<br /><br />

                            // accessing a method<br />
                            student.greet(); // hello<br />
                        </p>
                    </div>
                    <p className='main_text mb-4 '>In the above example, an empty student object is created. Then, the name property is added. Similarly, the greet method is also added. In this way, you can add a method as well as property to an object.</p>

                </div>
            </section>
        </>
    )
}

export default Define