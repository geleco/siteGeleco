import './skills.scss';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';

import {
  BsCodeSlash,
  BsServer,
  BsGlobe,
  BsTablet,
  BsLaptop,
  BsBrush,
} from 'react-icons/bs';

const skillsList = [
  { icon: <BsLaptop />, id: 1, skillName: 'Front-End', percentage: 78 },
  { icon: <BsServer />, id: 2, skillName: 'Back-End', percentage: 45 },
  { icon: <BsGlobe />, id: 3, skillName: 'Web', percentage: 89 },
  { icon: <BsTablet />, id: 4, skillName: 'Mobile', percentage: 65 },
  { icon: <BsCodeSlash />, id: 5, skillName: 'Desktop', percentage: 55 },
  { icon: <BsBrush />, id: 7, skillName: 'UI/UX', percentage: 93 },
];

function Skills() {
  return (
    <Container fluid className="skill-container m-0  d-flex flex-column justify-content-center align-items-center">
      <h1 className="  skills-title fs-1 text-white">Minhas Habilidades</h1>
      <Row className="m-0">
        {skillsList.map(({ icon, id, skillName, percentage }) => (
          <Col key={id} xs={12} md={6} lg={14} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
            >
              <div className="skills-item-container">
                <div className=" icon">{icon}</div>
                <div className="skill-info">
                  <p className="text-md">{skillName}</p>
                  <div className="progress-bar">
                    <ProgressBar variant='color4' className='progress' now={percentage} />
                    <div className="bar-container">
                      <div className="bar" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <span className='text-percentage'>{`${percentage}%`}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
