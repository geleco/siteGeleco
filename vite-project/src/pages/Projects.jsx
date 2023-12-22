import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card1 from '../assets/images/scary-movies.png';
import Container from 'react-bootstrap/esm/Container';

function Projects() {
  return (
    <Container >
    <h1 className='text-white'>Projetos</h1>
    <Row xs={2} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg='color1'className='text-white'>
            <Card.Img variant="top" src={Card1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}
export default Projects;