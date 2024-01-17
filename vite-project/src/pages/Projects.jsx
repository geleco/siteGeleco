import { useState } from 'react';
import { Col, Modal } from 'antd';
import { FaCode, FaHeart, FaLightbulb, FaRocket, FaSmile, FaComments } from 'react-icons/fa';
import { Card, Carousel } from 'react-bootstrap';
import scaryMoviesImage1 from '../assets/images/scary-movies.png';
import iabImage1 from '../assets/images/iab-menu.png';
import './projects.scss';
import cine6 from '../assets/images/projetos/cine6.png';
import cine1 from '../assets/images/projetos/cine1.jpg';
import cine2 from '../assets/images/projetos/cine2.jpg';
import cine3 from '../assets/images/projetos/cine3.jpg';
import cine4 from '../assets/images/projetos/cine4.jpg';
import cine5 from '../assets/images/projetos/cine5.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Scary Movies',
    image: scaryMoviesImage1,
    carousel:[scaryMoviesImage1],
    process: (
      <div className='text-center'>
        <h3 className='text-center' >Processo de Criação 🎥👹:</h3>
        <p style={{ fontSize: '0.8em' }}>💡 nos inspiramos em tendências de monstros.</p>
        <p style={{ fontSize: '0.8em' }}>👻 desenhando wireframes e protótipos para dar vida aos fantasmas.</p>
        <p style={{ fontSize: '0.8em' }}>⚒️ Seleção cuidadosa de ferramentas.</p>
        <p style={{ fontSize: '0.8em' }}>🚀 O {"Scary Movies"} evolui constantemente, adicionando truques.</p>
        <p style={{ fontSize: '0.8em' }}>🌌👻 Sempre de olho no futuro, prontos mais sustos e risadas</p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'IAB Formulário',
    image: iabImage1,
    process: 'Descrição do processo de criação do IAB Formulário.',
  },
  {
    id: 3,
    title: 'Cine Lanche',
    image: cine6,
    carousel: [cine5, cine1, cine2, cine3, cine4],
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
      <h1 className="p-4 text-center text-white ">Projetos</h1>
      <div className="overflow-hidden d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            {projectsData.map((project) => (
              <Col key={project.id} md={12} sm={8} xs={12} className="mb-4" >
                <Card border="light" className="bg-transparent">
                  <Card.Img
                    variant="center"
                    src={project.image}
                    alt={project.title}
                    className="clickable-image"
                    onClick={() => handleImageClick(project)}
                    style={{ width: '100%', height: '14rem', objectFit: 'scale-down' }}
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
  width={'90%'} // Ajuste a largura conforme necessário para telas menores
  style={{ fontFamily: "'Source Code Pro', monospace" }}
>
  <Carousel>
    {/* Adicione a imagem principal fixa */}
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={selectedProject.image}
        alt={selectedProject.title}
        style={{ maxHeight: '30vh', width: '100%', objectFit: 'contain' }}
      />
    </Carousel.Item>

    {/* Adicione as imagens adicionais do carrossel */}
    {selectedProject.carousel.map((image, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={image}
          alt={`${selectedProject.title} - ${index}`}
          style={{ maxHeight: '30vh', width: '100%', objectFit: 'contain' }}
        />
      </Carousel.Item>
    ))}
  </Carousel>

  {/* Exiba o processo do projeto apenas em telas maiores */}
  <div className="d-none d-md-block">
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p className="text-dark" style={{ fontSize: '1.5em', textAlign: 'center' }}>
        {selectedProject.process}
      </p>
    </div>

    {/* Ícones e textos em linha */}
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center', margin: '20px 0' }}>
      <div style={{ textAlign: 'center', flex: '1 1 25%' }}>
        <FaCode size={50} color="#61dafb" />
        <p style={{ fontSize: '1.2em' }}>Codando com alegria!</p>
      </div>
      <div style={{ textAlign: 'center', flex: '1 1 25%' }}>
        <FaHeart size={50} color="#ff69b4" />
        <p style={{ fontSize: '1.2em' }}>Feito com muito amor</p>
      </div>
      <div style={{ textAlign: 'center', flex: '1 1 25%' }}>
        <FaLightbulb size={50} color="#ffd700" />
        <p style={{ fontSize: '1.2em' }}>Ideias brilhantes</p>
      </div>
      <div style={{ textAlign: 'center', flex: '1 1 25%' }}>
        <FaRocket size={50} color="#00ced1" />
        <p style={{ fontSize: '1.2em' }}>Decolando com React</p>
      </div>
      <div style={{ textAlign: 'center', flex: '1 1 25%' }}>
        <FaSmile size={50} color="#ffc0cb" />
        <p style={{ fontSize: '1.2em' }}>Fazendo você sorrir 😊</p>
      </div>
      <div style={{ textAlign: 'center', flex: '1 1 25%' }}>
        <FaComments size={50} color="#87ceeb" />
        <p style={{ fontSize: '1.2em' }}>Comentários bem-vindos!</p>
      </div>
      {/* Adicione mais ícones e textos conforme necessário */}
    </div>
  </div>
</Modal>

      )}
    </div>
  );
};

export default Projects;
