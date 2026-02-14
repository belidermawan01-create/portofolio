import { Container, Row, Col, Button } from "reactstrap";
import bellyPhoto from "../../assets/belly.png";
import "./Who.css";
import { TypeAnimation } from "react-type-animation";
import Projects from "../../components/Projects/Projects";

const Who = () => {
  return (
    <>
    <section className="who-wrapper ">
      <Container style={{ marginTop: "50px" }} fluid className="who-container">
  <Row className="who-main align-items-center">
    <Col lg="4" md="12" className="who-left mb-5 mb-lg-0">
      <p style={{ color: "#da3394" }} className="mb-2">About Me.</p>
      <h1 className="hero-title">
        <span className="typing-text">
          <TypeAnimation
            sequence={["Frontend Developer", 1500, "Backend Developer", 1500, "React Developer", 1500, "UI/UX Designer", 1500]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
          />
        </span>
      </h1>
      <div className="d-flex align-items-center mb-3 justify-content-center justify-content-lg-start">
        <div className="title-line"></div>
        <h5 className="text-accent mb-0">Programmer</h5>
      </div>
      <p className="who-text text-dark">
        I am an aspiring Fullstack Developer with a strong interest in building modern web applications.
      </p>
    </Col>

    <Col lg="4" md="12" className="who-center text-center mb-5 mb-lg-0">
      <div className="who-image-box">
        <img src={bellyPhoto} alt="profile" className="img-fluid" />
        <div style={{ color: "#da3394" }} className="who-project">
          <span>Student at PeTIK</span>
          <h5>+1 Year</h5>
        </div>
      </div>
    </Col>

    <Col lg="4" md="12" className="who-right text-center text-lg-start">
      <div className="who-exp">
        <span className="text-muted">Years of Experience</span>
        <h2 className="text-dark">1+</h2>
      </div>
      <div className="who-client">
        <span className="text-muted">Client</span>
        <h2 className="text-dark">5+</h2>
      </div>
      <Button className="who-contact mx-auto mx-lg-0">
        Contact me →
      </Button>
    </Col>
  </Row>

  <Row className="justify-content-center mt-5">
    <Col xs="12">
      <div className="who-social">
        {['Dribbble', 'Behance', 'Fiverr', 'Linkedin'].map((item) => (
          <a key={item} className="text-decoration-none" href="#">
            <div className="who-social-btn">{item}</div>
          </a>
        ))}
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
