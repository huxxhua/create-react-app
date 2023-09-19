import { useState } from "react";
const App = () => {
  const[counter,setCouner]= useState(0);

  const handleClick = () => setCouner(counter+1);
  const setToZero = () => setCouner(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={handleClick} text='plus'/>
      <Button onClick={setToZero} text='zero'/>
    </div>
  )
}

const Display = ({ counter }) =>  <div>{counter}</div>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} >
      {text}
    </button>
  )
}
export default App;