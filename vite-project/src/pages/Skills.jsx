import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLaptopCode, FaServer, FaGlobe, FaMobileAlt, FaDesktop, FaPaintBrush } from 'react-icons/fa';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import './skills.scss';
import { motion } from 'framer-motion';

const skillsList = [
  { icon: <FaLaptopCode size={78} />, id: 1, skillName: 'Front-End', percentage: 94 },
  { icon: <FaServer size={78} />, id: 2, skillName: 'Back-End', percentage: 95 },
  { icon: <FaGlobe size={78} />, id: 3, skillName: 'Web', percentage: 93 },
  { icon: <FaMobileAlt size={78} />, id: 4, skillName: 'Mobile', percentage: 99 },
  { icon: <FaDesktop size={78} />, id: 5, skillName: 'Desktop', percentage: 88 },
  { icon: <FaPaintBrush size={78} />, id: 7, skillName: 'UI/UX', percentage: 90 },
];

function Skills() {
  return (
    <Container className="d-flex justify-content-center">
      <div>
        <h1 className="skills-title fs-1 text-white">Minhas Habilidades</h1>
        <Row>
          {skillsList.map(({ icon, id, skillName, percentage }) => (
            <Col key={id} xs={12} sm={6} md={4} lg={6} className="mb-1 ml-2 mr-2">
              <div className="skills-item-container " style={{ padding: '40px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: id * 0.2 }}
                >
                  <div className="icon-container ">{icon}</div>
                  <div className="skill-info">
                    <p className='fs-4'>{skillName}</p>
                    <div className="progress-bar">
                      <RiBarChartHorizontalFill className="progress-icon" />
                      <div className="bar-container">
                        <div
                          className="bar"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span>{`${percentage}%`}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Skills;
