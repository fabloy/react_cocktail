import React from "react";

import{ IoIosRefreshCircle }from"@react-icons/all-files/io/IoIosRefreshCircle";   

function Navbar(props){

    return(
        <nav>
             <input type="search" onFocus={props.resize} onBlur={props.resize} onChange={(e)=>{props.searchDrink(e.target.value)}}></input>
             <button onClick={props.refresh}><IoIosRefreshCircle  onClick={props.refresh} style={{fontSize:"2.5rem"}}/></button>
           

    </nav>
        
    )
}

export default Navbar