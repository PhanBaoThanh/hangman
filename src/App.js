import './App.scss';
import {useState,useEffect} from 'react'
import Figure from './components/Figure/Figure';
import Header from './components/Header/Header';
import Word from './components/Word/Word';
import WrongLetter from './components/WrongLetter/WrongLetter'
import { showNotifications } from './components/Helper/Helper';
import Popup from './components/Popup/Popup';
import Notification from './components/Notification/Notification';

const words = ['application','programing','interface','wizard']
let selectedWord = words[Math.floor(Math.random() * words.length)]

function App() {
  const [playable,setPlayable] = useState(true)
  const [correctLetters,setCorrectLetters] = useState([])
  const [wrongLetters,setWrongLetters] = useState([])
  const [showNotification,setShowNotification] = useState(false)

  useEffect(() => {
    const handleKeydown = event => {
      const {key,keyCode} = event
      if(playable && keyCode >= 65 && keyCode <= 90){
        const letter = key.toLowerCase()
        if(selectedWord.includes(letter))
          if(!correctLetters.includes(letter))
            setCorrectLetters(prev => [...prev,letter])
          else
            showNotifications(setShowNotification)
        else
          if(!wrongLetters.includes(letter))
            setWrongLetters(prev => [...prev,letter])
          else
            showNotifications(setShowNotification)
      }
    }

    window.addEventListener('keydown',handleKeydown)

    return () => window.removeEventListener('keydown',handleKeydown)
    // eslint-disable-next-line
  },[correctLetters,wrongLetters,playable])

  function playAgain(){
    setPlayable(true)
    setCorrectLetters([])
    setWrongLetters([])

    selectedWord = words[Math.floor(Math.random() * words.length)]
  }
  
  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetter wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup playAgain={playAgain} correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
