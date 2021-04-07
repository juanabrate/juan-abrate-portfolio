import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Education from './components/Education'
import Reach from './components/Reach'
import Final from './components/Final'

const desktopQ = window.matchMedia('(min-width: 1920px)')
const laptopQ = window.matchMedia('(min-width: 1280px) and (max-width: 1919px)')
const portraitQ = window.matchMedia('(min-width: 768px) and (max-width: 1279px)')
const mobileQ = window.matchMedia('(min-width: 320px) and (max-width: 767px)')

let mediaQueries = {
  desktop: desktopQ.matches,
  laptop: laptopQ.matches,
  portrait: portraitQ.matches,
  mobile: mobileQ.matches,
}

function App() {
  return (
    <div className="App">
      <Home queries={mediaQueries} />
      <Nav queries={mediaQueries}/>
      <Skills queries={mediaQueries}/>
      <Education queries={mediaQueries} />
      <Reach queries={mediaQueries} />
      <Final queries={mediaQueries} />
    </div>
  )
}

export default App
