import React, { useState, useEffect } from 'react';
import ModalView from './ModalView'

const FormModificar =({handleClose, handleShow, show, tarea, actualizarTarea, index})=>{
	
	const [tiempo, guardarTiempo] = useState({...tarea})

	 const cambiarTiempo=(e)=>{
	    guardarTiempo({...tiempo,
	        [e.target.name]:[+e.target.value],
	    })
	  }
	  const cambiarTarea=e=>{
	    guardarTiempo({...tiempo,
	        ["tarea"]: e.target.value,
	    })
	  }
	
	  const submitTarea = e =>{
	  	e.preventDefault()
	  	actualizarTarea({...tiempo, tiempoRestante:tiempo.segundos[0] + tiempo.minutos[0] * 60 + tiempo.hora[0] * 60 * 60}, index);
	  	handleClose();
	  }
	return(
		<ModalView
			handleClose={handleClose} 
        	submitTarea={submitTarea} 
	        show={show} 
	        cambiarTarea={cambiarTarea} 
	        tiempo={tiempo} 
	        cambiarTiempo={cambiarTiempo}
		/>
		);

}

export default FormModificar;