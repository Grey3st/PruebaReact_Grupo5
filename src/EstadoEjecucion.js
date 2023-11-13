
import React, {useState} from 'react';

function EstadoEjecucion({ onClickHandler, notas,setNotas,setCondicionNota, notaTitulo, nota, src,index }){
    const [visible, setVisible] = useState(true);

    const eliminarNotaEstado=(index)=>{
        
        setVisible(false);

      }
return(
    

    <div>
        {visible ? (
        <ul>
            
            <h5>En Ejecucion</h5>
            <h5>{notaTitulo}</h5>
            <h6>{nota}</h6>
            
            <h2>{index}</h2>
            <button onClick={()=>eliminarNotaEstado(notaTitulo)}>Eliminar</button>

        </ul>
        ):null}
    </div>
    
);
}
export default EstadoEjecucion;

//visible==true && (return)