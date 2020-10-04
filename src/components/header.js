import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import "../components/header.css"

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="music">Music</Nav.Link>
        <Nav.Link href="news">News</Nav.Link>
        <Nav.Link href="events">Events</Nav.Link>
        <Nav.Link href="shop">Shop</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
