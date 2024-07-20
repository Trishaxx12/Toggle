import React from 'react'
import '../../App.css'
import picture from '../../assets/picture.png'

const ToggleComponent = () => {
    function showButton(){
        let x=document.getElementById("show").innerText
        console.log(x);
        if(x=="Show Details"){
            document.getElementById("show").innerText="Hide Details"
            document.getElementById("details").style.display="block"
            document.getElementById("maindiv").style.height="320px"
        }
        else{
            document.getElementById("show").innerText="Show Details"
            document.getElementById("details").style.display="none"
            document.getElementById("maindiv").style.height="256px"
        }
    }
  return (
       <React.Fragment>
            <div id="maindiv">
            <img src={picture}alt='picture'></img>
            <h1>Trisha</h1>
            <p>Registration No. : 212221040173</p>
            <button onClick={showButton} id="show">Show Details</button>
            <p id="details">Department : CSE<br/>Year :  IV<br/>College : SEC<br/></p>
            </div>
        </React.Fragment>
    
  )
}

export default ToggleComponent