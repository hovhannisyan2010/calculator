import { useState } from "react";
import * as math from "mathjs"

import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";

const App = () => {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToText = (val) => {
    setText((text) => [...text, val + " "])
  }

  const resetInput = () => {
    setText("")
    setResult("")
  }

  const calculatorResult = () => {
    if(text !== ""){
      const input = text.join("")
      setResult(math.evaluate(input))
    }
  }


  const buttonColor = "#f2a33c"
  return <div className="App">
    <div className="calc-wrapper">
      <Input text={text} result={result} />
      <div className="row">
        <Button symbol="7" handleClick={addToText} />
        <Button symbol="8" handleClick={addToText} />
        <Button symbol="9" handleClick={addToText} />
        <Button symbol="/" color={buttonColor} handleClick={addToText}/>
      </div>
      <div className="row">
        <Button symbol="4" handleClick={addToText}/>
        <Button symbol="5" handleClick={addToText}/>
        <Button symbol="6" handleClick={addToText}/>
        <Button symbol="*" color={buttonColor} handleClick={addToText}/>
      </div>
      <div className="row">
        <Button symbol="1" handleClick={addToText}/>
        <Button symbol="2" handleClick={addToText}/>
        <Button symbol="3" handleClick={addToText}/>
        <Button symbol="+" color={buttonColor} handleClick={addToText}/>
      </div>
      <div className="row">
        <Button symbol="0" handleClick={addToText}/>
        <Button symbol="." handleClick={addToText}/>
        <Button symbol="=" handleClick={calculatorResult}/>
        <Button symbol="-" color={buttonColor} handleClick={addToText}/>
      </div>
      <Button symbol="Clear" color="red" handleClick={resetInput}/>

    </div>
  </div>
};

export default App;