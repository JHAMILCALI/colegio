import {Col,Container, Row } from "react-bootstrap"
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Banner = ()=>{
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
    return (
        <section className="banner" id="home">
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
    )
}