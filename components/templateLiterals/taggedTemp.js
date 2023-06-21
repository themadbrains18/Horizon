import React from 'react'

const TaggedTemp = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Tagged Templates</h3>
                    <p className='main_text mb-4'>Normally, you would use a function to pass arguments. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            function tagExample(strings) &#123;<br />
                            return strings;<br />
                            &#125;<br /><br />

                        // passing argument<br />
                            const result = tagExample('Hello Jack');<br /><br />

                            console.log(result);<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>However, you can create tagged templates (that behave like a function) using template literals. You use tags that allow you to parse template literals with a function.</p>
                    <p className='main_text mb-4'>Tagged template is written like a function definition. However, you do not pass parentheses () when calling the literal. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            function tagExample(strings) &#123; <br />
                            return strings;<br />
                            &#125;<br /><br />

                        // creating tagged template<br />
                            const result = tagExample`Hello Jack`;<br /><br />

                            console.log(result);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> ["Hello Jack"]</p>
                    </div>
                    <p className='main_text mb-4'>An array of string values are passed as the first argument of a tag function. You could also pass the values and expressions as the remaining arguments. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>
                            const name = 'Jack';<br />
                            const greet = true;<br /><br />

                            function tagExample(strings, nameValue) &#123;<br />
                            let str0 = strings[0]; // Hello<br />
                            let str1 = strings[1]; // , How are you?<br /><br />

                            if(greet) &#123;<br />
                            return `$&#123;str0&#125;$&#123;nameValue&#125;$&#123;str1&#125;`;<br />
                            &#125;<br />
                            &#125;<br /><br />

                            // creating tagged literal<br />
                            // passing argument name<br />
                            const result = tagExample`Hello $&#123;name&#125;, How are you?`;<br /><br />

                            console.log(result);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>Hello Jack, How are you?</p>
                    </div>
                    <p className='main_text mb-4'>In this way, you can also pass multiple arguments in the tagged temaplate.</p>
                </div>
            </section>
        </>
    )
}

export default TaggedTemp