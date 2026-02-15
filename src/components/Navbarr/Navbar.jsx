import React, { useState } from 'react';
import { Navbar, Nav, NavItem, Container, NavbarToggler, Collapse } from "reactstrap";
import bellyPhoto from '../../assets/belly.png';
import './Navbar.css'; 
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar fixed="top" expand="md" className="py-3 ">
      <Container className="d-flex justify-content-between align-items-center">
        
        <div className="d-flex align-items-center flex-grow-1">
          <NavLink to="/" className="me-4">
            <img 
              src={bellyPhoto} 
              alt="Profile" 
              style={{ 
                height: "45px", 
                borderRadius: "50%", 
                border: "1px solid #da3394"
              }} 
            />
          </NavLink>

          <Collapse isOpen={isOpen} navbar className="justify-content-start">
            <Nav className="gap-4 custom-nav-mobile" navbar>
              <NavItem>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link-custom active-link" : "nav-link-custom"} onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/who" className={({ isActive }) => isActive ? "nav-link-custom active-link" : "nav-link-custom"} onClick={() => setIsOpen(false)}>
                  Who
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/work" className={({ isActive }) => isActive ? "nav-link-custom active-link" : "nav-link-custom"} onClick={() => setIsOpen(false)}>
                  My Skill
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link-custom active-link" : "nav-link-custom"} onClick={() => setIsOpen(false)}>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>

        <NavbarToggler onClick={toggle} className="ms-2" />

      </Container>
    </Navbar>
  );
}

export default NavbarComponent;