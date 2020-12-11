import React, { useState } from 'react';
import ModalView from './ModalView'
import { v4 as uuidv4 } from 'uuid';


const FormTarea = ({crearTarea, handleClose, handleShow, show, tarea, actualizarTarea}) =>{

const [tiempo, guardarTiempo] = useState({
  tarea:'',
  hora:[0],
  minutos:[0],
  segundos:[0],
  timer:0,
  active:false,
  eliminado:false,
})
  const cambiarTiempo=(e)=>{
    guardarTiempo({...tiempo,
        [e.target.name]:[+e.target.value]
    })
  }
  const cambiarTarea=e=>{
    guardarTiempo({...tiempo,
        tarea: e.target.value
    })
  }
  const submitTarea=e=>{
    e.preventDefault()
    tiempo.id = uuidv4();
    crearTarea(tiempo)
    guardarTiempo({
      tarea:'',
      hora:[0],
      minutos:[0],
      segundos:[0],
      timer:0,
      active:false,
      eliminado:false,
    })
    handleClose();
  }

  let modificar = false;
    return(
      <ModalView 
        handleClose={handleClose} 
        submitTarea={submitTarea} 
        show={show} 
        cambiarTarea={cambiarTarea} 
        tiempo={tiempo} 
        cambiarTiempo={cambiarTiempo}
        modificar={modificar}
      />
     );

}

export default FormTarea;