import React from 'react'
import Image from 'next/image'

import main from '/public/main-js.png'
import mainHtml from '/public/main-html.png'
import consoleTab from '/public/console-tab.png'



const ByWebPage = () => {
    return (
        <section className='bg-dark pb-10 border_bottom'>
            <div className=''>
                <h1 className='sec_heading mb-6'>By Creating Web Pages</h1>
                <p className='main_text pb-10'>NJavaScript was initially created to make web pages interactive, that's why JavaScript and HTML go hand in hand. To run JS from a webpage, follow these steps:</p>
                <ol className='pb-10'>
                    <li className='main_text pb-6'>1.Open VS Code &gt; Go to File &gt; New File &gt; Save it with .html extension. For example, main.html.</li>
                    <li className='main_text pb-6'>2. Copy this doctype (minimum valid HTML code) and save it in the file.
                        <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE] mt-6'>
                            <pre>
                                &lt;!doctype html&gt; <br /><br />

                                &lt;html lang="en"&gt;<br />
                                &lt;head&gt;<br />
                                &lt;meta charset="utf-8" &gt;<br /><br />

                                &lt;title&gt;Programiz&lt;/title&gt;<br />
                                &lt;/head&gt;<br /><br />

                                &lt;body&gt;<br />
                                &lt;script src=""&gt;&lt;/script&gt;<br />
                                &lt;/body&gt;<br />
                                &lt;/html&gt;<br />
                            </pre>
                        </div>
                    </li>
                    <li className='main_text pb-6'>3.Similarly create a JS file, write the following JS code and save it with .js extension like main.js.
                        <div className='bg-light-dark p-5 mt-6 border-l-2 border-[#54D7CE]'>
                            <p className='medium_text'>console.log('hello world');</p>
                        </div>
                        <Image src={main} width={1000} height={468} alt='inspect photo' className='py-6 ' />
                    </li>
                    <li className='main_text pb-6'>4. From inside the HTML file, we need to link the main.js file to use it. You can achieve that by adding the following code in main.html.
                        <div className='bg-light-dark p-5 my-6 border-l-2 border-[#54D7CE]'>
                            <p className='medium_text'> &lt;script scr="main.js"&gt; &lt;/script&gt;</p>
                        </div>
                        <Image src={mainHtml} width={650} height={458} alt='inspect photo' className='py-6 ' />
                    </li>
                    <li className='main_text pb-6'>5. Open the main.html file using a browser.</li>
                    <li className='main_text pb-6'>6. To check if our JS code ran or not, Right click on the web page &gt; Inspect &gt; Choose console tab.</li>
                    <Image src={consoleTab} width={650} height={468} alt='inspect photo' className='pb-6 ' />
                </ol>
               <p className='main_text pb-6'>Now that you know how to run JavaScript, let's start learning the fundamentals of JavaScript from the next tutorial.</p>
            </div>
        </section>
    )
}

export default ByWebPage