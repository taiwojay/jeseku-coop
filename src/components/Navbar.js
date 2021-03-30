import React from 'react'
import { Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function Navigation() {

    return (
      <Navbar collapseOnSelect expand="lg" bg='light' variant="light" sticky='top'>
        <Navbar.Brand as={Link} to ='/'>Jẹsẹ́kù</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
    <Nav>
      <Nav.Link as={Link} to ='/'>Home</Nav.Link>
      <Nav.Link as={Link} to ='/about-us'>About Us</Nav.Link>
      <Nav.Link href="https://forms.gle/yG6tJ66dtNiqe7uo9">Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
     
    )
}
