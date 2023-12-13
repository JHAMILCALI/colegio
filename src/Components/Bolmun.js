import { Carousel, Card, Button, Placeholder } from 'react-bootstrap';
import img1 from '../assets/img/imgSalle/b1.jpg';
import img2 from '../assets/img/imgSalle/b2.jpg'
import img3 from '../assets/img/imgSalle/bolmun.jpg'
import img4 from '../assets/img/imgSalle/im1.jpg'
export const Bolmun=()=>{
    return(
        <div>
      <div className='edu-ti'>
        <h1>BOLMUN SALLE 2023</h1>
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
                <Card.Title>UN EVENTO QUE ASIMILA LAS NACIONES UNIDAS</Card.Title>
                <Card.Text>
                Bolmun La Sallae emerge como un evento educativo que se asemeja a las Naciones Unidas, donde cada estudiante recibe asignado un país y se sumerge en la tarea de explorar y proponer soluciones viables para diversos desafíos globales. Este modelo de simulación diplomática brinda a los participantes la oportunidad de profundizar en cuestiones internacionales y promover el entendimiento entre culturas al abordar problemas significativos desde la perspectiva de diferentes naciones.

En Bolmun La Sallae, los estudiantes no solo adquieren conocimientos sobre asuntos mundiales, sino que también desarrollan habilidades clave como la diplomacia, el trabajo en equipo y la resolución de problemas. Este evento proporciona un espacio enriquecedor donde los participantes pueden experimentar el proceso diplomático, mejorar sus habilidades comunicativas y aprender a colaborar en la búsqueda de soluciones efectivas para los desafíos que enfrenta la comunidad global.
                </Card.Text>
                </Card.Body>
            </Card>
    </div>
        </div>
      </section>
    </div>
    )
}