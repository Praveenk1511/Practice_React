import './App.css'
import { useState } from 'react';

function App() {
  // let counter = 5;
  let [counter,setCounter] = useState(0);
  const addValue = () => setCounter(counter + 1);
  const subValue = () => {if(counter > 0)setCounter(counter - 1);}

  return (
    <>
      <h1> Chai or R..</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <br></br>
      <button onClick={subValue}>Remove Value</button>
    </>
  )
}

export default App
