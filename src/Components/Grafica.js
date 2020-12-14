import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis} from 'victory';

const Grafica = ({tareas})=>{

	let lunes=0,martes=0,miercoles=0,jueves=0,viernes=0,sabado=0,domingo=0;
	tareas.forEach((tarea)=>{
		switch(tarea.tiempo){
			case 1: lunes++; break;
			case 2: martes++; break;
			case 3: miercoles++; break;
			case 4: jueves++; break;
			case 5: viernes++; break;
			case 6: sabado++; break;
			case 0: domingo++; break;
		}
	})

	const data = [
	  {tareas: 1, tiempo: lunes},
	  {tareas: 2, tiempo: martes},
	  {tareas: 3, tiempo: miercoles},
	  {tareas: 4, tiempo: jueves},
	  {tareas: 5, tiempo: viernes},
	  {tareas: 6, tiempo: sabado},
	  {tareas: 7, tiempo: domingo}
	];
	console.log(lunes);

	return(
		<div>
		<VictoryChart domainPadding={20}>
	        <VictoryAxis
	          tickValues={[1, 2, 3, 4,5,6,7]}
	          tickFormat={["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]}
	        />
	        <VictoryAxis
	          dependentAxis
	          // tickFormat specifies how ticks should be displayed
	          tickFormat={(x) => (`T:${x}`)}
	        />
	        <VictoryBar
	          data={data}
	          x="tareas"
	          y="tiempo"
	        />
	      </VictoryChart>		

		</div>
	);
}

export default Grafica;