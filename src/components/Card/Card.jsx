// import styles from "../Card.module.css";
import {Link} from "react-router-dom"
import characters from "../../data";

export default function Card(props) {
   
   return (
      <div className="char">
         <button className="btn2" onClick={props.onClose}></button>
         <Link to={`/detail/${props.Id}`}><h2>{props.name}</h2> </Link>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="no!" />
      </div>
   );
}
