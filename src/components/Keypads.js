import { useEffect, useState } from "react";

const Keypads = ({usedKeys}) => {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((data) => setLetters(data));
  }, []);
  return (
    <div className="keypad">
      {letters &&
        letters.map((letter) => {
            const color = usedKeys[letter.key]
          return <div key={letter.key} className={color}>{letter.key}</div>;
        })}
    </div>
  );
};

export default Keypads;
