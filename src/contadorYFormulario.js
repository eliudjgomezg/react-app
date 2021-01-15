import React, { useState } from 'react'
import { Link } from "react-router-dom"

function ContadorYFormulario() {
    //State para guardar el valor que se captura del input
    const [input, setInput] = useState('')
    //State para renderizar el valor del contador
    const [counter, setCounter] = useState(0)
    //State que renderiza el limite del contador 
    const [limit, setLimit] = useState('')
    //Funcion que captura lo que se escribe en el input a travez del evento onChange y su parametro e.target.value
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    //Funcion que setea el valor de input al state limit
    const handleSubmit = (e) => {
        e.preventDefault()
        setLimit(Number(input))
    }
    //Funcion llamada desde un evento onClick que suma 1 al state counter
    const add = () => {
        setCounter(counter + 1)
    }
    //Funcion llamada desde un evento onClick que resta 1 al state counter
    const sustract = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div>
                    <h1 className='text-primary'>El super contador </h1>
                    <form className='w-75' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="form-group">
                                <label for="exampleInputPassword1">Ingrese limite del contador </label>
                                <input className="form-control" type='number' onChange={handleChange} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </form>
                    <hr />
                    {/*Condicionamos el renderizado entre el contador y el aviso de llegaste cuando llega al limite*/}
                    {limit === counter ?
                        <div className="alert alert-success mt-2" role="alert">
                            Lo lograste!!!!!!!!!
                        </div>
                        :
                        <div className='card p-2 mt-2'>
                            <div>
                                <h3>Limite del contador: {limit}</h3>
                                <h3>Contador : {counter}</h3>
                                {/*La propiedad disabled inabilita el button. este recibe un valor true o false. Si es true, inabilita  
                                el boton y si es false no habilita. Pero como ya sabemos, una condicion ya es en si un true o false
                                asi que lo coloco como valor de la propiedad y funciona y gual como si escribiera true o false
                                */}
                                <button className="btn btn-danger mr-2" disabled={counter === 0} onClick={sustract}>-</button>
                                <button className="btn btn-success mx-2" disabled={counter < 0} onClick={add}>+</button>
                            </div>
                        </div>
                    }
                    <Link to='/'>
                        <button className="btn btn-primary mt-3">
                            Volver
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ContadorYFormulario
