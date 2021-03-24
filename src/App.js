import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Education from './components/Education';
import Reach from './components/Reach';
import Final from './components/Final';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home/>
      <Nav/>
      <Skills/>
      <Education/>
      <Reach/>
      <Final/>
    </div>
  );
}

export default App;