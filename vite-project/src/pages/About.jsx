import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import minhaImagem from '../assets/images/minha-imagem.png';
import './about.scss';


function About() {
  return (
    <Container>
      <Row className="about-text">
        <Col xs={12} md={6} className="d-flex align-items-center">
          <p >
            Olá, me chamo {"G{ele}co"}, um desenvolvedor web e ux design
            baiano, amante de carboidratos e dendê; apaixonado por tecnologia
            Nas horas vagas costumo escrever.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Image src={minhaImagem} alt="Sua Imagem" fluid className="about-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;