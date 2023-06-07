import './App.css';
import { useState } from 'react';

const Hello = (props) => {
    
  const bornYear = () => {
    return new Date().getFullYear() - props.age;
  }

  return (
   <div> 
    <p>
      Hello {props.name}, you are {props.age} years old.
    </p>
    <p>
    You were probably born in {bornYear()}!
    </p>
  </div>
  )
}
function App() {
  const name = "Peter"
  const age = 10
  const [ counter, setCounter ] = useState(0);

 
  return (
    <div>
      <p> Hello World! </p>
      <Hello name = "Ricardo" age = {24} />
      <Hello name = {name} age = {age} /> 

      <div>
        {counter}
      </div>
      
    <button onClick={() => setCounter(counter+1)}>
      Increment
    </button>

    <button onClick={() => setCounter(0)}>
      Restart
    </button>
    </div>

  )
}

export default App;
