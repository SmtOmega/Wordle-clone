const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution.word}</p>
          <p>you found in {turn} guesses</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Never Mind!</h1>
          <p className="solution">{solution.word}</p>
          <p>you ran out of guesses; Better luck next time</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
