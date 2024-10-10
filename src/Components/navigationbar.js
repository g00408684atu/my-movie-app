// Import the 'Navbar' and 'Nav' components from the 'react-bootstrap' library
import { Navbar, Nav } from 'react-bootstrap';
// Imported Link component from 'react-router-dom' for navigation between routes
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    // Nav.Link with link ensures it works with react router for navigation bar
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/read">Read</Nav.Link>
        <Nav.Link as={Link} to="/create">Create</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;