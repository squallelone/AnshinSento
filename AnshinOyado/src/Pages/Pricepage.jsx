import "../CSSFiles/App.css";
import "../CSSFiles/Pricepage.css";
import { Link } from "react-router-dom";
import AnshinLogo from "/AnshinSentoLogo.png";
import Accordion from "react-bootstrap/Accordion";

export function Pricepage() {
  return (
    <>
      <div class="topnav">
        <a  href="#home">
          <Link to="/">Home</Link>
        </a>
        <a href="#context">
          <Link to="/context">Context</Link>
        </a>
        <a href="#activities">
          <Link to="/activities">Activities</Link>
        </a>
        <a class="active" href="#price">
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

      <h1> Luxury Service. Flexible and affordable price. </h1>

      <p>
        No reservation needed. Come and stay as long as you like. <br></br>
        All passes include unlimited drinks, access to the lounge, and bath
        facilities.
      </p>

      <p>
        The model is flexible: you can stay from 2 hours to several weeks.
        Should you want to just use the sento, or have an accomodation, rest,
        enjoy unlimited drinks, prioritize the massage chair, everything is up
        to you given the time that you need.
      </p>

      <table id="timelineTable">
        <tr>
          <th>Duration </th>
          <th>Pricing </th>
          <th>Services </th>
        </tr>
        <tr>
          <td>2 hours </td>
          <td>12 euros</td>
          <td>Sento and Lounge access</td>
        </tr>
        <tr>
          <td>5 hours</td>
          <td>18 euros </td>
          <td>Sento, Lounge and Capsule access (until midnight)</td>
        </tr>

        <tr>
          <td>10 hours </td>
          <td>24 euros </td>
          <td>Sento, Lounge and Capsule access (until midnight) </td>
        </tr>
        <tr>
          <td>Staying overnight </td>
          <td>Pricing based on demand </td>
          <td>Sento, Lounge and Capsule access</td>
        </tr>
      </table>

      <h1>Frequently Asked Questions</h1>

      {/* <button class="accordion"> Do I need to bring anything? </button>
            <div class="panel">
            <p> No — we provide everything you need on-site, including towels, toiletries, and a sentō uniform.</p>
            </div>

             <button class="accordion"> Can I stay longer than the expected duration?</button>
            <div class="panel">
            <p> Yes — extra time is possible. We charge €1.50 for each additional 15 minutes.</p>
            </div>
             
            <button class="accordion"> What’s included in the price?</button>
            <div class="panel">
            <p> Each pass includes access to the services listed in your plan (see above). For more details, check the “Activities” section.</p>
            </div> */}

      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Do I need to bring anything?</Accordion.Header>
          <Accordion.Body>
            No — we provide everything you need on-site, including towels,
            toiletries, and a sentō uniform.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Can I stay longer than the expected duration?
          </Accordion.Header>
          <Accordion.Body>
            Yes — extra time is possible. We charge €1.50 for each additional 15
            minutes.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What’s included in the price?</Accordion.Header>
          <Accordion.Body>
            Each pass includes access to the services listed in your plan (see
            above). For more details, check the “Activities” section.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
