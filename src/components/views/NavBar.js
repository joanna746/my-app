import Container from "react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ()=>{
    return(
        <Navbar bg="success" variant="dark" expand="lg" className="mt-4 mb-4 rounded">   
        <Container >
            <Navbar.Brand href = "#home">Ziołolecznictwo</Navbar.Brand>
            
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="me-auto">
   
  <Nav.Link as={NavLink}to="/">Home</Nav.Link>
  <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
  <Nav.Link as={NavLink} to="/about">About</Nav.Link>
</Nav>    
        </Container>
        </Navbar>
    )
    }
    export default NavBar;