import React, {useState, useEffect} from 'react';
import {Toast, Row, Col, Button}  from 'react-bootstrap';
import FormModificar from './FormModificar';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';

const Tarea = ({primero,finalizar,ordenarUp, ordenarDown,tarea, index, crearTarea,eliminarTarea, actualizarTarea} ) =>{

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const {hora, minutos, segundos} = tarea;
  const tiempo = segundos[0] + minutos[0] * 60 + hora[0] * 60 * 60;

  const [timer, setTimer] = useState(tarea.tiempoRestante != undefined? tarea.tiempoRestante: tiempo);

  useEffect(()=>{
   // if(tarea.tiempoRestante != undefined)

      //true

      //setTimer(tarea.tiempoRestante)
      

    //else
     // setTimer(tiempo)
      
  }, [tiempo]);

  const tiempoView=(numero)=>{
    const a = numero>=10 ? numero.toString()[0]:'0';
    const b = numero>=10 ? numero.toString()[1]:numero.toString();
    return a+b;
  }


  const [pause, setPause] = useState();




  const runTimer = ()=>{
      setPause(setInterval(() => {
        setTimer(timer => (
        (timer>0)?timer - 1:pausa()));
      }, 1000))
  }

  let hours = Math.floor((timer/60)/60);
  let minutes = Math.floor((timer / 60)%60);
  let seconds = Math.floor(timer%60);

  useEffect(()=>{
    let TareasIniciales = JSON.parse(localStorage.getItem('tareas'));
    if(TareasIniciales[index]){
      TareasIniciales[index].tiempoRestante = timer;
     localStorage.setItem('tareas', JSON.stringify(TareasIniciales));
    }

  },[timer])
  const pausa = ()=>{
    clearInterval(pause);

  }
  const play = ()=>{
    runTimer();
  }

  return (
    <Row>
      <Col xs={12}>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
          
            <strong className="mr-auto">{tarea.tarea}</strong>
            <Button onClick={()=>finalizar(index)}>Finalizar</Button>
            <Button onClick={()=>ordenarUp(index)}><ArrowUp/></Button>
            <Button onClick={()=>ordenarDown(index)}><ArrowDown/></Button>
            <Button onClick={handleShow}>Editar</Button>
           <Button variant="danger" onClick={()=>{eliminarTarea(tarea.id); pausa();}}>&times;</Button>
           <div>
             <FormModificar show={show} handleShow={handleShow} index={index} handleClose={handleClose} tarea={tarea} actualizarTarea={actualizarTarea}/> 
           </div>
          </Toast.Header>
          <Toast.Body>
            {/*<MyTimer expiryTimestamp={time}/>*/}
            {tiempoView(hours)}{tiempoView(minutes)}{tiempoView(seconds)}
            <button onClick={()=>{pausa()}}>pausa</button>
            <button onClick={()=>{play(); primero(index)}}>Play</button>
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );

};

export default Tarea;