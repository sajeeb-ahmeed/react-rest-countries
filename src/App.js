import logo from './logo.svg';
import './App.css';

const names = ' SaJeeb AHmeed ';
const age = 25;
const obi = {
  name: 'saju',
  job: 'web developer',

}
const styleadd = {
  color: 'red',
  backgroundColor: 'yellow'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>JSX</h2>
        <div className="container">
          <p style={styleadd}>{names} age {20 + age}</p>
          <p style={{ color: 'blue', backgroundColor: 'green', padding: '20px' }}> {obi.name} {obi.job}</p>
          <p> {obi.name} {obi.job}</p>
        </div>
        <p>
          cEdit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
