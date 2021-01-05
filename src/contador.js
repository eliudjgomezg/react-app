//En la primera linea siempre vamos a importar a react con esta sintaxis
//Si usamos un Hook, debemos importarlo dentro de llaves seguido de una coma de 'React'
import React, { useState } from 'react'
import { Link } from "react-router-dom"

//Para renderizar a travez de un componente funcional, declaramos una funcion de javascript. Antes del return, colocamos todo el 
//javascript que neceitemos y dentro del return colocamos todo el html que necesitemos 
const Contador = () => {
	//Aca estamos declarando un hook useState
	//La primera propiedad del arreglo es una variable que denominamos state y tendremos acceso a 
	//ella desde cualquier parte del js de la funcion o del html dentro del return 

	//El segundo parametro es una función que cambia o setea el valor de la variable o state
	//Despues del igual, declaramos el hook useState y dentro del parentesis colocamos el valor inicial del state
	const [contador, setContador] = useState(0)

	//La funcion sumar, llama al metodo y setea un nuevo valor al state contador
	const sumar = () => {
		let result = contador + 1
		setContador(result)
	}

	const resta = () => {
		let substract = contador - 1
		setContador(substract)
	}

	return (
		<>
			{/*En el elemento p, colocamos el valor de lo que sea que contenga el state contador*/}
			{contador < 10 ?
				<p>Estado del contador: {contador}</p>
				:
				<p>Llegaste a 10</p>
			}

			{/*Con el evento onClick, al elemento recibir un click llama la funcion sumar y esta ejecuta su codigo interno*/}

			{contador > 0 &&
				<button onClick={resta}>
					Decrementar
				</button>
			}

			{contador < 10 &&
				<button onClick={sumar}>
					Incrementar
    			</button>
			}

			<Link to='/'>
				<button>
					Volver
            	</button>
			</Link>
		</>
	)
}

export default Contador


