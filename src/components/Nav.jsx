import React from "react"
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'

const Nav = (props) => {
    return (
            <div className=''>
                <div>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <SearchBar onSearch={onSearch}
                //   onSearch={(characterID) => window.alert(characterID)}
                />
                </div>
            </div>
     
    )
}

export default Nav