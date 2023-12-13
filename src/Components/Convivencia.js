import { Container,Card } from "react-bootstrap"
import img1 from '../assets/img/imgSalle/336231900_690497546165023_1990560071333682619_n-1024x1024.jpg'
import img2 from'../assets/img/imgSalle/337844398_902524404289681_4458134406715296081_n.jpg'
import img4 from '../assets/img/imgSalle/402085674_650179967306735_6881353113855834783_n.jpg'
export const Convivencia=()=>{
    return(
        <div className="conv">
            <h1>CONVIVENCIA LA SALLISTA</h1>
            <Container className="conv-1">
            <div class="contenedor">
       <a href="#">
            <figure>
                <img src={img1}/>
                <div class="capa">
                    <h3>Compromiso</h3>
                    <p>Donde todos puenden compartir en familia</p>
                </div>
            </figure>
        </a>
    </div>
    <div class="contenedor">
       <a href="#">
            <figure>
                <img src={img2}/>
                <div class="capa">
                    <h3>Union</h3>
                    <p>Una familia unida La Salle</p>
                </div>
            </figure>
        </a>
    </div>

    
            </Container>
            <Container>
            <div className='edu-card'>
                <div className="d-flex justify-content-around">
            <Card style={{ width: '70rem' }}>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                <Card.Title>La Salle Forjando Personas Autónomas</Card.Title>
                <Card.Text>
                En el Colegio La Salle, la unión y el compromiso son los pilares que sustentan nuestra comunidad educativa. Nos unimos como una familia, donde alumnos, profesores y padres se comprometen de manera conjunta en el viaje del aprendizaje y el desarrollo. En la colaboración encontramos la riqueza de perspectivas, la fuerza del trabajo en equipo y la inspiración para alcanzar metas comunes. Con un compromiso sólido, trascendemos los desafíos y cultivamos un ambiente donde cada estudiante se siente respaldado y motivado. Juntos, construimos un futuro educativo basado en la unión y el compromiso, guiando a nuestros estudiantes hacia el éxito y el descubrimiento de su máximo potencial.
                </Card.Text>
                </Card.Body>
            </Card>
    </div>
        </div>
            </Container>
        </div>
    )
}