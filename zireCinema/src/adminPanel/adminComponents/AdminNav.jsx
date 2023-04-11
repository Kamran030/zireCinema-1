import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useParams } from "react-router";
const AdminNav = () => {
  let { userId } = useParams();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#2C3034"}} variant="dark">
        <Container>
          <Navbar.Brand href={`/admin/${userId}`}>Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={`/admin/${userId}/users`}>Istifadəçilər</Nav.Link>
              <Nav.Link href={`/admin/${userId}/addfilm`}>Kinolar</Nav.Link>
              <Nav.Link href={`/admin/${userId}/addsession`}>Seanslar</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Back to website</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNav;
