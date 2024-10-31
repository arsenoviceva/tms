import { Row, Col, Container } from "react-bootstrap";

export const Banner = () => {
    return (
        <div className="banner-container">
            <div>
                <p className="text-white"> Black Friday</p>
                <p className="banner-text-blue"> Cyber Monday</p>
            </div>
            <div className="countdown">
                <p className="countdown-title">
                    sale up to 60% off
                </p>
                <div className="countdown-block">
                    <div> 
                        <p className="countdown-number">7</p>
                        <p className="countdown-text"> Days</p>
                    </div>
                    <div> 
                        <p className="countdown-number">7</p>
                        <p className="countdown-text"> Hours</p>
                    </div>
                    <div> 
                        <p className="countdown-number">7</p>
                        <p className="countdown-text"> Min</p>
                    </div>
                    <div> 
                        <p className="countdown-number">7</p>
                        <p className="countdown-text"> Sec</p>
                    </div>
                </div>
            </div>
            <button className="banner-button"> Shop Now</button>
             
        </div>
    )
}
