
import { useState } from 'react'
import '../styles/flashcard.css'
import flagAmerican from '../assets/flagAmerican.png';
import flagGerman from '../assets/flagGerman.png';


const FlashCard = (props) => {
    const {englishText, germanText, colorDifficulty} = props
    const [cardFlip, setCardFlip] = useState(0);

    const handleDivClick = () => {
        if (cardFlip == 1){
            setCardFlip(cardFlip-1);
        } else {
            setCardFlip(cardFlip+1)
        }
    }

    return (
        <button className='cardContainer' 
        style={{ backgroundColor: colorDifficulty}} 
        onClick={handleDivClick}
            >
            {cardFlip==true ? (
                    <>
                        <img className='flagImg' src={flagGerman} alt="German Flag" width={100}/>
                        <GermanText germanText={germanText} />
                    </>
                ) : (
                    <>
                        <img className='flagImg' src={flagAmerican} alt="German Flag" width={100}/>
                        <EnglishText englishText={englishText}/>
                    </>
            )}
        </button>
    )
}


const GermanText = (props) => {
    return (
        <div>
            <h2>{props.germanText}</h2>
        </div>
    )
}

const EnglishText = (props) => {
    return (
        <div>
            <h2>{props.englishText}</h2>
        </div>
    )
}

export default FlashCard