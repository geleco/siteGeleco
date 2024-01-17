// Livros.jsx
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';
import Livro1Image from '../assets/images/pulseiradeodisea.png';
import './livros.scss'; // Importe o arquivo de estilo

// Exemplo de dados de livros
const livrosData = [
  {
    id: 1,
    title: 'A pulseira de Odísea',
    author: 'Marcos Rangel',
    image: Livro1Image,
    site: 'http://www.uol.com.br'
  },
  {
    id: 2,
    title: 'O adeus dos Deuses',
    author: 'Marcos Rangel',
    image: Livro1Image,
    site: 'http://www.uol.com.br'
  },
  // Adicione mais livros conforme necessário
];

function Livros() {
  return (
    <div className='livros-home'>
      <Container>
        <h1 className='p-5 text-white text-center'>Livros</h1>
        <Row md={8} className="g-4 d-flex flex-wrap">
          {livrosData.map((livro) => (
            <Col md={6} xs={12} key={livro.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Col >
                  <Card bg='transparent' className='text-white livro-card'
                    border='light'
                  >
                    <Card.Img
                      variant="top"
                      src={livro.image}
                    />
                    <Card.Body style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}>
                      <Card.Title style={{ fontSize: '4.5vw' }}>{livro.title}</Card.Title>
                      <Card.Text style={{ fontSize: '2.5vw' }}>{livro.author}</Card.Text>
                      <Card.Link style={{ fontSize: '1.5vw' }}>{livro.site}</Card.Link>
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
