import React from "react";
import{MdTableRows} from "react-icons/md";; 

function Sections(props){
   
    return(
    <div id="parentSections">
        
     <input type="checkbox" id="menu" ></input>
     <label for="menu" ><MdTableRows className="hamburger"/></label>  
     <ul id="containSection">
        <li className="sections" onClick={props.viewAll}> All</li>
        <li className="sections" onClick={props.viewCoffe}>Coffee</li>
        <li className="sections" onClick={props.viewDrink}>Drink</li>
        <li className="sections" onClick={props.viewShot}>Shot</li>
     </ul>
    </div>
    )
    
}

 

export default Sections