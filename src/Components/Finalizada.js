import React from 'react';
import {Toast, Row, Col, Button}  from 'react-bootstrap';

const Finalizada= ({tarea, eliminarTarea})=>{

	return(
		<Row>
	      <Col xs={12}>
	        <Toast className="finalizada">
	          <Toast.Header>
	            <strong className="mr-auto">{tarea.tarea} - Finalizada</strong>

	            <Button variant="danger" onClick={()=>{eliminarTarea(tarea.id)}}>&times;</Button>
	          </Toast.Header>
	          <Toast.Body>
	          </Toast.Body>
	        </Toast>
	      </Col>
	    </Row>
	);

}

export default Finalizada;