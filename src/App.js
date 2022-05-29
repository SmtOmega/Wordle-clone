import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const  [soluton, setSolution] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((data) => {
        const randomNum = Math.floor(Math.random() * data.length)
        setSolution(data[randomNum])
        
      });
  }, [setSolution]);

 
  return (
    <div>
      <h1>Wordle Clone</h1>
      {soluton && <Wordle solution={soluton}/>}
    </div>
  );
}

export default App;
