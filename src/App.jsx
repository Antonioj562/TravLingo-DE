import { useState } from 'react'
import FlashCard from './components/FlashCard'
import flag from './assets/flagAmerGer.png'
import './App.css'
// check if active == true or false to display german or enlish. on click changes active 
const App = () => {
  const [count, setCount] =useState(0);
  const [prev, setPrev] = useState(0);
  const [value, setValue] = useState('');
  const [guessResult, setGuessResult] = useState('');
  const [streak, setStreak] = useState(0);

  let temp1 = [];
  let temp2 = [];

  const [travelPhrases, setTravelPhrases] = useState([
    ["Good morning", "Guten Morgen", "#00A676"],
    ["Good day", "Guten Tag", "#00A676"],
    ["Good evening", "Guten Abend", "#00A676"],
    ["Yes, please!", "Ja, bitte!", "#00A676"],
    ["No, thank you.", "Nein, danke.", "#00A676"],
    ["One moment, please.", "Einen Moment, bitte", "#00A676"],
    ["I have a question", "Ich habe eine Frage.", "#00A676"],
    ["Left or right?", "Links oder rechts?", "#00A676"],
    ["Where is the store?", "Wo ist der Laden?", "#00A676"],
    ["Where do you come from?", "Woher kommen Sie?", "#00A676"],
    ["What is your name?", "Wie heißen Sie?", "#00A676"],
    ["Do you speak English?", "Sprechen Sie Englisch?", "#00A676"],
    ["Thank you, have a good day", "Danke dir, habe einen guten Tag", "#cac02f"],
    ["Where is the coffee shop?", "Wo ist das Café?", "#cac02f"],
    ["Where is the restroom?", "Wo ist die Toilette?", "#cac02f"],
    ["I speak a little German", "Ich spreche ein wenig Deutsch", "#cac02f"],
    ["How much does it cost?", "Wie viel kostet es?", "#cac02f"],
    ["Would you like to join?", "Haben Sie Lust mitzugehen?", "#cac02f"],
    ["This is my first time here.", "Ice bin zum ersten Mal hier.", "#cac02f"],
    ["Hello, nice to meet you", "Hallo, schön dich kennen zu lernen", "#cac02f"],
    ["Goodbye, thank you for your time", "Auf Wiedersehen, vielen Dank für Ihre Zeit", "#FC3936"],
    ["Excuse me, could you please help me", "Entschuldigung, könnten Sie mir bitte helfen?", "#FC3936"],
    ["Could you repeat that slowly, please?", "Könnten Sie das bitte langsam wiederholen?", "#FC3936"],
    ["Is it around the corner or down the street?", "Ist es um die Ecke oder die Straße runter?", "#FC3936"],
    ["Can you recommend a good place to eat that is nearby?", "Können Sie mir ein gutes Restaurant in der Nähe empfehlen?", "#FC3936"],
    ["I'm a tourist enjoying the sights and sounds of new places.", "Ich bin ein Tourist, der die Sehenswürdigkeiten und Klänge neuer Orte genießt.", "#FC3936"],
    ["I've lost my way; could you please direct me to the nearest landmark?", "Ich habe mich verlaufen; Könnten Sie mich bitte zum nächsten Wahrzeichen führen?", "#FC3936"]
  ]);
  const handlePrevClick = () => {
    if (count === 0){
      setCount(travelPhrases.length-1);
    }else {
      setCount(count-1)
    }
      
    setGuessResult('');
  }

  const handleNextClick = () => {
    if (count === (travelPhrases.length-1)){
      setCount(0)
    }else {
      setCount(count+1)
    }
    setGuessResult('');
  }
  function getRandomNumber(size) { 
    const randomNumber = Math.floor( Math.random() * (size-1) ) + 1; 
    return randomNumber; 
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

const handleSubmitGuess = () => {
  const germanText = travelPhrases[count][1];
  if(value.trim().toLowerCase() === germanText.toLowerCase()) {
    setGuessResult('Correct!');
    setStreak(streak+1);
  } else {
    setGuessResult('Incorrect!');
    setStreak(0);
  }
}

function handleShuffle (){
  const shuffledPhrases = [...travelPhrases];
  for (let i = shuffledPhrases.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledPhrases[i], shuffledPhrases[randomIndex]] = [shuffledPhrases[randomIndex], shuffledPhrases[i]];
  }
  setCount(0);
  setGuessResult('');
  setTravelPhrases(shuffledPhrases);
}

  return (
      <div className='mainPage'>
        <div className='flagContainer'>
          <img className='flagImg' src={flag} alt="German Flag" width={200}/>
        </div>
        <div className='titleContainer'>
          <h1>TravLingo-DE</h1>
          <h2>Quick flash cards for traveling phrases to Germany!</h2>
          <h4>Number of phrases: 27</h4>
          <h4>Click the card below to view translations.</h4>
          <h4>Phrase: {count + 1}</h4>
          <h4>Streak: {streak}</h4>
        </div>

        <FlashCard 
          englishText = {travelPhrases[count][0]}
          germanText = {travelPhrases[count][1]}
          colorDifficulty = {travelPhrases[count][2]}
          count = {count}
          setCount = {setCount}
          />

        <div className='nextQuestionButton'>
          <button className='nextBtn'  onClick={handlePrevClick}>{'< Prev'}</button>
          <button className='nextBtn'  onClick={handleNextClick}>{'Next > '}</button>
          <br></br>
          <form>
            <input className='usrInput' type="text" name="fname" value={value} onChange={handleChange} placeholder='Guess German translation' />
            <input className='nextBtn' type="button" value="Submit Guess" onClick={handleSubmitGuess}/>
            {<div className='guessResult'>{guessResult}</div> && <div className='guessResult'>{guessResult}</div>}
          </form>
        </div>
        <button className='nextBtn' onClick={handleShuffle}>Shuffle Cards</button>
      </div>
  )
}

export default App
