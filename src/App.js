import React,{useState} from 'react';

function App() {
const [notas, setNotas]=useState([]);
const [nuevaNota, setNuevaNota]=useState('');
const agregarNota=()=>{
  if (nuevaNota!=='') {
    setNotas([...notas, nuevaNota]);
    setNuevaNota('');
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
