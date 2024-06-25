import { useState } from 'react'
import './App.css'

function App() {
const [count, setCount] = useState(0)

const isPrime = (num) => 
{
  if (num <= 1){
    return false;
  }
  for (let i=2; i<num; i++)
  {
    if(num % i === 0)
      {
        return false;
      }
  }
  return true;
};

  return (
    <>
        <h1>Count:- {count}</h1>

        <button onClick={()=>{setCount(count + 1)}}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
        
        <h3>Prime Number :- {isPrime(count) ? 'True' : 'False'}</h3>
    </>
  )
}

export default App
