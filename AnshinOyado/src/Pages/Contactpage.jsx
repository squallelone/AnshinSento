import "../CSSFiles/App.css";
import "../CSSFiles/Contactpage.css";

import { Link } from "react-router-dom";
import AnshinLogo from "/AnshinSentoLogo.png";

export function Contactpage() {
  return (
    <>
      <div class="topnav">
        <a href="#home">
          <Link to="/">Home</Link>
        </a>
        <a href="#context">
          <Link to="/context">Context</Link>
        </a>
        <a href="#activities">
          <Link to="/activities">Activities</Link>
        </a>
        <a href="#price">
          <Link to="/price">Pricing</Link>
        </a>
        <a class="active" href="#contact">
          <Link to="/contact">Contact</Link>
        </a>
      </div>
      <div>
        <br></br>
        <img src={AnshinLogo} className="photo" alt="Vite logo" />
      </div>
      <h1>
        {" "}
        Please feel free to contact us or to get notified for events and opening{" "}
      </h1>

      <p> We will organize some free events to gather your feedbacks. </p>
      <p>Free drinks and interesting discussions for Japan fans </p>
      <p> And also limited place for free Japanese food! </p>

      <form>
        <label>
          Enter your name:
          <input type="text" />
        </label>

        <label>
          Enter your email address:
          <input type="text" />
        </label>

        <label>
          Message (optional)
          <input size="80" type="text" />
        </label>
      </form>
    </>
  );
}
