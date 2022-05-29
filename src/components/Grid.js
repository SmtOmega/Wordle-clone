import Row from "./Row"


const Grid = ({currentGuess, turn, guesses}) => {
    return <div>
        {guesses.map((guess, i) => {
            if(turn === i){
                return <Row key={i} currentGuess={currentGuess}/>
            }
            return <Row  key={i} guess={guess}/>
        })}
    </div>
}

export default Grid