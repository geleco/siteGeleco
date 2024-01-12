// Livros.jsx
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Livro1Image from '../assets/images/pulseiradeodisea.png'; 
import Livro2Image from '../assets/images/scary-movies.png';
import {motion} from 'framer-motion'

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
    title: 'Livro 2',
    author: 'Autor 2',
    image: Livro2Image,
  },
  // Adicione mais livros conforme necessário
];

function Livros() {
  return (
    <Container>
      <h1 className='text-white text-center mt-5 mb-4'>Livros</h1>
      <Row xs={1} md={2} className="g-4">
        {livrosData.map((livro) => (
          <motion.Col
          key={livro.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5}}
          >
            <Card bg='color1' className='text-white'>
              <Card.Img variant="top" src={livro.image} />
              <Card.Body>
                <Card.Title className='fs-1'>{livro.title}</Card.Title>
                <Card.Text className='fs-5'>{livro.author}</Card.Text>
                <Card.Link className='fs-5'>{livro.site}</Card.Link>
              </Card.Body>
            </Card>
          </motion.Col>
        ))}
      </Row>
    </Container>
  );
}

export default Livros;
