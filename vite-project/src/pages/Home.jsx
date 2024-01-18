import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { Container, Row, Image, Button, Offcanvas } from 'react-bootstrap';
import minhaImagem from '../assets/images/eu_bonfim.jpeg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../pages/home.scss';
import '../assets/styles/typography.scss'; // Importe o arquivo de tipografia

function Home() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const commonAnimationProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2 },
  };

  const handleOffcanvasShow = () => setShowOffcanvas(true);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  return (
    <Container fluid className="home-container d-flex align-items-center justify-content-center vh-100">
      <Row className="align-items-center">
        <motion.div xs="12" className="text-center" {...commonAnimationProps}>
          <Container>
            <Image
              src={minhaImagem}
              alt="o Geleco"
              fluid
              className="about-image rounded-circle shadow mb-4"
              style={{ maxWidth: '35%', height: 'auto' }}
            />
            <div>
              <p className="text-large text-white">Olá, sou {"G{ele}co"}!</p>
              <p className="text-medium text-white">
                &quot;Desenvolvedor web e UX designer baiano apaixonado por
                transformar ideias em realidade digital. Meu código é como uma tela em branco,
                pronto para ser preenchido com inovação e criatividade.
                Nas horas vagas, mergulho nas palavras, escrevendo sobre tudo o que me inspira&quot;
              </p>
            </div>
          </Container>
        </motion.div>
        <motion.div xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.2 }}>
          <div >
            <ScrollLink to="skills" smooth={true} duration={500}>
              <Button variant="outline-light" size="lg" className="btn-lg text-large">
                Habilidades
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
        <motion.div xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.4 }}>
          <div >
            <ScrollLink to="projects" smooth={true} duration={500}>
              <Button variant="outline-light" size="lg" className="btn-lg text-large">
                Projetos
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
        <motion.div xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.6 }}>
          <div >
            <ScrollLink to="livros" smooth={true} duration={500}>
              <Button variant="outline-light" size="lg" className="btn-lg text-large">
                Livros
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
        <motion.div xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.8 }}>
          <div >
            <Button variant="outline-light" size="lg" className="btn-xl text-large" onClick={handleOffcanvasShow}>
              Contato
            </Button>
          </div>
        </motion.div>

        {/* Offcanvas para o botão Contato */}
        <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement="bottom">
  <Offcanvas.Header className='contato-header' closeButton>
    <Offcanvas.Title>Contato</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <p>Entre em contato comigo através dos seguintes meios:</p>
    <ul>
      <li>
        <FaGithub /> GitHub:{' '}
        <a href="https://github.com/geleco" target="_blank" rel="noopener noreferrer">
          meu GitHub
        </a>
      </li>
      <li>
        <FaLinkedin /> LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/geleco/" target="_blank" rel="noopener noreferrer">
          meu LinkedIn
        </a>
      </li>
      <li>
        <FaEnvelope /> E-mail:{' '}
        <a href="mailto:rangel001@gmail.com">meu E-mail</a>
      </li>
    </ul>
  </Offcanvas.Body>
</Offcanvas>

      </Row>
    </Container>
  );
}

export default Home;
