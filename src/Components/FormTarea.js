import React, { useState, useEffect } from 'react';
import ModalView from './ModalView'
import { v4 as uuidv4 } from 'uuid';


const FormTarea = ({crearTarea, handleClose, handleShow, show, tarea, actualizarTarea}) =>{
  const fecha = new Date()

const [tiempo, guardarTiempo] = useState({
  tarea:'',
  hora:[0],
  minutos:[0],
  segundos:[0],
  timer:0,
  active:false,
  eliminado:false,
  tiempoRestante:0,
  tiempo: fecha.getDay(),
})


  
  const cambiarTiempo=(e)=>{
    guardarTiempo({...tiempo,
        [e.target.name]:[+e.target.value],
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
    crearTarea({...tiempo, tiempoRestante:tiempo.segundos[0] + tiempo.minutos[0] * 60 + tiempo.hora[0] * 60 * 60})
    guardarTiempo({
      tarea:'',
      hora:[0],
      minutos:[0],
      segundos:[0],
      timer:0,
      active:false,
      eliminado:false,
      tiempoRestante:0,
      tiempo: fecha.getDay(),
    })
    handleClose();
  //console.log(tiempo);
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