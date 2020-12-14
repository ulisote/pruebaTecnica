import React from 'react';
import {VictoryChart, VictoryBar, VictoryAxis} from 'victory';

const Grafica = ({tareas})=>{

	const resumen = tareas.map(
	
		(tarea, index)=>(
			{
				id:tarea.id,
				tiempoRestante: +tarea.tiempo

			}
			)


	)

	console.log(resumen);
	const data = [
	  {tareas: 1, tiempo: 13000},
	  {tareas: 2, tiempo: 16500},
	  {tareas: 3, tiempo: 14250},
	  {tareas: 4, tiempo: 19000}
	];

	return(
		<div>
		<VictoryChart domainPadding={20}>
	        <VictoryAxis
	          tickValues={[1, 2, 3, 4]}
	          tickFormat={["Semana 1", "Semana 2", "Semana 3", "Semana 4"]}
	        />
	        <VictoryAxis
	          dependentAxis
	          // tickFormat specifies how ticks should be displayed
	          tickFormat={(x) => (`T:${x / 5}`)}
	        />
	        <VictoryBar
	          data={data}
	          x="tareas"
	          y="tiempo"
	        />
	      </VictoryChart>
	      <br/>
	      <VictoryChart domainPadding={20}>
	        <VictoryAxis
	          tickValues={[1, 2, 3, 4]}
	          tickFormat={["Semana 1", "Semana 2", "Semana 3", "Semana 4"]}
	        />
	        <VictoryAxis
	          dependentAxis
	          // tickFormat specifies how ticks should be displayed
	          tickFormat={(x) => (`T:${x / 5}`)}
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