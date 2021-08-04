import React from "react";
import logoRufit from "../../assets/img/logoRufit.png";
import { Navbar, Nav, NavDropdown, Container,Col } from "react-bootstrap";
import CartWidget from './CartWidget'

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
            <Navbar.Collapse
              className="justify-content-center"
              id="navbarScroll"
            >
              <Nav style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown title="Productos" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Remeras</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    Suplementos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Accesorios
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Contacto
                </Nav.Link>
              </Nav>
              <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}
              <CartWidget/>
              </Col>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default NavBar;
