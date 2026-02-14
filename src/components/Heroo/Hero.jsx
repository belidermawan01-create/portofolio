import { Container, Row, Col, Button } from 'reactstrap';
import bellyPhoto from '../../assets/belly.png';
import astronot from '../../assets/Astronaut.png';
import marque from '../../assets/logos.png';
import './Hero.css'; 
import LogoMarquee from './LogoMarquee';
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md="6">
            <p style={{color: "#da3394"}} className=" mb-2">Hello World.</p>
             <h1 className="hero-title text-dark">
      <span className="typing-text">
        <TypeAnimation
  sequence={[
    "Beli Dermawan",
    2000,
    "",
    500,
  ]}
  speed={200}
  repeat={Infinity}
  wrapper="span"
  cursor={true}
/>


      </span>
    </h1>
            <div className="d-flex align-items-center mb-3">
              <div className="title-line"></div>
              <h5 className="text-accent mb-0">My Portofolio</h5> 
            </div>
            <p className="lead text-dark">
              Let's enjoy the process of creating a professional and enjoyable digital experience.
            </p>
            {/* <Button className="bg-accent border-0" size="sm">Learn More</Button> */}
            
            <LogoMarquee />
            
          </Col>
          
          <Col md="6" className="text-center">
            <div className="image-wrapper">
              <div className="blob-bg"></div>
              <img 
                src={astronot} 
                alt="Beli Dermawan" 
                className="hero-image" 
              />
            </div>
          </Col>
        </Row>
      </Container>
      
      
    </section>
  );
};

export default Hero;