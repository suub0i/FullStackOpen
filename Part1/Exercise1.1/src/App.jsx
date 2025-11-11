import {useState} from 'react'
const Display = (props) =>{
  return(
    <div>{props.counter}</div>
  )
}
const Button = (props) =>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const App = () =>{
  const [counter, setCounter] = useState(0)
  const increse = () => setCounter(counter+1)
  const zero = () => setCounter(0)
  const handleClick = () =>{
    console.log('click')
  }
  console.log('rendering...', counter)
  return(
      <>
        <Display counter = {counter}/>
        <Button onClick = {increse} text = 'plus'/>
        <Button onClick = {zero} text = 'zero'/>
      </>
  )
}
export default App