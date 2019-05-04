import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const newNavbar = props => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link eventKey="erangel" onSelect={props.onMapSelect}>
          Erangel
        </Nav.Link>
        <Nav.Link eventKey="miramar" onSelect={props.onMapSelect}>
          Miramar
        </Nav.Link>
        <Nav.Link eventKey="sanhok" onSelect={props.onMapSelect}>
          Sanhok
        </Nav.Link>
        <Nav.Link eventKey="vikendi" onSelect={props.onMapSelect}>
          Vikendi
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default newNavbar;
