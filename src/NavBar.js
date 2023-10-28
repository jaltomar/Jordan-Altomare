import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar expand="sm" className="header">
      <h2 className="me-auto align-self-center mb-0">Bob Odensky</h2>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="custom-link" href="asdf">
            GitHub
          </Nav.Link>
          <Nav.Link className="custom-link" href="asdf">
            LinkedIn
          </Nav.Link>
          {/* You can add more Nav.Link components for additional links */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

// const NavBar = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#about">About</Nav.Link>
//           {/* Add more Nav.Link components for other navigation links */}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavBar;
