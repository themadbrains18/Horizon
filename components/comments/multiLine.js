import React from 'react'

const MultiLine = () => {
  return (
    <section className='bg-dark pb-10 border_bottom'>
    <div className=''>
        <h2 className='sec_heading mt-10 mb-6'>Multi-line Comments</h2>
        <p className='main_text mb-6'>In Javascript, any text between /*  and  */ is a multi-line comment. For example,</p>
        <div className='bg-light-dark p-3 mb-6'>
            <p className='medium_text'>
            /* The following program contains the source code for a game called Baghchal. 

            Baghchal is a popular board game in Nepal where two players choose either sheep or tiger. It is played on a 5x5 grid.
            
            For the player controlling the tiger to win, they must capture all the sheep. There are altogether 4 tigers on the board.
            
            For the sheep to win, all tigers must be surrounded and cornered so that they cannot move. The player controlling the sheep has 20 sheep at his disposal.
            */
            </p>
        </div>
        <p className='main_text'>Since the rest of the source code will be used to implement the rules of the game, the comment above is a good example where you might use a multi-line comment.</p>
    </div>
</section>
  )
}

export default MultiLine