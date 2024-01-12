// Footer.js
import { FaGithub } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Container className="d-md-flex ">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <p className="text-white">&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <a
              href="https://github.com/geleco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-5"
            >
              <FaGithub className="footer-icon " /> GitHub
            </a>
            <a
              href="https://github.com/geleco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub className="footer-icon" /> GitHub
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
