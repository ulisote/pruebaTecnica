import React from 'react';
import {Navbar, Button, Dropdown, DropdownButton}  from 'react-bootstrap';

const NavBar =({openHistorial,historial,filtrar})=>{
	return(
		<Navbar bg="dark" variant="dark" className="navbar_tarea">
		    <Navbar.Brand className="mr-auto" variant="white">Tareas</Navbar.Brand>

		    <Button onClick={openHistorial}>Finalizadas {historial().length}</Button>
		    <DropdownButton variant="info" title="Filtro">
		        <Dropdown.Item eventKey="1" onClick={()=>filtrar(0)}>Todas</Dropdown.Item>
		        <Dropdown.Divider />
		        <Dropdown.Item eventKey="2" onClick={()=>filtrar(1)}> {"< 30 min"}</Dropdown.Item>
		        <Dropdown.Item eventKey="3" onClick={()=>filtrar(2)}>30min - 1hr </Dropdown.Item>
		        <Dropdown.Item eventKey="4" onClick={()=>filtrar(3)}>>1hr</Dropdown.Item>
		      </DropdownButton>
		      <Button variant="outline-info">Modificar</Button>
		  </Navbar>
	);

}

export default NavBar;