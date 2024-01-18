// Footer.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <Container className="d-flex align-items-center justify-content-center m-0">
        <Row>
          <Col className="text-md-center">
            <p className="text-center text-white">&copy; 2024. {"G{ele}co"} Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
