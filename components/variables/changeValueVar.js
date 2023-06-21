import React from 'react'

const ChangeValueVar = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom '>
                <h1 className='large_heading mb-6'>Change the Value of Variables</h1>
                <p className='main_text mb-6'>It's possible to change the value stored in the variable. For example,</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 main_text'>
                // 5 is assigned to variable x<br/>
                let x = 5; <br/>
                console.log(x); // 5<br/><br/>
                
                // vaue of variable x is changed<br/>
                x = 3; <br/>
                console.log(x); // 3<br/>
                </div>
                <p className='main_text'>The value of a variable may vary. Hence, the name variable.</p>     
            </section>
        </>
    )
}

export default ChangeValueVar