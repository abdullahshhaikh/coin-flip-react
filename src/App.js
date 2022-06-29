import "./App.css";
import AppHeading from "./components/AppHeading";
import Coin from "./components/Coin";
import Button from "./components/Button";
import Data from "./components/Data";
import { useState } from "react";

function App() {
  const headURL =
    "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg";
  const tailURL =
    "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg";

  const [value, setValue] = useState(headURL);
  const [headFace,setHeadFace] = useState(0);
  const [tailFace,setTailFace] = useState(0);
  const [headOrTail,setHeadOrTail] = useState("Head");

  const generateNumber = (number) => {
    
    if (number === 0) {
      setValue(headURL);
      setHeadOrTail("Head");
      setHeadFace((prevValue)=>{
      return prevValue + 1;
      })
    } else {
      setValue(tailURL);
      setHeadOrTail("Tail")
      setTailFace((prevValue)=>{
        return prevValue + 1;
        })
    }
  };

  return (
    <div className="App">
      <div className="main-div">
        <AppHeading />
        <div>
          <Coin imgSrc={value} />
          <Button randomNumber={generateNumber} />
          <Data headValue = {headFace} tailValue={tailFace} headOrTail={headOrTail}/>
        </div>
      </div>
    </div>
  );
}

export default App;
