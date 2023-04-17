import React, { useReducer } from 'react'
import "./Calculator.css"


function reducer (state,action){
    switch(action.type){
      case "SET_NUMBER1":
        return {...state, number1: action.payload}
        case "SET_NUMBER2":
        return{...state, number2: action.payload}
        case "SET_RESULT":
        return{...state, result: action.payload}
        default:
          throw new Error("İnvaild Action Type")
    }
}
const CalculatorReduce = () => {
  const [state, dispatch] = useReducer(reducer, {
    number1:0,
    number2:0,
    result:0
  });
  const number1Change = (e) => {
    dispatch({type:"SET_NUMBER1", payload: Number(e.target.value)})
  };

  const number2Change = (e) => {
    dispatch({type:"SET_NUMBER2",payload: Number(e.target.value)})
  };
  console.log(state)

  const handleAddition = () =>{
    dispatch({type:"SET_RESULT", payload: state.number1+state.number2})
    dispatch({type:"SET_NUMBER1", payload: 0 })
    dispatch({type:"SET_NUMBER2", payload: 0 })
    
  }
  return (
    <div className='calculator-container'>
        <h1>useReducer</h1>
        <div className='form-container'>
            <label className='form-label' htmlFor="number1">Number1</label>
            <input type="number" className='form-input' id='number1' onChange={number1Change} value={state.number1}/>
        </div>
        <div className='form-group'>
        <label className='form-label' htmlFor="number2">Number2</label>
            <input type="number" className='form-input' id='number2' onChange={number2Change} value={state.number2}/>
        </div>
        <button onClick={handleAddition}>Add</button>
        <div className='form-group'>
        <label className='form-label' htmlFor="result">Result</label>
            <input type="number" className='form-input' id='result' value={state.result} readOnly />
        </div>
    </div>
  )
}

export default CalculatorReduce