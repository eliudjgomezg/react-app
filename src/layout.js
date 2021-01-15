import React from 'react'
import { Switch, Route } from "react-router-dom"
import GeneradorDeExcusas from './generador_de_escusas'
import Contador from './contador'
import Home from './home'
import FormularioContacto from './formulario_contacto'
import ContadorYFormulario from './contadorYFormulario'
import TodoEditable from './padre'

const Layout = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route path='/todoEditable'>
                <TodoEditable />
            </Route>

            <Route exact path='/ContadorYFormulario'>
                <ContadorYFormulario />
            </Route>

            <Route exact path='/contador'>
                <Contador />
            </Route>

            <Route exact path='/generador'>
                <GeneradorDeExcusas />
            </Route>

            <Route exact path='/formulario'>
                <FormularioContacto />
            </Route>
        </Switch>
    )
}

export default Layout