import React from 'react'
import { Link } from "react-router-dom"

const SideBar = () => {
    return (
       <>
            <p className='p-green'>Soy sideBar</p>
            <Link to='/'>
                <button>
                    Volver
                    </button>
            </Link>
       </>
    )
}

export default SideBar
