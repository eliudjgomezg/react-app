import React, { useState } from 'react'
import { Link } from "react-router-dom"

function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [rut, setRut] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [condicion, setCondicion] = useState(false)

  const enviar = (event) => {
    event.preventDefault()
    setCondicion(true)
  }

  const handleChange = (e) => {
    setNombre(e.target.value)
  }
  const handleChange2 = (e) => {
    setRut(e.target.value)
  }
  const handleChange3 = (e) => {
    setTelefono(e.target.value)
  }
  const handleChange4 = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={enviar}>
      <h4>Mi primer formulario</h4>
      <input placeholder='Ingresa tu nombre' className='d-block' value={nombre} onChange={handleChange} required />
      <input placeholder='Ingresa tu rut' className='d-block' onChange={handleChange2} required />
      <input placeholder='Ingresa tu telefono' type='number' className='d-block' onChange={handleChange3} required />
      <input placeholder='Ingresa tu correo' type='email' className='d-block' onChange={handleChange4} required />

      <button className='d-block' type='submit'>
        Enviar
            </button>
      <Link to='/'>
        <button>
          Volver
        </button>
      </Link>

      {condicion &&
        <>
          <p className=''>Nombre ingresado: {nombre}</p>
          <p>Rut ingresado: {rut}</p>
          <p>Telefono ingresado: {telefono}</p>
          <p>Email ingresado: {email}</p>
        </>
      }
    </form>
  )
}

export default FormularioContacto
