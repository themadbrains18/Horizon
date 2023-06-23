import React from 'react'
import Image from 'next/image'
import gameDev from '/public/game-example.webp'
const GameDevelopment = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>5. Game Development</h3>
                    <p className='main_text mb-4'>JavaScript is also used for game development.</p>
                    <p className='main_text mb-4'>Various JavaScript libraries such as Three.js, TweenMax could be used to create browser games.</p>
                    <p className='main_text mb-4'>Other popular JS gaming engines and libraries are GDevelop, melonJS, ImpactJS, BabylonJS, PhaserJS, PixiJS, PlayCanvas, A-Frame.</p>
                    <p className='main_text mb-4'>Some libraries even allow you to export your games into other platforms such as Android, iOS, etc.</p>
                    <p className='main_text mb-4'>Here is an image of a game developed in JavaScript.</p>
                    <Image src={gameDev} width={650} height={590} alt='generator function img' className='bg-white my-6' />
                </div>
            </section>
        </>
    )
}

export default GameDevelopment