import './App.css';

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
  return (
    <div>
      <p> Hello World! </p>
      <Hello name = "Ricardo" age = {24} />
      <Hello name = {name} age = {age} /> 
    </div>
  )
}

export default App;
