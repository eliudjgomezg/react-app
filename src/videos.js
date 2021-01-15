import React from 'react'
import { importantData } from './data'

function Videos(props) {
    console.log(props)
    return (
        <div>
            <p>Soy videos </p>
    <p>{importantData}</p>
        </div>
    )
}

export default Videos
