import { Navbar, Container, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import curriculoPDF from '../../assets/images/Curriculo.pdf';
import './menu.scss'

const Menu = () => {
  const handleDownload = () => {
    // Crie um link temporário e clique nele para iniciar o download
    const link = document.createElement('a');
    link.href = curriculoPDF;
    link.download = 'Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Download do currículo iniciado...');
  };

  return (
    <Navbar className='lgbt-flag'>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className='brand-color'>{"G{ele}co"}</Navbar.Brand>
        <Button variant="light" onClick={handleDownload}>
          <FaDownload className="me-2" />
          Curriculo
        </Button>
      </Container>
    </Navbar>
  );
};

export default Menu;

