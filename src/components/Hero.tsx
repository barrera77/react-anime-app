import { HStack } from "@chakra-ui/react";
import slide1 from "../assets/images/slide1.webp";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.jpeg";
import slide5 from "../assets/images/slide5.jpeg";
import slide6 from "../assets/images/slide6.webp";
import slide7 from "../assets/images/slide7.jpg";
import slide8 from "../assets/images/slide8.webp";
const Hero = () => {
  return (
    <div className="wrapper">
      <div className="slideshows">
        <div className="slideshow slideshow--hero">
          <div className="slides">
            <div className="slide slide1"></div>
            <div className="slide slide2"></div>
            <div className="slide slide3"></div>
            <div className="slide slide4"></div>
            <div className="slide slide5"></div>
            <div className="slide slide6"></div>
            <div className="slide slide7"></div>
            <div className="slide slide8"></div>
          </div>
        </div>
        <div className="slideshow slideshow--contrast slideshow--contrast--before">
          <div className="slides">
            <div className="slide slide1"></div>
            <div className="slide slide2"></div>
            <div className="slide slide3"></div>
            <div className="slide slide4"></div>
            <div className="slide slide5"></div>
            <div className="slide slide6"></div>
            <div className="slide slide7"></div>
            <div className="slide slide8"></div>
          </div>
        </div>
        <div className="slideshow slideshow--contrast slideshow--contrast--after">
          <div className="slides">
            <div className="slide slide1"></div>
            <div className="slide slide2"></div>
            <div className="slide slide3"></div>
            <div className="slide slide4"></div>
            <div className="slide slide5"></div>
            <div className="slide slide6"></div>
            <div className="slide slide7"></div>
            <div className="slide slide8"></div>
          </div>
        </div>
      </div>
    </div>

    /*<div className="slideshow">
        <div className="slideshow-frame">
          <div className="img-container" data-active>
            <img src={slide1} alt="slide1" />
          </div>
          <div className="img-container">
            <img src={slide2} alt="slide2" />
          </div>
          <div className="img-container">
            <img src={slide3} alt="slide3" />
          </div>
          <div className="img-container">
            <img src={slide4} alt="slide4" />
          </div>
          <div className="img-container">
            <img src={slide5} alt="slide5" />
          </div>
          <div className="img-container">
            <img src={slide6} alt="slide6" />
          </div>
          <div className="img-container">
            <img src={slide7} alt="slide7" />
          </div>
          <div className="img-container">
            <img src={slide8} alt="slide8" />
          </div>
        </div>
      </div> */
  );
};

export default Hero;
