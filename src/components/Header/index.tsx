import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./header.css";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Navbar
          fixed="top"
          expand="lg"
          bg="dark"
          variant="dark"
          className="topnav"
        >
          <Navbar.Brand href=""></Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;
