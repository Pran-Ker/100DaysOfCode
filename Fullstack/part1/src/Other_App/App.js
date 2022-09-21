import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  
  
  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  const decreaseByOne = () => setCounter(counter - 1)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>
      <div><h1>Counter: {counter}</h1></div>
      <button onClick={increaseByOne}>
        Increase
      </button>
      <button onClick={setToZero}> 
        Reset
      </button>
      <button onClick={decreaseByOne}> 
        Decrease
      </button>
    </div>
  )
}

export default App
