import React from "react";
import logoRufit from '../../assets/img/logoRufit.png'
import { Navbar,Nav,NavDropdown, Container } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div>
      <>
 
    
      
        <br />
        <Navbar fixed="top" collapseOnSelect expand="lg"  bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=" logo rufit"
                src={logoRufit}
                width="130"
                height="100"
                className="d-inline-block align-top"
              />{" "}            
            </Navbar.Brand>
            <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};
