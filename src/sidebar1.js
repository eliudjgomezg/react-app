import React  from 'react'
import {sidebar, moreData} from './data'

function Sidebar1(props) {
    console.log(props)
    return (
       <div>
           <p>{sidebar}</p>
           <p>{moreData}</p>
       </div>
    )
}

export default Sidebar1
