import React from "react"
import { Link } from "react-router-dom"
import SearchBar from './Searchbar/SearchBar'

const Nav = (props) => {
    return (
                <div> 
                <Link to="/home">Home</Link>
                <br />
                <Link to="About">About</Link>
                <SearchBar onSearch={(characterId) => window.alert(characterId)}    
                />
                </div>
               
    )
}

export default Nav

//onSearch={props.onSearch}