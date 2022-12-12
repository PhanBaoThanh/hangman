import React from 'react'

const Word = ({selectedWord,correctLetters}) => {
  return (
    <div className='word'>
        {
            selectedWord.length > 0 && selectedWord.split('').map((item,index) => (
                <span key={index} className='letter'>
                    {correctLetters.includes(item) ? item : ''}
                </span>
            ))
        }
    </div>
  )
}

export default Word