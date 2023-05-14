import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthProvider";

export const NavbarMenu = () => {
  const { openModal, logout, isAuthenticated } = useAuth();
  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      className="border-bottom border-secondary px-4"
    >
      <Navbar.Brand href="#" className="fs-4">
        AI BASED <span className="text-primary fw-bold fs-2">OCR</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="ms-auto mb-2 mb-lg-0 fs-5 text-center">
          <Nav.Link href="#" className="text-primary">
            Home
          </Nav.Link>
          {!isAuthenticated ? (
            <NavDropdown title="Login" id="navbarDropdown">
              <NavDropdown.Item href="#signin" onClick={openModal}>
                Sign-in
              </NavDropdown.Item>
              <NavDropdown.Item href="#signup" onClick={openModal}>
                New User? Sign-Up
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            ""
          )}
          <Nav.Link href="#OurServices">Services</Nav.Link>
          <Nav.Link href="#about_US">Our Team</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
          {isAuthenticated ? (
            <Nav.Link
              href="#Logout"
              className="text-danger font-weight-bold text-uppercase"
              onClick={logout}
            >
              Logout
            </Nav.Link>
          ) : (
            ""
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
