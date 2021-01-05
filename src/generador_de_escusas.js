import React, { useState } from 'react'
import { Link } from "react-router-dom"

const GeneradorDeExcusas = () => {
    const excusas = [
        'me duele la cabeza', 'me enferme', 'jugue cyberpunk', 'tenia flojera', 'me duele el viemntre', 'tengo coovid'
    ]
    const acciones = [
        'ir al gym', 'ir al trabajop', 'hacer el almuerzo', 'ir al curso', 'hacer la comida', 'viajar'
    ]
    let excusaSeleccionada = excusas[0]
    let accionSeleccionada = acciones[0]

    const [generadorEx, setGeneradorEx] = useState(excusaSeleccionada)
    const [generadorAc, setGeneradorAc] = useState(accionSeleccionada)
    const generador = () => {
        let num1 = Math.floor((Math.random() * ((excusas.length - 1) - 0 + 1)) + 0)
        let num2 = Math.floor((Math.random() * ((acciones.length - 1) - 0 + 1)) + 0)

        excusaSeleccionada = excusas[num1]
        setGeneradorEx(excusaSeleccionada)
        accionSeleccionada = acciones[num2]
        setGeneradorAc(accionSeleccionada)

        console.log(num1, num2)
    }
    return (
        <>
            <p>No pude {generadorAc} porque {generadorEx}</p>
            <button onClick={generador}>
                Generar excusa
            </button>
            <Link to='/'>
                <button>
                    Volver
            	</button>
            </Link>
        </>
    )
}

export default GeneradorDeExcusas