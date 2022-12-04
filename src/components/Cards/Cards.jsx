import styles from "./Cards.module.css"
import Card from "../Card/Card";
import { Link } from "react-router-dom";

// export default function Cards (props) {
//    return (
//       <div className='styles.container'>
//          <button onClick={props.onclose}>X</button>
//          <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
//          <h2>{props.species}</h2>
//          <h2>{props.gender}</h2>
//          <img src={props.image} alt={props.name} />
//       </div>
//    )
// }


export default function Cards(props) {
   const { characters } = props;
   return <div className={styles.container}>
      {
         characters.map((char) => 
         (<Card
            key={char.name}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            onClose={()=>alert ("Emulamos que se cierra la card")}
         />))
      }
   </div>;
}
