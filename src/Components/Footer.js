import { Col, Container, Row} from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon-yotube.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/x.svg'
export const Footer = ()=>{
    return(
        <section>
            <Container section className="footer">
            <h2>Encuentranos</h2>
                <Row className="aling-footer">
                    <Col xs={12} md={4} xl={4}>
                        <h3>Direccion</h3>
                        <p>Av.Aruquipa esq.La Florida Nª8578</p>
                        <br/>
                        <h3>Horarios</h3>
                        <p>Lunea a Viernes: de 9:00AM a 12:30PM</p>
                        <p>Sabado 9:30AM a 12:00PM</p>
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        <h3>Telefonos</h3>
                        <p>(591-2)279527</p>
                        <p>(591-2)2791725</p>
                        <p>(591-2)2795178</p>
    
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        <h3>Nuestras Redes Scociales</h3>
                        <span className="navbar-text1">
                            <div className="social-icon1">
                                <a href="https://www.youtube.com/@lasallelapaz5992"><img src={navIcon1} alt=""/></a>
                                <a href="https://www.facebook.com/profile.php?id=100073392609174"><img src={navIcon2} alt=""/></a>
                                <a href="https://www.instagram.com/colegiolasallea/"><img src={navIcon3} alt=""/></a>
                                <a href="https://x.com/lasallelapaz?s=20"><img src={navIcon4} alt=""/></a>
                            </div>
                        </span>
                   </Col>
                </Row>
            </Container>
        </section>
    )
}