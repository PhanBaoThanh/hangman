import React from 'react'

const WrongLetter = ({wrongLetters}) => {
  return (
    <div className='wrong-letters-container'>
        <div id='wrong-letters'>
          {wrongLetters.length.length > 0 && <p>Wrong</p>}
          {wrongLetters.length > 0 &&  wrongLetters
            .map((letter,index) => <span key={index}>{letter}</span>)
            .reduce((prev,curr) => prev === null ? [curr] : [[prev,', ',curr],null])  
          }
        </div>
    </div>
  )
}

export default WrongLetter