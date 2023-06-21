import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='large_heading mb-6'>JavaScript Destructuring Assignment</h3>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript destructuring assignment with the help of examples.</p>
                    <h3 className='sec_heading mb-4'>JavaScript Destructuring</h3>
                    <p className='main_text mb-4'>The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,</p>
                    <p className='main_text mb-4 !font-extrabold'>Before ES6:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // assigning object attributes to variables <br />
                            const person = &#123;<br />
                            name: 'Sara',<br />
                            age: 25,<br />
                            gender: 'female'    <br />
                            &#125;<br /><br />

                            let name = person.name;<br />
                            let age = person.age;<br />
                            let gender = person.gender;<br /><br />

                            console.log(name); // Sara<br />
                            console.log(age); // 25<br />
                            console.log(gender); // female<br />
                        </code>
                    </div>
                    <p className='main_text mb-4 !font-extrabold'>From ES6:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // assigning object attributes to variables<br />
                            const person =  &#123;<br />
                            name: 'Sara',<br />
                            age: 25,<br />
                            gender: 'female'    <br />
                            &#125;<br /><br />

                        // destructuring assignment<br />
                            let  &#123; name, age, gender  &#125; = person;<br /><br />

                            console.log(name); // Sara<br />
                            console.log(age); // 25<br />
                            console.log(gender); // female<br />
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The order of the name does not matter in object destructuring.</p>
                    </div>
                    <p className='main_text mb-4'>For example, you could write the above program as:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let &#123;age, gender, name&#125; = person;
                            console.log(name); // Sara
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>When destructuring objects, you should use the same name for the variable as the corresponding object key.</p>
                    </div>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let &#123;name1, age, gender&#125; = person;
                            console.log(name1); // undefined
                        </code>
                    </div>
                    <p className='main_text mb-4'>If you want to assign different variable names for the object key, you can use:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const person = &#123;<br />
                            name: 'Sara',<br />
                            age: 25,<br />
                            gender: 'female'    <br />
                            &#125;<br /><br />

                    // destructuring assignment<br />
                    // using different variable names<br />
                            let &#123; name: name1, age: age1, gender:gender1 &#125; = person;<br /><br />

                            console.log(name1); // Sara<br />
                            console.log(age1); // 25<br />
                            console.log(gender1); // female<br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction