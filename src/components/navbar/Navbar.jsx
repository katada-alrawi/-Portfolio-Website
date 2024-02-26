// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
//import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Katada</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
            Home
              {/* <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link> */}
            </li>
            <li>
            Serivces
              {/* <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link> */}
            </li>
            <li>
            Experience
              {/* <Link to="works" spy={true} smooth={true}>
                Experience
              </Link> */}
            </li>
            <li>
            Protfolio
              {/* <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link> */}
            </li>
            <li>
              {/* <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link> */}
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link> */}
      </div>
    </div>
  );
};

export default navbar;