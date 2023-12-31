import { useState } from "react";
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  return (
    <div>
      {left}
      <Buttons handleClick={handleLeftClick} text='left' />
      <Buttons handleClick={handleRightClick} text='rigt'/>
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

const Buttons = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const History = (props) => {
  if(props.allClicks.length === 0){
    return (
      <div>
        the app is empty buttons
      </div>
    )
  }
  return (
    <div>
      button press History: {props.allClicks.join(' ')}
    </div>
  )
}

export default App;