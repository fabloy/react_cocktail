import React, { useEffect} from 'react';
import $ from 'jquery';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Sections from './Components/Sections';

import './App.css';




function App() {

  const [drink, setDrink]= React.useState([])
  const [newDrink, setNewDrink]= React.useState([])
  
  const refresh=()=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
    .then(res=>res.json())
    .then(response => {
      setDrink(response.drinks)
      document.getElementsByTagName("input")[0].value=""
      
        var section =[...document.getElementsByClassName("sections")]
        section[0].style.color="rebeccapurple"
        for(var i = 0; i<section.length; i++){
            if(section[i]!==section[0]){
                section[i].style.color="white"
            }//prendo tutti i section eccetto il primo [0] ovvero All e imposto color="white"
        }
  
     })
     
}
  useEffect(()=>{refresh()}, [])
  //useEffect ricarica il contenuto dell'array dei cocktail restituendo tutti i drink,
  // grazie alle [] l'azione di ricaricamento avviene una volta sola e non in loop
  
  const colorSectionActive = (nameSection)=>{
    var section =[...document.getElementsByClassName("sections")]
        section.filter((el)=>{
        if(el.innerHTML===nameSection){
          el.style.color="rebeccapurple"
          return el
          }
          return el.style.color="white"
        })
        $(document.documentElement).animate({scrollTop: $("nav").offset().top},500)
  }

  const resize=($event)=>{
    if($event.type==="focus"){
      $(document.documentElement).animate({scrollTop: $("nav").offset().top},800)
    }
  }
   
  const moveOnDown=()=>{
    if($(document.documentElement).offset().top===0){
       $(document.documentElement).animate({scrollTop: $("nav").offset().top},700)
    }
  }
  

  const searchDrink=(drinkSearched)=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSearched}`)
      .then(res=>res.json())
      .then(response => {
        if(response.drinks!==null){
          setNewDrink(response.drinks)
          setDrink(newDrink)
          $(document.documentElement).animate({scrollTop: $("nav").offset().top},800)
          colorSectionActive("")
        }
        })
    }
    
    const viewCoffe=()=>{
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then(res=>res.json())
      .then(response=>{
       let coffe = response.drinks.filter((item)=>{
         return item.strCategory==="Coffee / Tea"
        })
        colorSectionActive("Coffee")
        setDrink(coffe)
     })
    }

    const viewDrink=()=>{
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then(res=>res.json())
      .then(response=>{
        let drinkFind = response.drinks.filter((item)=>{
         return item.strCategory==="Ordinary Drink" || item.strCategory==="Cocktail" ? true : false
        })
        setDrink(drinkFind)
        colorSectionActive("Drink")
      })
    }
    const viewShot=()=>{
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then(res=>res.json())
      .then(response=>{
        let drinkFind = response.drinks.filter((item)=>{
          return item.strCategory==="Shot"
        })
        setDrink(drinkFind)
        colorSectionActive("Shot")
      })
    }
   
   
  
  return (
    <div className="App">
     
    <Banner
    viewCoffe={viewCoffe}
    moveOnDown={moveOnDown}>
    </Banner>
    <Navbar 
    searchDrink={searchDrink}
    innerText="Refresh"
    refresh={refresh}
    resize={resize}
    >
    </Navbar>
    <Sections 
     viewCoffe={viewCoffe}
     viewAll={refresh}
     viewDrink={viewDrink}
     viewShot={viewShot}>
    </Sections>
    
     <ul id="na">
       
      {
       drink.map((d, index)=>{
         return(
           
         
            <li className="container">
             <div className="card">
              <div className="face face1">
               <div className="content">
                <div className="icon" style={{backgroundImage:`url(${d.strDrinkThumb})`}}>
                
                </div>
               </div>
              </div>
             <div className="face face2">
                <div className="content">
                  
                  <h3>{d.strDrink}</h3>
                 <strong> Ingredients: </strong><br />
                  {d.strIngredient1}, {d.strIngredient2}, {d.strIngredient3}
                 
                </div>
            </div>
        </div>
    </li>
        
          ) 
       
        })
      }
     </ul>
 </div>
  );
}

export default App;
