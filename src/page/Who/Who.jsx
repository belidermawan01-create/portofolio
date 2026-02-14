import { Container, Row, Col, Button } from "reactstrap";
import bellyPhoto from "../../assets/belly.png";
import "./Who.css";
import { TypeAnimation } from "react-type-animation";
import Projects from "../../components/Projects/Projects";

const Who = () => {
  return (
    <>
    <section className="who-wrapper ">
      <Container style={{marginTop: "50px"}} fluid className="who-container">
        <Row className="who-main align-items-center">

          <Col md="5" className="who-left">
          <p style={{color: "#da3394"}} className=" mb-2">About Me.</p>
             <h1 className="hero-title">
      <span className="typing-text">
        <TypeAnimation
          sequence={[
            "Frontend Developer", 
            1500,
            "Backend Developer", 
            1500,
            "React Developer", 
            1500,
            "UI/UX Designer", 
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="span"
        />
      </span>
    </h1>

            <div className="d-flex align-items-center mb-3">
              <div className="title-line"></div>
              <h5 className="text-accent mb-0">Programmer</h5> 
            </div>
            <p className="who-text">
              
  I am an aspiring Fullstack Developer with a strong interest in building modern web applications.
  I have experience working with React for frontend development and Node.js with Express for backend development.
  I enjoy creating responsive user interfaces, developing APIs, and continuously improving my skills through real projects.


            </p>
          </Col>

          <Col lg="4" md="12" className="who-center text-center">
            <div className="who-image-box">
              <img src={bellyPhoto} alt="profile" />
              <div style={{color: "#da3394"}} className="who-project">
                <span>Student at PeTIK</span>
                <h5>+1 Year</h5>
              </div>
            </div>
          </Col>

          <Col md="3" className="who-right">
            <div className="who-exp text-white">
              <span className="text-white" >Years of Experience</span>
              <h2>1+</h2>
            </div>

            <div className="who-client text-white">
              <span className=" text-white">Client</span>
              <h2>5+</h2>
            </div>

            <Button className="who-contact">
              Contact me →
            </Button>
            

            <div className="who-circle"></div>
          </Col>
        </Row>

        
        <Row className="justify-content-center">
          <Col md="8">
            <div className="who-social">
              <a className="text-decoration-none" href="">
              <div className="who-social-btn ">Dribbble</div>
              </a>
              <a className="text-decoration-none" href="">
              <div className="who-social-btn">Behance</div>
              </a>
              <a className="text-decoration-none" href="">
              <div className="who-social-btn">Fiverr</div>
              </a>
              <a className="text-decoration-none" href="">
              <div className="who-social-btn">Linkedin</div>
              </a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
      <Projects/>
    </>
  );
};

export default Who;
