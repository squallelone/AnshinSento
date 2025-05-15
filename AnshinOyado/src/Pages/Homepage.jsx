
import AnshinLogo from '/AnshinSentoLogo.png'
import Sento from '/Sento.jpeg'
import Lounge from '/Lounge.jpg'
import Capsule from '/Capsules.jpeg'
import ReactDOM from "react-dom";
import '../App.css'
import{Link} from "react-router-dom"

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faBowlFood, faCouch, faWifi, faPlugCircleBolt,faHotTubPerson,faShower,faMattressPillow,faToilet } from '@fortawesome/free-solid-svg-icons'

// import { byPrefixAndName } from '@awesome.me/4dcdf5d070/icons'
// ReactDOM.render(element, document.body)

export function Home() {
    return (
        <>
    

    <div class="topnav">
  <a class="active" href="#home"><Link to="/">Home</Link></a>
  <a href="#context"><Link to="/context">Context</Link></a>
                <a href="#activities"><Link to="/activities">Activities</Link></a>
                 <a href="#price"><Link to="/price">Pricing</Link></a>
  <a href="#contact"><Link to="/contact">Contact</Link></a>
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
           <div class ="three"><h1> 3 Pleasant experiences: <span id="greenboldFont">Sento, Lounge and Capsule</span></h1>   </div>
          <img src={Sento} className="picture" />
          <img src={Lounge} className="picture" />
          <img src={Capsule} className="picture"/>
        </div>
          </div>


            <div className="card">
                <Link to= "/context"> 
                <button type="button">
                    Discover the experience
                    </button>
                    </Link>
      </div>
     

      <p id="pitch">
           Japan breakthrough experience. Zen. Clean. Quality.<br></br>
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
       
          <div id="boxes">         
          <span> <FontAwesomeIcon icon={faMugHot} size="3x"  />  &nbsp; </span>
          <span> <FontAwesomeIcon icon={faBowlFood}  size="3x"/>  &nbsp; </span> 
           <span> <FontAwesomeIcon icon={faCouch} size="3x"/>  &nbsp; </span>
            <span><FontAwesomeIcon icon={faWifi} size="3x"/>  &nbsp; </span>
            <span><FontAwesomeIcon icon={faPlugCircleBolt}size="3x" />  &nbsp; </span>
            <span> <FontAwesomeIcon icon={faHotTubPerson} size="3x" />  &nbsp; </span>
          <span> <FontAwesomeIcon icon={faShower} size ="3x"/> &nbsp;</span>    
           <span> <FontAwesomeIcon icon={faMattressPillow} size="3x"/> &nbsp; </span>
          <span><FontAwesomeIcon icon={faToilet} size="3x"/> &nbsp; </span>

</div>

          
       
       </p>

  
  

    </>
            
)}

