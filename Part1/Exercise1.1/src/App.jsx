const Hello = ({name, age}) =>{
  const bornYear =  () => new Date().getFullYear() - age
  return(
    <div>
      <p>
        Hello {name}, you are {age} years old

      </p>
      <p>So you were born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Ram'
  const age = 10

  return(
    <div>
      <h1>Greeting</h1>
      <Hello name = 'Maya' age = {30 + 10}/>
      <Hello name = {name} age = {age}/>
    </div>
  )
} 
export default App;