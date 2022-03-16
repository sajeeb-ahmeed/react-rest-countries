import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const names = ' SaJeeb AHmeed ';
const age = 25;
const obi = {
  name: 'saju',
  job: 'web developer',

}
const styleadd = {
  color: 'white',
  backgroundColor: 'purple',
  padding: '20px'
}

const singers = [
  { name: ' Dr. Mahfuz', job: 'Doctor' },
  { name: ' Dr. Ahun', job: 'Singer' },
  { name: ' Dr. Jhatka', job: 'Scientist' },
  { name: ' Dr. Kibria', job: 'RJ' },
]
function App() {
  const arr = ['sajeeb', 'jhankar', 'hero', 'riaz', 'razzak'];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>JSX</h2>
        <div className="container">
          <p style={styleadd}>{names} age {20 + age}</p>
          <p style={{ color: 'blue', backgroundColor: 'green', padding: '20px' }}> {obi.name} {obi.job}</p>
          <p> {obi.name} {obi.job}</p>
        </div>
       
      
      </header> */}
      {
        // arr.map(nayok => <li>{nayok}</li>)
      }
      {
        // arr.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name={singer.name} job={singer.job}></Person>)
      }

      {/* <Info pro=" Cute Coupple"></Info> */}
      <Info pro="Paddha Nodir Majhi"></Info>
      <Info pro="HARDWORK"></Info>

      <Count> </Count>




    </div >
  );
}

function Person(props) {

  return (

    <div className='person'>
      <h1> Name:{props.name} </h1>
      <h3> job :{props.job} </h3>

    </div>

  )
}
function Info(props) {
  return (

    <div style={styleadd}>
      <h4>Profession : {props.pro} </h4>
    </div>
  )
}

function Count(props) {
  const [count, setCount] = useState(0);

  // const incarase = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  const incarase = () => setCount(count + 1);
  const decarase = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };

  return (

    <div>

      <h3>Count : {count} </h3>
      <button onClick={incarase}>Incarse</button>
      <button onClick={decarase}>Decarse</button>
    </div>
  )
}


export default App;
