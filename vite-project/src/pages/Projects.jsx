import { useState } from 'react';
import { Col, Modal } from 'antd';
import { Card } from 'react-bootstrap';
import scaryMoviesImage1 from '../assets/images/scary-movies.png';
import iabImage1 from '../assets/images/iab-menu.png';
import './projects.scss';

const projectsData = [
  {
    id: 1,
    title: 'Scary Movies',
    image: scaryMoviesImage1,
    process: 'Descrição do processo de criação do Scary Movies.',
  },
  {
    id: 2,
    title: 'IAB Formulário',
    image: iabImage1,
    process: 'Descrição do processo de criação do IAB Formulário.',
  },
  {
    id: 3,
    title: 'IAB Formulário',
    image: iabImage1,
    process: 'Descrição do processo de criação do IAB Formulário.',
  },
  {
    id: 4,
    title: 'IAB Formulário',
    image: iabImage1,
    process: 'Descrição do processo de criação do IAB Formulário.',
  },
  {
    id: 5,
    title: 'IAB Formulário',
    image: iabImage1,
    process: 'Descrição do processo de criação do IAB Formulário.',
  },
  {
    id: 6,
    title: 'IAB Formulário',
    image: iabImage1,
    process: 'Descrição do processo de criação do IAB Formulário.',
  },
  {
    id: 7,
    title: 'IAB Formulário',
    image: iabImage1,
    process: 'Descrição do processo de criação do IAB Formulário.',
  },
  {
    id: 8,
    title: 'IAB Formulário',
    image: iabImage1,
    process: 'Descrição do processo de criação do IAB Formulário.',
  },
  
];

const Projects = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setModal2Open(true);
  };

  return (
    <div className='project-home'>
      <h1 className="p-5 text-center text-white mb-4">Projetos</h1>
      <div className="overflow-hidden d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            {projectsData.map((project) => (
              <Col key={project.id} md={12} sm={2} className="mb-4" >
                <Card border="light" className="bg-transparent">
                  <Card.Img
                    variant="center"
                    src={project.image}
                    alt={project.title}
                    className="clickable-image"
                    onClick={() => handleImageClick(project)}
                    style={{ width: '100%', height: '18rem', objectFit: 'scale-down' }}
                  />
                </Card>
              </Col>
            ))}
          </div>
        </div>
      </div>

      {/* Ant Design Modal */}
      {selectedProject && (
        <Modal
          title={selectedProject.title}
          centered
          visible={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
          width={1000}
        >
          <div className="d-flex">
            <img
              className="d-block w-50"
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <p className="text-dark mt-3">{selectedProject.process}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
