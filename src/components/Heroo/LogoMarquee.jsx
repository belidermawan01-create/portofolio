import React from "react";
import { Container } from "reactstrap";
import "./LogoMarquee.css";
import marque from '../../assets/logos.png';

const LogoMarquee = () => {
  return (
    <Container fluid className="marquee-wrapper mt-5">
      <div className="marquee">
        <div className="marquee-track">
          {[...Array(12)].map((_, i) => (
            <img
              key={i}
              src={marque}
              alt="logo"
              className="logo-img"
            />
          ))}

          {[...Array(12)].map((_, i) => (
            <img
              key={`dup-${i}`}
              src={marque}
              alt="logo"
              className="logo-img"
            />
          ))}
        </div>
      </div>

      <div className="fade-left"></div>

      <div className="fade-right"></div>
    </Container>
  );
};

export default LogoMarquee;
