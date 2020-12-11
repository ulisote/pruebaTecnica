import React, { useState, useEffect } from 'react';
import FormTarea from './Components/FormTarea';
import Tarea from './Components/Tarea';
import Finalizada from './Components/Finalizada';
import NavBar from './Components/NavBar';
import {Button}  from 'react-bootstrap';

function App() {

//Usaremos el LocalStorage para guardar información
//Verificamos si tiene información sino, lo inicializamos vacio
let TareasIniciales = JSON.parse(localStorage.getItem('tareas'));
if(!TareasIniciales) TareasIniciales=[];

//Arreglo de Tareas, donde guardaremos todas las tareas
const [tareas, guardarTareas] = useState(TareasIniciales);

//Vamos a ocupar un filtro...
const [filtro, guardarFiltro] = useState(0);

//Vamos a actualizar cada vez que tareas se actualice
useEffect(()=>{
    let TareasIniciales = JSON.parse(localStorage.getItem('tareas'));
    if(TareasIniciales){
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }else{
      localStorage.setItem('tareas', JSON.stringify([]));
    }
  },[tareas])

  return (
    <div>
    Iniciando Prueba Tecnica
    </div>
  );
}

export default App;
