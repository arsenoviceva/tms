import { Row, Col, Container } from "react-bootstrap";
import { Countdown } from "./Countdown";

export const Banner = () => {
  return (
    <div className="banner-container">
      <img src="../../images/eclipsel.png" className="eclipse-left" />

      <div>
        <p className="text-white"> Black Friday</p>
        <p className="banner-text-blue"> Cyber Monday</p>
      </div>
      <div className="countdown">
        <p className="countdown-title">sale up to 60% off</p>
        <Countdown duration={7 * 24 * 60 * 60 * 1000} />
      </div>
      <button className="banner-button"> Shop Now</button>
      <img src="../../images/icon_close.png" className="icon-close" />
      <img src="../../images/eclipser.png" className="eclipse-right" />
    </div>
  );
};
