import { useState } from 'react'
import './App.css'

function App() {
  const [inputData,setInputData] = useState("")

   const handleCalculation = () =>{
    try
    {
      const result = eval(inputData);
      setInputData(result.toString());
    }
    catch(err)
    {
       setInputData("Invalid Expression")
    }
  }


  return (
    <div className='container'>
      <div className="calcContainer">
        <div className="calcTxtbox">
        <input  type="text" value={inputData === ""?"0":inputData} readOnly />
        </div>
        <div className="calcButtons">
          <button className='btn1'  onClick={e => setInputData("")}>AC</button>
          <button onClick={e => setInputData(inputData.slice(0,-1))}>DEL</button>
          <button value="/" onClick={e => setInputData(inputData + e.target.value)}>/</button>
          <button value="7" onClick={e => setInputData(inputData + e.target.value)}>7</button>
          <button value="8" onClick={e => setInputData(inputData + e.target.value)}>8</button>
          <button value="9" onClick={e => setInputData(inputData + e.target.value)}>9</button>
          <button value="*" onClick={e => setInputData(inputData + e.target.value)}>*</button>
          <button value="4" onClick={e => setInputData(inputData + e.target.value)}>4</button>
          <button value="5" onClick={e => setInputData(inputData + e.target.value)}>5</button>
          <button value="6" onClick={e => setInputData(inputData + e.target.value)}>6</button>
          <button value="+" onClick={e => setInputData(inputData + e.target.value)}>+</button>
          <button value="1" onClick={e => setInputData(inputData + e.target.value)} >1</button>
          <button value="2" onClick={e => setInputData(inputData + e.target.value)}>2</button>
          <button value="3" onClick={e => setInputData(inputData + e.target.value)}>3</button>
          <button value="-" onClick={e => setInputData(inputData + e.target.value)}>-</button>
          <button value="0" onClick={e => setInputData(inputData + e.target.value)}>0</button>
          <button value="." onClick={e => setInputData(inputData + e.target.value)}>.</button>
          <button className='btn2' onClick={handleCalculation}>=</button>
        </div>
      </div>
     
    </div>
  )
}

export default App
