import React, { useState, useEffect } from 'react';
import FormTarea from './Components/FormTarea';
import Tarea from './Components/Tarea';
import Grafica from './Components/Grafica';
import Finalizada from './Components/Finalizada';
import NavBar from './Components/NavBar';
import {Button}  from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';



function App() {
//Usaremos el LocalStorage para guardar información
//Verificamos si tiene información sino, lo inicializamos vacio
let TareasIniciales = JSON.parse(localStorage.getItem('tareas'));
if(!TareasIniciales) TareasIniciales=[];

//Arreglo de Tareas
const [tareas, guardarTareas] = useState(TareasIniciales);

const [filtro, guardarFiltro] = useState(0);

useEffect(()=>{
    let TareasIniciales = JSON.parse(localStorage.getItem('tareas'));
    if(TareasIniciales){
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }else{
      localStorage.setItem('tareas', JSON.stringify([]));
    }
  },[tareas])



  const crearTarea = tarea =>{
   guardarTareas([
    ...tareas,
      tarea
    ])
  }

  const eliminarTarea = id =>{
    const nuevasTarea = tareas.filter(tarea=> tarea.id !== id)
    guardarTareas(nuevasTarea);
  }

  const actualizarTarea = (tarea, index)=>{
    tareas.splice(index,1,tarea);
    guardarTareas([...tareas]);

  }

  const ordenarUp = (index)=>{
   const tomar = tareas.splice(index,1);
   tareas.splice(index-1,0,...tomar)

  guardarTareas([...tareas]);

  }
  const ordenarDown = (index)=>{
   const tomar = tareas.splice(index,1);
   tareas.splice(index+1,0,...tomar)

  guardarTareas([...tareas]);

  }

  const finalizar =(index)=>{
    const tomar = tareas.splice(index,1);
    tomar[0].active = true;
    tareas.splice(index,0,...tomar);
    guardarTareas([...tareas]);
  }

  const primero = (index)=>{
   const tomar = tareas.splice(index,1);
   tareas.splice(0,0,...tomar)

    guardarTareas([...tareas]);

  }

  const filtrar =(numero)=>{
    guardarFiltro(numero);
  }
  const filtrando = (tarea)=>{
    switch(filtro){
      case 1: if(tarea.tiempoRestante <= 1800 ) return true;
      break;
      case 2: if(tarea.tiempoRestante > 1800 && tarea.tiempoRestante < 3600) return true;
      break;
      case 3: if(tarea.tiempoRestante >= 3600 ) return true;
      break;
      default: return true;
    }
  }

  useEffect(()=>{
    console.log("app");

  },[tareas])


  const historial = ()=>{
   const activos= tareas.filter(tarea =>{
      if(tarea.active)return true; else return false;
    })
   return activos;
  }



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [hist, setHist] = useState(false)
  const openHistorial=()=>{
    setHist(!hist);
  }


  const [grafica, setGrafica] = useState(false);
  const openGrafica = () => setGrafica(!grafica);


  const aleatorio =()=>{
    const otrasTareas =[];
      for(let i = 0; i<50; i++){
         const fecha = new Date(2020, 12, random(14, 6));
            const task = {
              tarea: "tarea"+i,
              hora:[random(1,0)],
              minutos:[random(59, 0)],
              segundos:[random(59,0)],
              id:uuidv4(),
              timer:0,
              active:true,
              eliminado:false,
              tiempoRestante:0,
              tiempo: fecha.getDay(),
            }
        otrasTareas.push(task); 
      }
    guardarTareas([
    ...tareas,
    ...otrasTareas
    ])

  }
  function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

  console.log("adios");

  return (
    <div className="container text-center">
     <Button variant="primary" size="lg" block onClick={handleShow}>Crear Tarea</Button>
    <div>
      <FormTarea crearTarea={crearTarea} show={show}  handleShow={handleShow} handleClose={handleClose}/> 
    </div>
    {
      tareas.length>0?<NavBar historial={historial} aleatorio={aleatorio} openGrafica={openGrafica} openHistorial={openHistorial} filtrar={filtrar} />:null
    }
    <div className="container text-center">
      {
      grafica?<Grafica tareas={tareas}/>:
      tareas.map((tarea, index)=>(
      tarea.active?
      hist? <Finalizada key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea}/>:null
      :
      (filtrando(tarea))?
       <Tarea 
        finalizar={finalizar} 
        ordenarUp={ordenarUp} 
        ordenarDown={ordenarDown} 
        index={index} 
        tarea={tarea} 
        key={tarea.id} 
        eliminarTarea={eliminarTarea} 
        actualizarTarea={actualizarTarea} 
        primero={primero}
        />:null
      ))}     
    </div>
    </div>
  );
}

export default App;
