import React from "react";
import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail () {
    const {detailId} = useParams ()
    const navigate = useNavigate ()
    const [character, setCharacter] = useState ("")
    console.log(character, setCharacter)
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {  //aca no esta trayendo la data
    console.log(`char Detail ${char}`)
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID- else');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID- catch');
           });
        return setCharacter({});
     }, [detailId]);

     const handleclic = () => {
         navigate("/home")
     }
     
     //Auri
     return (<div>{character ? (
      <div>  
        <button onClick={handleclic}>Go to home</button>
        <div>
        <h1>{character.name}</h1>
        <h5>{character.status}</h5>
        <h5>{character.species}</h5>
        <h5>{character.gender}</h5>
        <h5>{character.origin?.name}</h5>
        </div>
            <div><img src={character.image} alt={character.name}/></div>        
    </div> ):("")}  </div>)
}
// return (
//    <div>
//       <button onClick={handleclic}>Go to home</button>
//    <div>
//       <h1>{character.name}</h1>
//       <h5>{character.status}</h5>
//       <h5>{character.species}</h5>
//       <h5>{character.gender}</h5>
//       <h5>{character.origin.name}</h5>
//    </div>
//              <div><img src={character.image} alt={character.name}/></div>
//    </div>
// )