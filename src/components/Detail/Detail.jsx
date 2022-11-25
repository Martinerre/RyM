import {useState} from "react"
import { useParams } from "react-router-dom";

export default function Deatil () {
    const {detailId} = useParams ()
    const [character, SetCharacter] = useState ()
    return (<div>Detail</div>)
    
}