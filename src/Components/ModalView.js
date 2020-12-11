import {Button, Form, Modal}  from 'react-bootstrap';

const ModalView =({show, handleClose, cambiarTarea, tiempo, cambiarTiempo, submitTarea, modificar})=>{
  
  const {tarea, hora, minutos, segundos} = tiempo;
  let numeros = [];
  for(let a=0; a<60; a++){numeros.push(a)}
  return(
  <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <Form>
      <Form.Control size="lg" type="text" placeholder="Tarea" value={tarea} name='tarea' onChange={cambiarTarea}/> 
      <br />
      <div className="container row">
        <Form.Group className="col-md" controlId="exampleForm.ControlSelect2">
          <Form.Label>Horas</Form.Label>
          <Form.Control as="select" multiple value={hora} name="hora" onChange={cambiarTiempo}>
             <option key={0} className="text-center">0</option>
             <option key={1} className="text-center">1</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="col-md" controlId="exampleForm.ControlSelect2">
          <Form.Label>Minutos</Form.Label>
          <Form.Control as="select" multiple value={minutos} name="minutos" onChange={cambiarTiempo}>
          { numeros.map(a=>{
             return <option key={a} className="text-center">{a}</option>
          })}
          </Form.Control>
        </Form.Group>
        <Form.Group className="col-md" controlId="exampleForm.ControlSelect2">
          <Form.Label>Segundos</Form.Label>
          <Form.Control as="select" multiple value={segundos} name="segundos" onChange={cambiarTiempo}>
          { numeros.map(a=>{
             return <option key={a} className="text-center">{a}</option>
          })}
          </Form.Control>
        </Form.Group>
        
      </div>
     </Form>
     </Modal.Body>
     <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={submitTarea}>Save changes</Button>
      </Modal.Footer>
     </Modal>
    );
}
export default ModalView;



