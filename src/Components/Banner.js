import React from "react";
import img from "../img/glass.jpg";
import {IoIosArrowDropdownCircle} from "react-icons/io"

function Banner(props){
    return(
        <div id="banner" style={
            {backgroundImage: `url(${img})`, 
             backgroundRepeat:'no-repeat',
             backgroundPosition:'center',
             backgroundSize:'cover'

        }}>
            <h3>Accomodati <br></br>Cosa vuoi bere ?</h3>
           <span onClick={props.moveOnDown} id="moveOnDown"> 
            <IoIosArrowDropdownCircle style={{fontSize:"2rem"}}></IoIosArrowDropdownCircle> 
           </span>
        </div>
    )
}
export default Banner