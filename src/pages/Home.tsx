import './../styles/Home.scss'
import { Container, Row, Col } from 'react-bootstrap';

import React, { useState } from "react";

import * as ReadingEase from './../script/ReadingEase'


export function Home(){
    // const [text, setText] = useState("");
    const [easeResult, setEaseResult] = useState(100);
    


    function handleTextareaChange(event: { target: { value: React.SetStateAction<string>; }; }){
        // setText(event.target.value)
        setEaseResult(ReadingEase.fleschReadingEaseBR(event.target.value).result)
        // console.log(ReadingEase.fleschReadingEaseBR(event.target.value));
    }
    function base100ToSlideBarSize(value: number) : number {
        return 11 + (value * 2.7);
    }
    function easeResultToExample(value: number) : string {
        const fred = ReadingEase.fred(value)
        if(fred===0) return "um estudante universitário";
        if(fred===1) return "um estudante do ensino médio"
        if(fred===2) return "um estudante do 6º ao 9º ano"
        return "um estudante do 1º a 5º ano"
    }

    return (
        <div id="home">
            <Container className="content">
                <Row className="justify-content-center">
                    <Col className="col" lg={9}>
                        <div className="top">
                            <h1>
                                Teste de leitura
                            </h1>
                            <p>
                                Digite o seu texto abaixo e descubra, em tempo real, o <span>nível de leitura</span>.
                            </p>
                        </div>
                        <div className="textarea">
                            <textarea  id="rd_text" onChange={handleTextareaChange} placeholder="Escreva seu texto aqui...">    
                            </textarea>
                        </div>
                    </Col>
                </Row>
            </Container>

            <aside className="rd_result">
                <p>
                    Seu texto está no nível de leitura de <span id="rd_exmlp">{easeResultToExample(easeResult)}</span>
                </p>
                <div className="ease_bar">
                    <div className="slider" style={{left: `${base100ToSlideBarSize(easeResult)}px`}}></div>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
                <ul>
                        <li>Muito<br/><span>fácil</span></li>
                        <li>Médio</li>
                        <li>Muito<br/><span>difícil</span></li>
                    </ul>
            </aside>
        </div>
    )
}