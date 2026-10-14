import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:manjeetk7979@gmail.com" data-cursor="disable">
                manjeetk7979@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919110192362" data-cursor="disable">
                +91 91101 92362
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/PERO-99"
              target="_blank"
              data-cursor="disable"
              rel="noopener noreferrer"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/manjeet-kumar-146a67393"
              target="_blank"
              data-cursor="disable"
              rel="noopener noreferrer"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://instagram.com/manjeet_91101?vrfl=MTJmdDJ2YzBrODV1dA%3D%3D"
              target="_blank"
              data-cursor="disable"
              rel="noopener noreferrer"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://discord.com/users/pero.player_99"
              target="_blank"
              data-cursor="disable"
              rel="noopener noreferrer"
              className="contact-social"
            >
              Discord (pero.player_99) <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Manjeet Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
