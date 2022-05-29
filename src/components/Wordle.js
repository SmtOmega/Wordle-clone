import { useEffect, useState } from "react";
import useWordle from "../customHook/useWordle";
import Grid from "./Grid";
import Keypads from "./Keypads";
import Modal from "./Modal";

const Wordle = ({ solution }) => {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyUp } =
    useWordle(solution.word);

    const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
        setTimeout(() => setShowModal(true), 3000)
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
        setTimeout(() => setShowModal(true), 3000)
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <div>
      <div>Current guess is : {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypads usedKeys={usedKeys} />
      {showModal && <Modal turn={turn} isCorrect={isCorrect} solution={solution}/>}
    </div>
  );
};

export default Wordle;
