import React from 'react'

const Benefits = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                    <h1 className='sec_heading mb-6'>Benefit of Using Symbols in Object</h1>
                    <p className='main_text mb-4'>If the same code snippet is used in various programs, then it is better to use Symbols in the object key. It's because you can use the same key name in different codes and avoid duplication issues. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            let person = &#123; <br />
                            name: "Jack"<br />
                            &#125;;<br /><br />

                        // creating Symbol<br />
                            let id = Symbol("id");<br /><br />

                        // adding symbol as a key<br />
                            person[id] = 12;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, if the person object is also used by another program, then you wouldn't want to add a property that can be accessed or changed by another program. Hence by using Symbol, you create a unique property that you can use.</p>
                    <p className='main_text mb-4'>Now, if the other program also needs to use a property named id, just add a Symbol named id and there won't be duplication issues. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            let person = &#123; <br />
                            name: "Jack"<br />
                            &#125;;<br /><br />

                            let id = Symbol("id");<br /><br />

                            person[id] = "Another value";<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, even if the same name is used to store values, the Symbol data type will have a unique value.</p>
                    <p className='main_text mb-4'>In the above program, if the string key was used, then the later program would have changed the value of the property. For example,</p>

                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            let person = &#123;<br />
                            name: "Jack"<br />
                            &#125;;<br /><br />

                    // using string as key<br />
                            person.id = 12;<br />
                            console.log(person.id); // 12<br /><br />

                    // Another program overwrites value<br />
                            person.id = 'Another value';<br />
                            console.log(person.id); // Another value<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the second user.id overwrites the previous value.</p>
               
            </section>
        </>
    )
}

export default Benefits