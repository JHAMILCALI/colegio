import { Container, Card } from "react-bootstrap"
import ReactPlayer from "react-player"
import img4 from '../assets/img/imgSalle/OIP.jpg'
import img5 from '../assets/img/imgSalle/w1.jpg'
import img6 from '../assets/img/imgSalle/img2.jpeg'
export const Ayuda=()=>{
    return(
        <div className="ayu">
                 <h1>
                La Salle 100 Años
                </h1>
            <Container className="ayu-1">
                <div>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=lgV_oBOhjaw&t=21s'
                        width='100%'
                        height='100%'
                        controls
                        playing
                    />
                </div>
            </Container>
            <Container>
            <div className='edu-card'>
                <div className="d-flex justify-content-around">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                <Card.Title>Creador San juan Bautista de La salle</Card.Title>
                <Card.Text>
                San Juan Bautista de La Salle (1651-1719) fue un sacerdote y educador francés del siglo XVII. Heredó una fortuna, pero la destinó a fundar escuelas gratuitas para niños pobres en Reims. Su visión revolucionaria incluyó métodos pedagógicos innovadores y la formación de maestros. Fundó la congregación de los Hermanos de las Escuelas Cristianas, dedicados a proporcionar educación integral a todos, independientemente de su origen. La obra de La Salle ha perdurado a través de las Escuelas Cristianas de La Salle, que continúan su misión en todo el mundo. Fue canonizado en 1900 y es el patrono de los maestros.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                <Card.Title>Aniversario de los 100 años</Card.Title>
                <Card.Text>
                a historia de La Salle La Paz durante los últimos 100 años. La historia de una institución educativa puede incluir hitos significativos, cambios en la infraestructura, eventos destacados y la evolución de sus programas académicos.

Para obtener una historia detallada y precisa de La Salle La Paz a lo largo de los últimos 100 años, te recomendaría contactar directamente a la institución educativa o consultar fuentes locales, archivos históricos o documentos institucionales que puedan proporcionar información específica sobre su trayectoria a lo largo del tiempo.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                <Card.Title>Felicitaciones</Card.Title>
                <Card.Text>
                Que este aniversario sea una ocasión para celebrar los éxitos pasados, reflexionar sobre los desafíos superados y mirar hacia el futuro con optimismo. El Colegio La Salle La Paz ha demostrado ser un faro de conocimiento, valores y comunidad, guiando a sus estudiantes hacia un futuro lleno de posibilidades. Felicidades por este siglo de dedicación inquebrantable a la educación y por seguir siendo una fuente inspiradora de aprendizaje y crecimiento en la comunidad educativa y más allá.
                </Card.Text>
                </Card.Body>
            </Card>
    </div>
        </div>
            </Container>
        </div>
    )
}