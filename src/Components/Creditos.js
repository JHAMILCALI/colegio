import { Container } from "react-bootstrap"
import img1 from '../assets/img/imgSalle/per.png'
export const Creditos=()=>{
    return(
        <div className="creditos">
            <Container>
                <h1>La Pagina se Realizo</h1>
                <div className="per">
                    <img src={img1}/>
                </div>
                <div>
                    <h3><bt>Nombre:</bt> Jhamil Calixto Mamani Quea</h3>
                    <h3>Paralelo: E</h3>
                    <h3>Materia:INF-122</h3>
                    <h3>Correo: jhamilquea@gmail.com</h3>
                </div>
            </Container>
        </div>
    )
}