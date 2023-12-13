import { Carousel, Card, Button, Placeholder } from 'react-bootstrap';
import img1 from '../assets/img/imgSalle/BLOQUE-DE-PRIMARIA-SUPERIOR-1536x1152.jpg';
import img2 from '../assets/img/imgSalle/SALA-DE-REFERENCIA1-1536x1152.jpg'
import img3 from '../assets/img/imgSalle/AUDITORIO2-1536x1152.jpg'
import img4 from '../assets/img/imgSalle/im1.jpg'
export const Educacion = () => {
  return (
    <div>
      <div className='edu-ti'>
        <h1>Proyecto Educativo</h1>
      </div>
      <section className='edu'>
        <div className='carusel'>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img src={img1} alt="First slide" />
              <Carousel.Caption>
                <h3>Aulas de primer nivel</h3>
                <p>Con un agradable ambiente</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img src={img2} alt="First slide" />
              <Carousel.Caption>
                <h3>Con amplias aulas y equipadas</h3>
                <p>Promoviendo un mejor estudo para el futuro</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img src={img3} alt="First slide" />
              <Carousel.Caption>
                <h3>Como Auditorios y teatros y canchs deportivas</h3>
                <p>para poder tener una mejor salud</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='edu-card'>
                <div className="d-flex justify-content-around">
            <Card style={{ width: '70rem' }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                <Card.Title>La Salle Forjando Personas Autónomas</Card.Title>
                <Card.Text>
                La Salle es una institución que se dedica a la educación basada en los valores humanos y cristianos. Entre sus objetivos se encuentra el de potenciar el desarrollo de capacidades, habilidades y destrezas para que lleguen a ser personas autónomas, competentes, creativas e implicadas en la construcción de una sociedad más justa y solidaria. Como institución está abierta al entorno y atenta a las demandas y necesidades del mundo educativo, así como comprometida en llevar adelante su proyecto como comunidad educativa. Para ello cuenta con un equipo de calidad profesional y humana enfocados en la mejora continua y la innovación.
                </Card.Text>
                </Card.Body>
            </Card>
    </div>
        </div>
      </section>
    </div>
  )
}
