import React from 'react'

const ForOfWithMaps = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>for...of with Maps</h3>
                    <p className='main_text mb-4'>
                        You can iterate through Map elements using the <code className='code_border'>for..of</code> loop. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // define Map <br />
                            let map = new Map();<br /><br />

                        // inserting elements<br />
                            map.set('name', 'Jack');<br />
                            map.set('age', '27');<br /><br />

                        // looping through Map<br />
                            for (let [key, value] of map) &#123;<br />
                            console.log(key + '- ' + value);<br />
                            &#125;<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            name- Jack<br />
                            age- 27
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForOfWithMaps