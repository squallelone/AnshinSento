import './App.css'
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from "./Pages/Homepage.jsx"
import { Contextpage} from "./Pages/Contextpage.jsx"
import { Activitiespage} from "./Pages/Activitiespage.jsx"
import { Contactpage } from "./Pages/Contactpage.jsx"
import{Pricepage} from "./Pages/Pricepage.jsx"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/context" element={<Contextpage/>} />
        <Route path="/activities" element={<Activitiespage/>} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/price" element = {<Pricepage/>}/>
      </Routes>
  </Router>
)

}

export default App
