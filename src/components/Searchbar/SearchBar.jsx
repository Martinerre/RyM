
export default function SearchBar(props) {
   const {onSearch} = props;
   return (
      <div>
         <input type='search' />
      <button className="btn1" onClick={() => onSearch (props)}>Agregar</button>
      </div>
   );
}
