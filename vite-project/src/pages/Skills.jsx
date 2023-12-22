import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import './Skills.scss'; // Importe os estilos SCSS

function Skills() {
  return (
    <Container className="skills-container">
      <Row>
        <Col className='text-white'>
          <h1 className="skills-title">Minhas Habilidades</h1>
          <ul className="skills-list">
            <li>
              <FaJs  />
            </li>
            <li>
              <FaReact  />
            </li>
            <li>
              <FaNodeJs  />
            </li>
            <li>
              <FaHtml5 />
            </li>
            <li>
              <FaCss3  />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
