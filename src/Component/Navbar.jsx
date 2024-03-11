import React, { useState } from "react";
import logo from "../assets/Image/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbars = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);

  const handlePartnersMouseEnter = () => {
    setIsPartnersOpen(true);
  };

  const handlePartnersMouseLeave = () => {
    setIsPartnersOpen(false);
  };

  const handleSolutionsMouseEnter = () => {
    setIsSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    setIsSolutionsOpen(false);
  };

  const handleSupportMouseEnter = () => {
    setIsSupportOpen(true);
  };

  const handleSupportMouseLeave = () => {
    setIsSupportOpen(false);
  };

  const handleExploreMouseEnter = () => {
    setIsExploreOpen(true);
  };

  const handleExploreMouseLeave = () => {
    setIsExploreOpen(false);
  };

  const handleProductsMouseEnter = () => {
    setIsProductsOpen(true);
  };

  const handleProductsMouseLeave = () => {
    setIsProductsOpen(false);
  };

  const handleSoftwareMouseEnter = () => {
    setIsSoftwareOpen(true);
  };

  const handleSoftwareMouseLeave = () => {
    setIsSoftwareOpen(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{ position: "sticky", top: "0", zIndex: "1000" }}
      >
        <Container fluid className="main-section">
          <Navbar.Brand as={Link}  to='/'>
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto color-white">
              <Nav.Link as={Link} to="/e-store" style={{color:"white"}}>
                e-Store
              </Nav.Link>

              <NavDropdown
                title="Solutions"
                id="basic-nav-dropdown"
                show={isSolutionsOpen}
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <NavDropdown.Item as={Link} to="/Enterprise">
                  Enterprise
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Education">
                  Education
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Support"
                id="basic-nav-dropdown"
                show={isSupportOpen}
                onMouseEnter={handleSupportMouseEnter}
                onMouseLeave={handleSupportMouseLeave}
              >
                <NavDropdown.Item  as={Link} to="/warranty-Check" >
                  Warranty Check
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/help-center">
                  Help center
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/download-center">
                  Download center
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/service-Request">
                  Service Request
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tutorial-Video">
                  Tutorial Video
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Explore"
                id="basic-nav-dropdown"
                show={isExploreOpen}
                onMouseEnter={handleExploreMouseEnter}
                onMouseLeave={handleExploreMouseLeave}
              >
                <NavDropdown.Item as={Link} to="/company">
                  Company
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/insights">
                  Insights
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/headlines">
                  Headlines
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/careers">
                  Careers
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Products"
                id="basic-nav-dropdown"
                show={isPartnersOpen}
                onMouseEnter={handlePartnersMouseEnter}
                onMouseLeave={handlePartnersMouseLeave}
              >
                <NavDropdown.Item as={Link} to="/deltaView-Spark">
                  DeltaView Spark
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deltaView-Blaze">
                  DeltaView Blaze
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Partners"
                id="basic-nav-dropdown"
                show={isProductsOpen}
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <NavDropdown.Item as={Link} to="/partner-Success">
                  Partner Success
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/find-a-partner">
                  Find a partner
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Software"
                id="basic-nav-dropdown"
                show={isSoftwareOpen}
                onMouseEnter={handleSoftwareMouseEnter}
                onMouseLeave={handleSoftwareMouseLeave}
              >
                <NavDropdown.Item as={Link} to="/deltaView-Canvas">
                  DeltaView Canvas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deltaView-Connect">
                  DeltaView Connect
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="right-side">
            <ul>
              <li>
                <a href="">
                  <i className="fa fa-user user_icon"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
            <a href="" className="Book-demo">
              <span>Book A demo</span>
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
