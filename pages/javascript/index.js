import React from 'react'
import TopicsBar from '@/components/snippets/topicsBar'

const Javascript = () => {
    return (
        <>
            <main className='bg-dark'>
                <div className='container'>
                    <div className='grid_layout gap-[30px]'>
                        <div>
                            <div className='p-5 border-[1px] border-[#37474F] rounded-lg'>
                               <TopicsBar />
                            </div>
                        </div>
                      
                    </div>
                </div>
            </main>
        </>
    )
}

export default Javascript