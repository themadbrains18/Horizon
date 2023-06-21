import React from 'react'

const CopyArray = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Copy Array Using Spread Operator</h3>
                    <p className='main_text mb-4'>You can also use the <strong>spread syntax</strong> <code className="code_border">...</code> to copy the items into a single array. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const arr1 = ['one', 'two']; <br />
                            const arr2 = [...arr1, 'three', 'four', 'five'];<br /><br />

                            console.log(arr2); <br />
                        //  Output:<br />
                        //  ["one", "two", "three", "four", "five"]<br />
                        </code>
                    </div>

                </div>
                <div>
                    <h3 className='sec_heading mb-4'>Clone Array Using Spread Operator</h3>
                    <p className='main_text mb-4'>In JavaScript, objects are assigned by reference and not by values. For example,</p>
                    <div className='bg-light-dark p-5 mb-8 '>
                        <code>

                            let arr1 = [ 1, 2, 3]; <br />
                            let arr2 = arr1;<br /><br />

                            console.log(arr1); // [1, 2, 3]<br />
                            console.log(arr2); // [1, 2, 3]<br /><br />

                        // append an item to the array<br />
                            arr1.push(4);<br /><br />

                            console.log(arr1); // [1, 2, 3, 4]<br />
                            console.log(arr2); // [1, 2, 3, 4]<br />

                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, both variables arr1 and arr2 are referring to the same array. Hence the change in one variable results in the change in both variables.</p>
                    <p className='main_text mb-4'> However, if you want to copy arrays so that they do not refer to the same array, you can use the spread operator. This way, the change in one array is not reflected in the other. For example,</p>
                    <div className='bg-light-dark p-5 mb-8 '>
                        <code>
                            let arr1 = [ 1, 2, 3]; <br /><br />

                        // copy using spread syntax<br />
                            let arr2 = [...arr1];<br /><br />

                            console.log(arr1); // [1, 2, 3]<br />
                            console.log(arr2); // [1, 2, 3]<br /><br />

                        // append an item to the array<br />
                            arr1.push(4);<br /><br />

                            console.log(arr1); // [1, 2, 3, 4]<br />
                            console.log(arr2); // [1, 2, 3]<br />
                        </code>
                    </div>

                </div>
            </section>
        </>
    )
}

export default CopyArray