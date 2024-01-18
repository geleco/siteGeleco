import { useState } from 'react';
import { Col, Modal } from 'antd';
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
import iab10 from '../assets/images/projetos/iab10.png';
import iab11 from '../assets/images/projetos/iab11.png';
import iab12 from '../assets/images/projetos/iab12.png';
import escrita1 from "../assets/images/projetos/escrita1.png";
import escrita2 from "../assets/images/projetos/escrita2.jpg";
import escrita3 from "../assets/images/projetos/escrita3.jpg";
import escrita4 from "../assets/images/projetos/escrita4.png";
import site801 from '../assets/images/projetos/site801.png';
import site802 from '../assets/images/projetos/site802.png';
import site803 from '../assets/images/projetos/site803.jpg';
import site804 from '../assets/images/projetos/site804.jpg';
import site805 from '../assets/images/projetos/site805.jpg';
import meusite1 from '../assets/images/projetos/meusite1.png';
import meusite2 from '../assets/images/projetos/meusite2.png';
import meusite3 from '../assets/images/projetos/meusite3.png';
import meusite4 from '../assets/images/projetos/meusite4.png';


const projectsData = [

  {
    id: 1,
    title: 'Meu próprio site',
    image: meusite1,
    carousel: [meusite1, meusite2, meusite3, meusite4],
    process: (
      <div className='text-center'>
        <h3 className='text-center'>Bem-Vindo ao Meu Universo Digital 🚀💻:</h3>
        <p style={{ fontSize: '0.8em' }}>🌐 Navegando pelo ciberespaço, sou um artista do código e arquiteto de experiências digitais, enraizado nas terras banhadas a dendê.</p>
        <p style={{ fontSize: '0.8em' }}>🎨 Meu playground é uma tela em branco, trazendo inovação e criatividade, transformando ideias em realidade digital.</p>
        <p style={{ fontSize: '0.8em' }}>📚 Quando não estou moldando o futuro digital, perco-me nas teias das palavras, tecendo histórias que ecoam minhas inspirações mais profundas.</p>
        <p style={{ fontSize: '0.8em' }}>🚀 Este é mais do que um site; é meu mundo digital, onde cada pixel conta uma história, e cada interação é uma experiência única.</p>
        <p style={{ fontSize: '0.8em' }}>🌐 Explore, descubra e mergulhe no meu universo, onde a paixão pela web se funde harmoniosamente com o poder da criatividade.</p>
      </div>

    ),
  },

  {
    id: 2,
    title: 'IAB Formulário',
    image: iabImage1,
    carousel: [iab10, iab11, iab12],
    process: (
      <div className='text-center'>
        <h3 className='text-center'>Inovando com Formulários 🏛️✨:</h3>
        <p style={{ fontSize: '0.8em' }}>💡 Desenvolvemos a alquimia digital: um formulário que transcende a simplicidade, moldando a entrada para o magnífico IAB.</p>
        <p style={{ fontSize: '0.8em' }}>🏰 Esboços e maquetes deram vida a cada campo, transformando dados em uma obra-prima interativa.</p>
        <p style={{ fontSize: '0.8em' }}>🛠️ Com a precisão de um escultor digital, escolhemos cada detalhe de design e linguagem, criando uma experiência única de preenchimento.</p>
        <p style={{ fontSize: '0.8em' }}>🚀 Elevamos a entrada de novos sócios a um novo patamar, simplificando o processo e tornando a inscrição uma jornada prazerosa e eficiente.</p>
      </div>


    ),

  },
  {
    id: 3,
    title: 'Cine Lanche',
    image: cine6,
    carousel: [cine5, cine1, cine2, cine3, cine4],
    process: (
      <div className='text-center'>
        <h3 className='text-center'>Processo de Criação 🍿🍔:</h3>
        <p style={{ fontSize: '0.8em' }}>💡 Inspirados no universo cinematográfico, criamos o conceito do Cine Lanche.</p>
        <p style={{ fontSize: '0.8em' }}>🎬 Desenhando interfaces e fluxos no Figma para dar vida à experiência do usuário.</p>
        <p style={{ fontSize: '0.8em' }}>⚙️ Seleção cuidadosa de elementos de design e funcionalidades.</p>
        <p style={{ fontSize: '0.8em' }}>🚀 Quem sabe um dia o {"Cine Lanche"} possa adicionar novos sabores e facilidades ao ganhar vida?</p>
        <p style={{ fontSize: '0.8em' }}>🌭🎥 Um site que sempre estaria pronto para satisfazer os desejos dos amantes de lanches e filmes.</p>
      </div>

    ),
  },
  {
    id: 4,
    title: 'Escrita Criativa',
    image: escrita1,
    carousel: [escrita1, escrita2, escrita3, escrita4],
    process: (
      <div className='text-center'>
        <h3 className='text-center'>Processo de Criação 📝📚:</h3>
        <p style={{ fontSize: '0.8em' }}>💡 Inspirados pela paixão pela escrita, concebemos o Escrita Criativa.</p>
        <p style={{ fontSize: '0.8em' }}>📖 Desenvolvendo interfaces e funcionalidades no Figma para dar vida à comunidade literária.</p>
        <p style={{ fontSize: '0.8em' }}>⚙️ Escolha de elementos de design e interações envolventes.</p>
        <p style={{ fontSize: '0.8em' }}>🚀 O {"Escrita Criativa"} tem o poder de se tornar real, enriquecendo a experiência de escritores e leitores.</p>
        <p style={{ fontSize: '0.8em' }}>🌟📚 Sempre de olho no futuro, prontos para inspirar e ser inspirados através das palavras.</p>
      </div>

    ),
  },
  {
    id: 5,
    title: "{The 80's'}",
    image: site801,
    carousel: [site801, site802, site803, site804, site805],
    process: (
      <div className='text-center'>
        <h3 className='text-center'>Explorando os Anos 80 🕹️🎸:</h3>
        <p style={{ fontSize: '0.8em' }}>💡 Inspirados pela era dourada dos anos 80, concebemos este modelo de site nostálgico.</p>
        <p style={{ fontSize: '0.8em' }}>🎨 Desenhando layouts e elementos retrô no Figma para capturar a essência da época.</p>
        <p style={{ fontSize: '0.8em' }}>⚙️ Tivemos uma escolha cuidadosa de elementos de design.</p>
        <p style={{ fontSize: '0.8em' }}>🚀 O {"Theo 80s"} quer trazer de volta memórias e vibes únicas.</p>
        <p style={{ fontSize: '0.8em' }}>📼🎉 Dejando um dia celebrar a nostalgia dos anos 80 de maneiras inovadoras.</p>
      </div>

    ),
  },
  {
    id: 6,
    title: 'Scary Movies',
    image: scaryMoviesImage1,
    carousel: [scaryMoviesImage1],
    process: (
      <div className='text-center'>
        <h3 className='text-center' >Processo de Criação 🎥👹:</h3>
        <p style={{ fontSize: '1.8em' }}>💡 Nos inspiramos em tendências de monstros.</p>
        <p style={{ fontSize: '0.8em' }}>👻 Desenhando wireframes e protótipos para dar vida aos fantasmas.</p>
        <p style={{ fontSize: '0.8em' }}>⚒️ Seleção cuidadosa de ferramentas Front e Back-end.</p>
        <p style={{ fontSize: '0.8em' }}>🚀 O {"Scary Movies"} pode evoluir, adicionando truques.</p>
        <p style={{ fontSize: '0.8em' }}>🌌👻 Sempre de olho no futuro, prontos mais sustos e risadas</p>
      </div>
    ),
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
          </div>
        </Modal>

      )}
    </div>
  );
};

export default Projects;
