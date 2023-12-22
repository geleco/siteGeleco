import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
      <Navbar expand="lg" bg="color1" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{"G{ele}co"}</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"  className="text-white" >Home</Nav.Link>
            <Nav.Link href="#skills"  className="text-white" >Skills</Nav.Link>
            <Nav.Link href= "#projetos" className="text-white"  >Projetos</Nav.Link>
            <Nav.Link href="#livros"  className="text-white" >Livros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}
export default Menu;