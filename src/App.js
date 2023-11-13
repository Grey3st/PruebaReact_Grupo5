import React,{useEffect, useState} from 'react';
import EstadoEjecucionButton from './EstadoEjecucion';
import Resuelto from './Resuelto';

function App() {
const [notas, setNotas]=useState([]);
//const [nuevaNota, setNuevaNota]=useState('');
    const [nuevaNota, setNuevaNota] = useState({ titulo: '', descripcion: '', estado: 'Inicio' });

/**/const [condicionNota, setCondicionNota]=useState(false);

    /**/const [notaSeleccionada, setNotaSeleccionada] = useState(null);

    const [condicionNotaResuelto, setCondicionNotaResuelto]=useState(false);

const agregarNota=()=>{
  
    setNotas([...notas, nuevaNota]);
    setNuevaNota({ titulo: '', descripcion: '', estado: 'Inicio' });

    //setNuevaNota('');
    //setCondicionNota(true);
  
};
const eliminarNota=(index)=>{
  const nuevaNotas=[...notas];
  nuevaNotas.splice(index,1);
  setNotas(nuevaNotas);
}

/* */
const estadoEjecucionClick = (index) => {
  setCondicionNota(true);
  setNotaSeleccionada({ index, nota: notas[index] });
}

const estadoResueltoClick = (index) => {
  //setCondicionNota(true);
  setNotaSeleccionada({ index, nota: notas[index]});
  setCondicionNotaResuelto(true);
}


return (
<div>
  <h1>Lista de Notas</h1>
  <input 
    type='text' 
    placeholder='Titulo' 
    value={nuevaNota.titulo} 
    onChange={(e) => setNuevaNota({ ...nuevaNota, titulo: e.target.value })}
    />
  

  <textarea
      placeholder='Descripción'
      value={nuevaNota.descripcion}
      onChange={(e) => setNuevaNota({ ...nuevaNota, descripcion: e.target.value })}
  />
  <button onClick={agregarNota}>Agregar Nota</button>

            <button onClick={()=>setCondicionNota(false)}>False</button>

  <ul>{notas.map((nota,index)=>(
    <li 
      key={index}>
      <img src='./img/disparo.png'></img>
      <div>
          <h3>{nota.titulo}</h3>
          <p>{nota.descripcion}</p>
          <p>Estado: {nota.estado}</p>
      </div>
      
      <button onClick={()=>eliminarNota(index)}>Eliminar</button>
      
            {/* Renderizar el componente EstadoEjecucion solo si hay una nota seleccionada */}
            <button onClick={() => estadoEjecucionClick(index)}>
              Estado de Ejecucion
            </button>

            <button onClick={() => estadoResueltoClick(index)}>
              Resuelto
            </button>

           {/* OPCIONAL PONER LINEA 91 DENTRO DEL MAPEO//O HACER UN NUEVO MAPEO CON EstadoEJecucionButton ADENTRO
           PARA QUE AMBOS TENGAN UN INDEX IGUAL PERO POR SEPARADO */}

    </li>
  ))}</ul>

  {/* Renderizar el componente EstadoEjecucion solo si hay una nota seleccionada */}
  {condicionNota && notaSeleccionada && notaSeleccionada.index == notaSeleccionada.index  && (
    
    <EstadoEjecucionButton
      onClickHandler={() => setCondicionNota(true)}
      src='./img/disparo.png'
                index={notaSeleccionada.index}
                notaTitulo={notaSeleccionada.nota.titulo}
                nota={notaSeleccionada.nota.descripcion}
                notas={notas}
                setNotas={setNotas}
                setCondicionNota={setCondicionNota}
      
    />
  )}

      { notaSeleccionada && condicionNotaResuelto && (
        <Resuelto
          onClickHandler={() => condicionNotaResuelto(true)}
          src='./img/disparo.png'
                    index={notaSeleccionada.nota.titulo}
                    nota={notaSeleccionada.nota.descripcion}

        />
      )}
</div>);


}

export default App;
