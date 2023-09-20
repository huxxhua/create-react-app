import { useState } from "react";
const App = () => {
  const [value, setValue] = useState(0)

  const hello = (who) => () => {
      console.log('hello ', who)
  }
  const setToValue = (newValue) => () => {
    console.log('value now',newValue)
    setToValue(newValue)
  }


  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>rest</button>
    </div>
  )
}


export default App;