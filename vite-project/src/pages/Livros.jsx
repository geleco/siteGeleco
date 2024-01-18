// Livros.jsx
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';
import Livro1Image from '../assets/images/pulseiradeodisea.png';
import DeusesBainos from '../assets/images/deuses_baianos.jpg'
import './livros.scss'; // Importe o arquivo de estilo


// Exemplo de dados de livros
const livrosData = [
  {
    id: 1,
    title: 'A pulseira de Odísea',
    author: 'Marcos Rangel',
    image: Livro1Image,
    site: "https://www.google.com"
  },
  {
    id: 2,
    title: 'Deuses Baianos - em breve',
    author: 'Marcos Rangel',
    image: DeusesBainos,
    site: "https://www.google.com"
  },
  // Adicione mais livros conforme necessário
];

function Livros() {
  return (
    <div className='livros-home'>
      <Container>
        <h1 className='p-4 text-white text-center'>Livros</h1>
        <Row className="g-4 d-flex flex-wrap">
          {livrosData.map((livro) => (
            <Col md={6} xs={6} sm={6} key={livro.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Col>
                  <Card bg='transparent' className='mb-5 text-white livro-card' border='light'>
                  <Card.Img
        variant="top"
        src={livro.image}
        className="img-fluid"
        alt={`Capa do livro ${livro.title}`}
      />
                    <Card.Body>
                      <Card.Title className='title-card'>{livro.title}</Card.Title>
                      <Card.Text className='text-card'>{livro.author}</Card.Text>
                      <div>
                        <Card.Link href={livro.site} target="_blank" rel="noopener noreferrer">
                          Em breve, disponível para compra
                        </Card.Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Livros;
