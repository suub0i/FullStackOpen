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
  const [clicks, setClick] = useState({
    left: 0, right: 0
  })
  const handleLeftClick = () =>{
    const newClicks = {
      left: clicks.left +1,
      right: clicks.right
    }
    setClick(newClicks)
  }
  const handleRightClick = () =>{
    const newClicks = {
      left: clicks.left,
      right: clicks.right +1
    }
    setClick(newClicks)
  }
  return(
      <>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </>
  )
}
export default App