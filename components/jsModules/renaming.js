import React from 'react'

const Renaming = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h2 className='sec_heading mt-10 mb-6'>Renaming imports and exports</h2>
                    <p className='main_text mb-4'>If the objects (variables, functions etc.) that you want to import are already present in your main file, the program may not behave as you want. In this case, the program takes value from the main file instead of the imported file.</p>
                    <p className='main_text mb-4'>To avoid naming conflicts, you can rename these functions, objects, etc. during the export or during the import . </p>
                    <h2 className='sec_heading mt-10 mb-6'>1. Rename in the module (export file)</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                    // renaming import inside module.js <br />
                            export &#123;<br />
                            function1 as newName1,<br />
                            function2 as newName2<br />
                            &#125;;<br /><br />

                    // when you want to use the module<br />
                    // import in the main file<br />
                            import &#123; newName1, newName2 &#125; from './module.js';<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here, while exporting the function from module.js file, new names (here, newName1 & newName2 ) are given to the function. Hence, when importing that function, the new name is used to reference that function.</p>
                </div>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>2. Rename in the import file</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                    // inside module.js <br />
                            export &#123;<br />
                            function1,<br />
                            function2<br />
                            &#125;;<br /><br />

                            // when you want to use the module<br />
                            // import in the required file with different name<br /><br />

                            import &#123;function1 as newName1, function2 as newName2&#125; from './module.js';<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here, while importing the function, the new names (here, newName1 & newName2 ) are used for the function name. Now you use the new names to reference these functions.</p>
                </div>
            </section>
        </>
    )
}

export default Renaming