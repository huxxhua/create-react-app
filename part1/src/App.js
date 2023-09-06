//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const Hello = (props) =>{
  return (
    <div>
      <p>Hello {props.name},you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  //console.log('Hello from component')
  //const now = new Date()
  return (
    <><h1>huxxhux</h1><Hello name="xiaoming" age={13 + 12} /><Hello name="ci" /></>
  )
}
export default App;
