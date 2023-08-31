import React, { useState } from 'react'
import './CalculatorDark.css'


export default function Calculator() {

  const[result, setResult] = useState(0)
  
    function insert (e) {
      let number = e.target.value;

      if (result === 0) {
        setResult(number)
      }
      else{
      setResult(result + number)
      }
    }


    function clear() {
      setResult(0)
    }


    function porcent() {
      setResult(result / 100)
    }


    function operatorHandler() {
      if (result > 0) {
        setResult(-result)
      }
      else {
        setResult(Math.abs(result))
      }
    }

    
    function backSpace() {
      const backSpace = result.slice(0, -1);
      setResult(backSpace)
    }


    function calculate() {
      setResult(eval(result))
    }
  
    
  return (
    <div className='wrapper'>
      <div id="calc">{result}</div>
      <button className='red' onClick={clear}>C</button>
      <button value={'bs'} className='green' onClick={backSpace}>&lt;</button>
      <button value={'%'} className='green' onClick={porcent}>%</button>
      <button value={'/'} className='green' onClick={insert}>/</button>
      <button value={7} className='white' onClick={insert}>7</button>
      <button value={8} className='white' onClick={insert}>8</button>
      <button value={9} className='white' onClick={insert}>9</button>
      <button value={'*'} className='green' onClick={insert}>X</button>
      <button value={4} className='white' onClick={insert}>4</button>
      <button value={5} className='white' onClick={insert}>5</button>
      <button value={6} className='white' onClick={insert}>6</button>
      <button value={'-'} className='green' onClick={insert}>-</button>
      <button value={1} className='white' onClick={insert}>1</button>
      <button value={2} className='white' onClick={insert}>2</button>
      <button value={3} className='white' onClick={insert}>3</button>
      <button value={'+'} className='green' onClick={insert}>+</button>
      <button className='white' onClick={operatorHandler}>+/-</button>
      <button value={0} className='white' onClick={insert}>0</button>
      <button value={'.'} className='white' onClick={insert}>.</button>
      <button value={'='} className='equalgreen' onClick={calculate}>=</button>
    </div>
  )
}