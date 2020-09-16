import { Link } from "gatsby"
import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import "../components/header.css"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="#home">Out Of Context</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#music">Music</Nav.Link>
        <Nav.Link href="#news">News</Nav.Link>
        <Nav.Link href="#events">Events</Nav.Link>
        <Nav.Link href="#shop">Shop</Nav.Link>
        <NavDropdown title="More" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
