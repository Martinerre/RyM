import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import characters, { Rick } from './data.js'
import Nav from "./components/Nav"
import {Route, Routes} from "react-router-dom"

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav />
      </div>
      <Routes>
        {/* <Route path="" element = {}></Route> */}
      </Routes>
        <div className='smits'>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <Route path="/About" element={<About />} />
      <Route path="/Detail/:detailId" element={<Detail />} />
      <hr />
      <div className='smits'>
        <Cards
          characters={characters}/>
      </div>
      <hr />
        
    </div>
  )
}

export default App
