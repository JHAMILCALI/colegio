import { Container, Row, Col } from "react-bootstrap"
import Director from'../assets/img/imgSalle/H.Jose_.Diez_.de_.Medina-2330601f.jpg';

import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Colegio =()=>{
    const[loopnum,setloopnum ]=useState(0);
const[isDeleating, setisDeleating]=useState(false);
const toRotate = ["Una familia unida","Un futuro mejor","Colegio Cristiano"];
const [text,setText]=useState("");
const tiempo = 2000;
const[delta, setDelta]=useState(300 -Math.random()*100);
useEffect(()=>{
    let ticker = setInterval(()=>{
        tick();
    },delta)
    return()=>{clearInterval(ticker)};
},[text])

const tick=()=>{
    let i = loopnum % toRotate.length;
    let fulltext = toRotate[i];
    let updateText = isDeleating ? fulltext.substring(0,text.length-1) : fulltext.substring(0,fulltext.length+1);

    setText(updateText);
    if(isDeleating){
        setDelta(prevDelta => prevDelta/2);
    }
    if(!isDeleating && updateText === fulltext){
        setisDeleating(true);
        setDelta(tiempo);
    }else{
        if(isDeleating && updateText === ''){
            setisDeleating(false);
            setloopnum(loopnum+1);
            setDelta(500);  
        }
    }
}
    return(
        <div>
            <section className="banner">
            <Container>
            <Row className="aling-item-center">
                    <Col xs={12} md={12} xl={12}>
                        <h1>{'Binvenido al colegio'}</h1>
                        <h1>{'La Salle-La Paz'}</h1>
                        <h2>{''}<span className="wrap">{text}</span></h2>
                    </Col>
                </Row>
            </Container>
            </section>
            <section className="home1" id="home">
            <Container>
                <Row className="aling-home1">
                    <Col xs={12} md={8} xl={8}>
                    <h2>Palabras de bienvenida del Director del Colegio La Salle</h2>
                        <p>
                        Conscientes de nuestra herencia lasallista de 340 años, esta pedagogía debe incluir el compromiso “de educar en la fe para la justicia y de promover la justicia como constitutiva del carisma y misión de La Salle”. Este empeño nos impele a defender los derechos de los niños, prioridad de nuestro Instituto. A defender especialmente a niños víctimas de adultos miembros de nuestra sociedad y familias, incluidos a veces religiosos, sacerdotes y obispos. Ustedes proporcionan a sus estudiantes espacio para expresar sus anhelos y sus sueños. En tal espacio de confianza hay momentos en que ustedes son mentores, maestros, guías, acompañantes, hermanas o hermanos mayores, que les ayudan a crecer como seres humanos libres y que aman.

Quizá esto es la expresión más fina de nuestra asociación lasallista: aportar generosamente lugares donde vivir la inclusión, la paz y el respeto en un entorno confiable y seguro. Lugares donde la diversidad cultural no es ocasión de conflicto, exclusión o de tensión destructiva, sino más bien donde el ser diferente es componente enriquecedor de la vida de comunidad.
                        </p>
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        <img className="img_Dir" src={Director}/>
                        <h4>DIRECTOR</h4>
                        <p className="p-home1">Hno. José Antonio Diez de Medina</p>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
        
    )
}