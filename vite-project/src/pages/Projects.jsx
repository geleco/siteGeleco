import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import scaryMoviesImage1 from '../assets/images/scary-movies.png';
import scaryMoviesImage2 from '../assets/images/scaryMoviesImage2.png';
import scaryMoviesImage3 from '../assets/images/scaryMoviesImage3.png';
import iabImage1 from '../assets/images/iab-menu.png';

const scaryMoviesData = {
  id: 1,
  title: 'Scary Movies',
  images: [scaryMoviesImage1,scaryMoviesImage2,scaryMoviesImage3, ],
};

const iabFormData = {
  id: 2,
  title: 'IAB Formulário',
  images: [iabImage1,],
};

function Projects() {
  return (
    <div>
        <h1 className='text-white text-center mb-4'>Projetos</h1>
      {/* Carrossel para Scary Movies */}
      <Carousel className="w-75 mx-auto mb-5">
        {scaryMoviesData.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`${scaryMoviesData.title} - Image ${index + 1}`}
              style={{ objectFit: 'contain', maxHeight: '400px', background: '#5155A6' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Carrossel para IAB Formulário */}
      <Carousel className="w-75 mx-auto mb-5">
        {iabFormData.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`${iabFormData.title} - Image ${index + 1}`}
              style={{ objectFit: 'contain', maxHeight: '400px', background: '#5155A6' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;