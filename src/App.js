import React,{useState} from 'react';

function App() {
const [notas, setNotas]=useState([]);
const [nuevaNota, setNuevaNota]=useState('');
const [condicionNota, setCondicionNota]=useState(true);
const agregarNota=()=>{
  //Con este If requerimos que la nota siempre tenga como condición un True
  if (nuevaNota!=='' && condicionNota==true) {
    setNotas([...notas, nuevaNota]);
    setNuevaNota('');
    setCondicionNota(true);
  }
};
const eliminarNota=(index)=>{
  const nuevaNotas=[...notas];
  nuevaNotas.splice(index,1);
  setNotas(nuevaNotas);
}
return (<div>
  <h1>Lista de Notas</h1>
  <input type='text' placeholder='Nueva Nota' value={nuevaNota} onChange={(e)=>setNuevaNota(e.target.value)}></input>
  <button onClick={agregarNota}>Agregar Nota</button>
  {/* Si presionamos el botón false antes de agreagar una nota, no se agrega
  Solo se agregará si pulsamos el botón True */}
  <button onClick={()=>setCondicionNota(true)}>True</button>
  <button onClick={()=>setCondicionNota(false)}>False</button>
  <ul>{notas.map((nota,index)=>(
    <li key={index}>
      <img src='./img/disparo.png'></img>
      {nota}
      <button onClick={()=>eliminarNota(index)}>Eliminar</button>
    </li>
  ))}</ul>
</div>);
}

export default App;
