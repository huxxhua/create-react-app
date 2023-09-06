//import logo from './logo.svg';
//import './App.css';
import MyComponent from './part1/MyComponent.js';
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
const Jsvar = () => {
  const x = 1
  let y = 5
  //console.log(x,y)
  y += 10
  console.log(x,y)
  y = 'test1'
  console.log(x,y)
}

const Jsarr = () => {
  const t = [1,-1,3]
  t.push(5)

  //console.log(t.length)
  //console.log(t[1])

  t.forEach(value => {
    //console.log(value)
  })

  //const t2 = t.concat(5)
  //console.log(t)
  //console.log(t2)

  //const m1 = t.map(value => value * 2)
  //console.log(m1)

  const [first,second,...rest] = t
  console.log(first,second)
  console.log(rest)
}

const Jsobj = () => {
  const object1 = {
    name :'huxxhua',
    age : 30,
    size: 20,
  }

  const object2 = {
    name : {
      first:'huang',
      last:'guanhua'
    },
    grades : [2,3,4,9]
  }

  object2.address = '东莞市'

  console.log(object2.grades,object2.name,object2.address)
}

const Jsfun = () => {
  const sum = (p1,p2) => {
    //console.log(p1)
    //console.log(p2)
    return p1 + p2;
  }
  const result = sum(1,5)
  //console.log(result)

  const square = p =>{
    return p*p
  }

  const square_concise = p => p*p

  const t = [1,2,3]
  const tsquare = t.map(p => p*p)
  //console.log(tsquare)
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const arto = {
  name :'ci',
  age : 18,
  education : 'phd',
  greet : function(){
    //console.log('hello, my name is ' + this.age)
  },
  doAddition : function (a,b) {
    //console.log(a + b)
  }
}

arto.doAddition(1,4)
const referenceToAddition = arto.doAddition
//referenceToAddition(10,15)

arto.grow = function(){
  this.age +=1
}
//console.log(arto.age)

//setTimeout(arto.greet.bind(arto),1000)
//arto.greet()
//const referenceToGreet = arto.greet
//referenceToGreet()

class Person{
  constructor(name,age){
    this.name = name
    this.age = age
  }
  greet(){
    //console.log('hello, my name is ' + this.name)
  }
}

const me = new Person('ci',18)
//me.greet()

const App = () => {

  //arto.greet()
  //console.log('Hello from component')
  // const course = {
  //   name : 'Half Stack application development',
  //   parts : [
  //     {
  //       name : 'Fundamentals of React',
  //       exercises : 10
  //     },
  //     {
  //       name : 'Using props to pass data',
  //       exercises: 7
  //     },
  //     {
  //       name : 'State of component',
  //       exercises : 14
  //     }
  //   ]
  // }
  
  return (
    <div>
      ...
    </div>
  )
}
export default App;
