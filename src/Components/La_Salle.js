import { Col, Card,Row} from "react-bootstrap"
import img1 from '../assets/img/imgSalle/w1.jpg';
import img2 from '../assets/img/imgSalle/w2.png';
import img3 from '../assets/img/imgSalle/img2.jpeg';
import img4 from '../assets/img/imgSalle/AUDITORIO2-1536x1152.jpg';
export const La_Salle=()=>{
    return(
        <di>
            <section className="la">
                <h1>COLEGIO LA SALLE</h1>
                <div>
                <Row>
                    <Col xs={6} md={4}>
                        <img src={img1}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <img src={img2}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <img src={img3}/>
                    </Col>
                </Row>
                </div>
                <h2>DEPARTAMENTO ACADÉMICO</h2>
                <div>
                <Card>
                    <div className="imgla">
                    <Card.Img className="CardImg" variant="top" src={img4}/>
                    </div>
                    <p className="lam-a">Encargado de normar los estándares de aprendizaje en los campos, áreas y dimensiones curriculares en el colegio.</p>
                        <Card.Body>
                        <Card.Text>
                        <b>A. COSMOS Y PENSAMIENTO.-</b> Cosmovisiones, filosofía y psicología. Valores, espiritualidad y religiones.
                        <br/>
                        <b>B. COMUNIDAD Y SOCIEDAD.-</b> Comunicación y lenguajes, Lengua originaria, Lengua extranjera, Artes plásticas y visuales, Educación física y deportiva, Educación musical, Ciencias sociales.
                        <br/>
                        <b>C. VIDA TIERRA Y TERRITORIO.-</b> Biología. Geografía. Física. Química.
                        <br/>
                        <b>D. CIENCIA, TECNOLOGIA Y PRODUCCION.-</b> Matemática.- Formación técnica general. Formación técnica especializada.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    
                </div>
                
            </section>
        </di>
    )
}