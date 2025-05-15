import { useState } from 'react'
import AnshinLogo from '/AnshinSentoLogo.png'
import Sento from '/Sento.jpeg'
import Lounge from '/Lounge.jpg'
import Capsule from '/Capsules.jpeg'
import ReactDOM from "react-dom";


import './App.css'

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faBowlFood, faCouch, faWifi, faPlugCircleBolt,faHotTubPerson,faShower,faMattressPillow,faToilet } from '@fortawesome/free-solid-svg-icons'

// import { byPrefixAndName } from '@awesome.me/4dcdf5d070/icons'
// ReactDOM.render(element, document.body)


function App() {

  const [count, setCount] = useState(0)

  return (
    <>

    <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#context">Context</a>
  <a href="#activities">Activities</a>
  <a href="#contact">Contact</a>
      </div>
      


      <div>
        <a href="https://vite.dev" target="_blank">
          <br></br>
          <img src={AnshinLogo} className="photo"  alt="Vite logo" />
        </a>
      </div>
 


      <h1>     The First Sento Lounge place in Europe.</h1>

      
     <div class="row">
        <div class="column">
           <div class ="three"><h1>Sento Lounge Capsule </h1>   </div>
          <img src={Sento} className="picture" />
          <img src={Lounge} className="picture" />
          <img src={Capsule} className="picture"/>
        </div>
          </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          People interested {count}
        </button>
      </div>
      <p className="read-the-docs">

        Japan breakthrough experience. Zen. Clean. Quality.

   
      </p>

      <p id="pitch">
        Three pleasant experiences - Lounge, Sento & Capsule <br></br>
        We propose a new style of accomodation in Paris, based on Japan style.
        We will promise you a safe, sanitary and satisfying experience
  <br></br>
  </p>
      <p> 
        A price that is meant to be affordable but efficient.
        Starting from 12 euros for a set of 2 hours, confortable enough for bathing or taking a rest.
        Please see simulation here 

  </p>

      <p> 
        
        <p>
          <div class="three">
            <h1>Lounge</h1>
          <div id="boxes">         
          <span> <FontAwesomeIcon icon={faMugHot} size="3x"  />  &nbsp; </span>
          <span> <FontAwesomeIcon icon={faBowlFood}  size="3x"/>  &nbsp; </span> 
           <span> <FontAwesomeIcon icon={faCouch} size="3x"/>  &nbsp; </span>
            <span><FontAwesomeIcon icon={faWifi} size="3x"/>  &nbsp; </span>
            <span><FontAwesomeIcon icon={faPlugCircleBolt}size="3x" />  &nbsp; </span>
          
          </div>  

</div>

          
       
       </p>

        <p>
          <div class ="three"><h1>Sento </h1>  </div>

          
          <div id="boxes">  
            <span> <FontAwesomeIcon icon={faHotTubPerson} size="3x" />  &nbsp; </span>
          <span> <FontAwesomeIcon icon={faShower} size ="3x"/> &nbsp;</span>
        </div>
        </p>

        <p>
          <div class="three"> <h1>Capsule </h1></div>

          <div id="boxes"> 
           <span> <FontAwesomeIcon icon={faMattressPillow} size="3x"/> &nbsp; </span>
          <span><FontAwesomeIcon icon={faToilet} size="3x"/> &nbsp; </span>
        </div>  
        </p>
  </p>

  
  

    </>
  )
}

export default App
