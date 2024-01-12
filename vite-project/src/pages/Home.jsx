import { Link as ScrollLink, } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import minhaImagem from '../assets/images/eu_bonfim.jpeg';
import '../pages/home.scss';
import { motion } from 'framer-motion';

function Home() {
    const commonAnimationProps = {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 2 },
    };
  
    return (
      <Container fluid className="home-container d-flex align-items-center justify-content-center m-0 vh-100">
        <Row className="align-items-center">
          <motion.Col xs="12" className="text-center" {...commonAnimationProps}>
            <Container>
              <Image
                src={minhaImagem}
                alt="o Geleco"
                fluid
                className="about-image rounded-circle shadow mb-4"
                style={{ maxWidth: '50%', height: 'auto' }}
              />
              <div>
                <h1 className="mb-4 text-white">Olá, sou {"G{ele}co"}!</h1>
                <p className="mb-5 fs-4 text-white">
                  &quot;Desenvolvedor web e UX designer baiano apaixonado por
                  transformar ideias em realidade digital. Meu código é como uma tela em branco,
                  pronto para ser preenchido com inovação e criatividade.
                  Nas horas vagas, mergulho nas palavras, escrevendo sobre tudo o que me inspira&quot;
                </p>
              </div>
            </Container>
          </motion.Col>
          <motion.Col xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.2 }}>
            <div className="mt-5">
              <ScrollLink to="skills" smooth={true} duration={500}>
                <Button variant="outline-light" size="lg" className="fs-3">
                  Habilidades
                </Button>
              </ScrollLink>
            </div>
          </motion.Col>
          <motion.Col xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.4 }}>
            <div className="mt-4">
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button variant="outline-light" size="lg" className="fs-3">
                  &nbsp;Projetos&nbsp;
                </Button>
              </ScrollLink>
            </div>
          </motion.Col>
          <motion.Col xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.6 }}>
            <div className="mt-4">
              <ScrollLink to="livros" smooth={true} duration={500}>
                <Button variant="outline-light" size="lg" className="fs-3">
                  &nbsp;Livros&nbsp;&nbsp;
                </Button>
              </ScrollLink>
            </div>
          </motion.Col>
          <motion.Col xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.8 }}>
            <div className="mt-4">
              <ScrollLink to="contato" smooth={true} duration={500}>
                <Button variant="outline-light" size="lg" className="fs-3">
                  &nbsp;Contato&nbsp;
                </Button>
              </ScrollLink>
            </div>
          </motion.Col>
        </Row>
      </Container>
    );
  }
  
  export default Home;
