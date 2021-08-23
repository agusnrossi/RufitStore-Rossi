import React from "react";
import logoRufit from "../../assets/img/logoRufit.png";
import { Navbar, Nav, NavDropdown, Container, Col } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Router from "../../Router/Router";

const NavBar = () => {
  return (
    <div>
      <>
        <br />
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Router>
            <Container>
              <Navbar.Brand as={Link} to="/">
                <img
                  alt=" logo rufit"
                  src={logoRufit}
                  width="130"
                  height="100"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
              <Navbar.Collapse
                className="justify-content-center"
                id="navbarScroll"
              >
                <Nav style={{ maxHeight: "100px" }} navbarScroll>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/category/remeras">
                      Remeras
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/category/suplementos">
                      Suplementos
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/Contacto">
                    Contacto
                  </Nav.Link>
                </Nav>
                <Col md={{ span: 3, offset: 3 }}>
                  {`md={{ span: 3, offset: 3 }}`}
                  <CartWidget />
                </Col>
              </Navbar.Collapse>
            </Container>
          </Router>
        </Navbar>
      </>
    </div>
  );
};

export default NavBar;
