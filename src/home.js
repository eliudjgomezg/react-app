import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className='d-flex justify-content-center'>
            <div class="btn-group-vertical">
                <h1 className='text-success'>Lista de ejercicios</h1>
                <Link to='/todoEditable' className='w-100'>
                    <button className="btn btn-success my-2 w-100">
                        Todo list editable
                    </button>
                </Link>

                <Link to='/ContadorYFormulario' className='w-100'>
                    <button className="btn btn-primary my-2 w-100">
                        Contador y formulario
                    </button>
                </Link>

                <Link to='/contador' className='w-100'>
                    <button class="btn btn-secondary my-2 w-100">
                        Contador
                    </button>
                </Link>

                <Link to='/generador' className='w-100'>
                    <button className="btn btn-danger my-2 w-100">
                        Generador de escusas
                    </button>
                </Link>

                <Link to='/formulario' className='w-100'>
                    <button className="btn btn-warning my-2 w-100">
                        Formulario
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
