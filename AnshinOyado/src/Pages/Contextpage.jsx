import "../CSSFiles/App.css";
import AnshinLogo from "/AnshinSentoLogo.png";
import { Link } from "react-router-dom";

export function Contextpage() {
  return (
    <>
      <div class="topnav">
        <a href="#home">
          <Link to="/">Home</Link>
        </a>
        <a class="active" href="#context">
          <Link to="/context">Context</Link>
        </a>
        <a href="#activities">
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

      <h1> It is meant </h1>
      <ul>
        <li>
          If you are looking for <span id="greenboldFont">comfort</span>{" "}
        </li>
        <li>
          If you are looking for{" "}
          <span id="greenboldFont">
            a different place from usual workspaces or comfort spaces
          </span>
        </li>
        <li>
          If you are looking for{" "}
          <span id="greenboldFont">
            the right balance between a dynamic environment and a quiet one
          </span>
        </li>
      </ul>
      <br></br>
      <p>
        For <span id="greenboldFont"> remote workers and students </span>,
        options in the city are limited: libraries feel too sterile, cafés are
        too loud and chaotic, and coworking spaces often lack soul — expensive
        seats without real comfort or atmosphere.
      </p>
      <p>
        For <span id="greenboldFont"> city dwellers looking to rest </span>, the
        choices are no better: luxury spas come with high price tags, and
        massage parlors feel transactional, not relaxing.
      </p>
      <p>
        Our Japanese Lounge Sentō offers a third place — a calm, beautifully
        designed environment that welcomes both focus and rest. Whether you're
        reading, working remotely, or simply letting go, it’s a sanctuary where
        time slows down and well-being takes center stage.
      </p>

      <h1> Our concept </h1>
      <p>
        Imagine a place of stillness in the heart of Paris. Inspired by the
        traditional Japanese sentō — public bathhouses where people go to unwind
        — this is a modern take combining deep relaxation with the calm elegance
        of a silent lounge.
        <p>
          A sanctuary for the urban soul. No phones. No noise. No rush. Just an
          atmosphere designed for peace, recovery, and quiet focus. The space
          includes: Authentic hot baths inspired by Japanese traditions
          Minimalist, comfortable resting areas A light food and drink selection
          (miso soup, matcha tea, onigiri)
        </p>
        <p>
          A soft, dimly lit environment for reading, meditating, or simply
          disconnecting It’s the premium alternative to noisy spas, overcrowded
          cafés, or soulless coworking spaces — a space to recharge without
          distraction.
        </p>
      </p>
    </>
  );
}
