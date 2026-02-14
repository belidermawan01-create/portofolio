import { Navbar, Nav, NavItem, Container } from "reactstrap";
import bellyPhoto from '../../assets/belly.png';
import Who from "../../page/Who/Who";
import './Navbar.css'; 
import { NavLink } from "react-router-dom";
function NavbarComponent() {
  return (
    <Navbar 
      fixed="top" 
      expand="md" 
      className="py-3" 
      
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="gap-4 px-4" style={{ flexDirection: "row", alignItems: "center" }}>

  <NavItem>
    <NavLink to="/">
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
  </NavItem>

  <NavItem>
    <NavLink 
      to="/" 
      className={({ isActive }) =>
        isActive ? "nav-link-custom active-link" : "nav-link-custom"
      }
    >
      Home
    </NavLink>
  </NavItem>

  <NavItem>
    <NavLink 
      to="/who" 
      className={({ isActive }) =>
        isActive ? "nav-link-custom active-link" : "nav-link-custom"
      }
    >
      Who
    </NavLink>
  </NavItem>

  <NavItem>
    <NavLink 
      to="/work" 
      className={({ isActive }) =>
        isActive ? "nav-link-custom active-link" : "nav-link-custom"
      }
    >
      Work
    </NavLink>
  </NavItem>

  <NavItem>
    <NavLink 
      to="/contact" 
      className={({ isActive }) =>
        isActive ? "nav-link-custom active-link" : "nav-link-custom"
      }
    >
      Contact
    </NavLink>
  </NavItem>

</Nav>


        <div>
          
        </div>

      </Container>
    </Navbar>
  );
}

export default NavbarComponent;