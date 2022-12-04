import './App.css'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav"
import {Route, Routes} from "react-router-dom"
import Detail from "./components/Detail/Detail.jsx"
import About from './components/About/About.jsx'
import onSearch from "./components/Searchbar/SearchBar"
// import {useState} from "react"
import characters from './data'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
        <Routes>
          {/* <Route path="./components/Nav" element = {<Nav />}></Route> */}
          <Route 
            path="/home"
            element={<Cards characters={characters}
            onClose={onclose} />}
          />
          {/* <div className='smits'>
            <Card
              name={Rick.name}
              species={Rick.species}
              gender={Rick.gender}
              image={Rick.image}
              onClose={() => window.alert('Emulamos que se cierra la card')}
              />
          </div> */}
          <Route path="/About" element={<About />} />
          <Route path="/Detail/:detailId" element={<Detail />} />
        </Routes>
    </div>
  )
}

export default App
