import { motion } from 'framer-motion';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  const navVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
      style={{ width: '30%', minWidth: '200px' }}
    >
      <Navbar expand="md" bg="color1" variant="dark" className="fixed-top p-2 flex-column">
        <Navbar.Brand className="fs-4 mr-auto">
          {"G{ele}co"}
        </Navbar.Brand>
          <Nav>
            <Nav.Link href="#curriculo">Currículo</Nav.Link>
          </Nav>
      </Navbar>
    </motion.div>
  );
}

export default Menu;
