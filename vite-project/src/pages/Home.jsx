import { Link as ScrollLink } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import minhaImagem from '../assets/images/eu_bonfim.jpeg';
import '../pages/home.scss';
import '../assets/styles/typography.scss'; // Importe o arquivo de tipografia
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
        <motion.div xs="12" className="text-center" {...commonAnimationProps}>
          <Container>
            <Image
              src={minhaImagem}
              alt="o Geleco"
              fluid
              className="m-5 about-image rounded-circle shadow mb-4"
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
          <div className="mt-5">
            <ScrollLink to="skills" smooth={true} duration={500}>
              <Button variant="outline-light" size="lg" className="btn-lg text-large">
                Habilidades
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
        <motion.div xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.4 }}>
          <div className="mt-4">
            <ScrollLink to="projects" smooth={true} duration={500}>
              <Button variant="outline-light" size="lg" className="btn-lg text-large">
                Projetos
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
        <motion.div xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.6 }}>
          <div className="mt-4">
            <ScrollLink to="livros" smooth={true} duration={500}>
              <Button variant="outline-light" size="lg" className="btn-lg text-large">
                Livros
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
        <motion.div xs="12" className="text-center" {...commonAnimationProps} transition={{ delay: 0.8 }}>
          <div className="mt-4">
            <ScrollLink to="contato" smooth={true} duration={500}>
              <Button variant="outline-light" size="lg" className="btn-xl text-large">
                Contato
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
      </Row>
    </Container>
  );
}

export default Home;
