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


  const [timer, setTimer] = useState(tarea.tiempoRestante);

  useEffect(()=>{
    setTimer(tarea.tiempoRestante)
  }, [tarea])

  const tiempoView=(numero)=>{
    const a = numero>=10 ? numero.toString()[0]:'0';
    const b = numero>=10 ? numero.toString()[1]:numero.toString();

    return numero>0? a+b : "00";
  }

  const [pause, setPause] = useState();

  useEffect(()=>{
     clearInterval(pause);
  }, [])

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
      TareasIniciales[index].active = timer>=0? false: true;
     localStorage.setItem('tareas', JSON.stringify(TareasIniciales));
    }
  },[timer])

  useEffect(()=>{
     clearInterval(pause);
  }, [])

     const [botonPlay, setBotonPlay] = useState(false)
     const cambio = () => setBotonPlay(!botonPlay);


  const pausa = ()=>{
    clearInterval(pause);
    cambio();
  }

  const play = ()=>{
    runTimer();
    cambio();
  }
  const detener = ()=>{
    setBotonPlay(false);
    clearInterval(pause);
    setTimer(tarea.segundos[0] + tarea.minutos[0] * 60 + tarea.hora[0] * 60 * 60);
  }


  console.log("Hola")

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
            {/*<MyTimer expiryTimestamp={time}/>*/
            console.log(timer),
              timer==undefined?
              <div className="finalizada">
                Finalizada
              </div>:
              <div>
              {tiempoView(hours)}{tiempoView(minutes)}{tiempoView(seconds)}
              
              {botonPlay?
              <button onClick={()=>{pausa()}}>pausa</button>:
              <button onClick={()=>{play(); primero(index)}}>Play</button>
              }
              <button onClick={()=>{detener()}}>detener</button>
            </div>
          }
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );

};

export default Tarea;