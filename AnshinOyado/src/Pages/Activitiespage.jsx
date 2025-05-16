import "../CSSFiles/App.css";
import AnshinLogo from "/AnshinSentoLogo.png";
import { Link } from "react-router-dom";

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faBowlFood,
  faCouch,
  faWifi,
  faPlugCircleBolt,
  faHotTubPerson,
  faShower,
  faMattressPillow,
  faToilet,
} from "@fortawesome/free-solid-svg-icons";

// import { byPrefixAndName } from '@awesome.me/4dcdf5d070/icons'
// ReactDOM.render(element, document.body)

export function Activitiespage() {
  return (
    <>
      <div class="topnav">
        <a href="#home">
          <Link to="/">Home</Link>
        </a>
        <a href="#context">
          <Link to="/context">Context</Link>
        </a>
        <a class="active" href="#activities">
          <Link to="/activities">Activities</Link>
        </a>
        <a href="#price">
          <Link to="/price">Pricing</Link>
        </a>
        <a href="#contact">
          <Link to="/contact">Contact</Link>
        </a>
      </div>

      <div>
        <br></br>
        <img src={AnshinLogo} className="photo" alt="Vite logo" />
      </div>

      <h1> Suggested Timeline - 1 Day </h1>

      <p>
        Within one day you can go through all pleasant activities - please see
        an example of what could be done in Anshin Sento. It is meant to be just
        an example, and flexible through the duration taken based on your own
        needs.
      </p>
      <table id="timelineTable">
        <tr>
          <th>Time </th>
          <th>Activity</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>9:30 </td>
          <td>Breakfast</td>
          <td>You take some free miso soup and rice</td>
        </tr>
        <tr>
          <td>10:00</td>
          <td>Lounge</td>
          <td>You study/work in the lounge</td>
        </tr>

        <tr>
          <td>11:15 </td>
          <td>Breaktime</td>
          <td>You take a free coffee </td>
        </tr>
        <tr>
          <td>13:30 </td>
          <td>Massage </td>
          <td>After lunch, you use the massage chair during 20 minutes</td>
        </tr>
        <tr>
          <td>14:00 </td>
          <td>Lounge</td>
          <td>After a sip of free coke, you come back to your study/work</td>
        </tr>

        <tr>
          <td>16:00 </td>
          <td>Capsule</td>
          <td>
            You start to be tired and decide to go to your capsule to take a nap
            and rest
          </td>
        </tr>
        <tr>
          <td>17:00 </td>
          <td>Outside</td>
          <td> You decide to take a walk and have a dinner outside </td>
        </tr>
        <tr>
          <td>21:00 </td>
          <td>Shower </td>
          <td>
            {" "}
            After this long day, you take a shower before going to the Sento{" "}
          </td>
        </tr>
        <tr>
          <td>21:30 </td>
          <td>Sento </td>
          <td>
            {" "}
            you finally enjoy the Sento. It is hot and you regularly take some
            water outside the Sento{" "}
          </td>
        </tr>
        <tr>
          <td>22:15 </td>
          <td>Sauna </td>
          <td> Enjoying the experience to the fullest </td>
        </tr>

        <tr>
          <td>23:00 </td>
          <td>Capsule </td>
          <td>
            {" "}
            Relaxed, you get to your own clean capsule and sleep happily.{" "}
          </td>
        </tr>
      </table>

      <h1>The activities </h1>
      <p>
        <p>
          <div class="three">
            <h1>Lounge</h1>
            <div id="boxes">
              <span>
                {" "}
                <FontAwesomeIcon icon={faMugHot} size="3x" /> &nbsp;{" "}
              </span>
              <span>
                {" "}
                <FontAwesomeIcon icon={faBowlFood} size="3x" /> &nbsp;{" "}
              </span>
              <span>
                {" "}
                <FontAwesomeIcon icon={faCouch} size="3x" /> &nbsp;{" "}
              </span>
              <span>
                <FontAwesomeIcon icon={faWifi} size="3x" /> &nbsp;{" "}
              </span>
              <span>
                <FontAwesomeIcon icon={faPlugCircleBolt} size="3x" /> &nbsp;{" "}
              </span>
            </div>
          </div>
        </p>

        <p>
          <div class="three">
            <h1>Sento </h1>{" "}
          </div>

          <div id="boxes">
            <span>
              {" "}
              <FontAwesomeIcon icon={faHotTubPerson} size="3x" /> &nbsp;{" "}
            </span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faShower} size="3x" /> &nbsp;
            </span>
          </div>
        </p>

        <p>
          <div class="three">
            {" "}
            <h1>Capsule </h1>
          </div>

          <div id="boxes">
            <span>
              {" "}
              <FontAwesomeIcon icon={faMattressPillow} size="3x" /> &nbsp;{" "}
            </span>
            <span>
              <FontAwesomeIcon icon={faToilet} size="3x" /> &nbsp;{" "}
            </span>
          </div>
        </p>
      </p>
    </>
  );
}
