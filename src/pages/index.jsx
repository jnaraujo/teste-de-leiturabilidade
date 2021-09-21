import './../styles/Home.scss';
import { Container, Row, Col } from 'react-bootstrap';

import React, { useRef, useState, useEffect } from "react";

import { Helmet } from 'react-helmet';

import * as ReadingEase from './../script/ReadingEase'

import ReactGA from 'react-ga';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';

export default function Home(){
    const [easeResult, setEaseResult] = useState({});
    const [sliderSize, setSliderSize] = useState(0);
    const [easeExample, setEaseExample] = useState("");
    const [userText, setUserText] = useState("");
    const sliderRef = useRef(null)

    const [cookies, setCookie] = useCookies(['cookie-name']);

    function handleTextareaChange(event){
        const tFR = ReadingEase.fleschReadingEaseBR(event.target.value || "a")

        localStorage.setItem("text", event.target.value);

        setEaseResult(tFR)
        setSliderSize(base100ToSlideBarSize(tFR.result))
        setEaseExample(easeResultToExample(tFR.result))
    }
    function base100ToSlideBarSize(value) {
        const sliderWidth = sliderRef.current ? sliderRef.current.offsetWidth : 254
        const formula = value * ((sliderWidth)/100);
        return Math.max(Math.min(formula, sliderWidth), 5);
    }
    function easeResultToExample(value){
        const fred = ReadingEase.fred(value)
        if(fred===0) return "um estudante universitário";
        if(fred===1) return "um estudante do ensino médio"
        if(fred===2) return "um estudante do 6º ao 9º ano"
        return "um estudante do 1º ao 5º ano"
    }

    useEffect(()=>{
        ReactGA.initialize('G-EP96Z0HGF0');
        ReactGA.pageview(window.location.pathname + window.location.search);

        setUserText(localStorage.getItem("text") ?? "")

        handleTextareaChange({
            target: {
                value: localStorage.getItem("text") || ""
            }
        })
        
        if(!cookies.toastedInfo){
            toast.info('Ei! Sabia que seu texto é automaticamente salvo no seu navegador?', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setCookie("toastedInfo", true,  {
                maxAge: 24 * 60 * 60
            })
        }else{
            toast.info('Seu texto foi automaticamente carregado!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        window.onresize = ()=>{
            setSliderSize(base100ToSlideBarSize(easeResult["result"]));
        }

    }, [])

    return (
        <div id="home">
            <Helmet>
                <title>Jônatas Araujo - Webdev, development and design</title>
                <meta name="description" content={"Saiba em tempo real e de graça o quão fácil de ser lido seu texto é."} />
                <meta name="keywords" content="leitura, facilidade, texto, flesch, kincaid, blog, leiturabilidade"></meta>
            </Helmet>
            <Container fluid className="content">
                <Row className="justify-content-center">
                    <Col className="col" lg={8} xl={6}>
                        <div className="top">
                            <h1>
                                Teste de leitura
                            </h1>
                            <p>
                                Digite o seu texto abaixo e descubra, em tempo real, o <span>nível de leitura</span>.
                            </p>
                        </div>
                        <div className="textarea">
                            <textarea  id="rd_text" onChange={handleTextareaChange} placeholder="Escreva seu texto aqui..." defaultValue={userText}>
                            </textarea>
                        </div>
                    </Col>
                    <aside className="rd_result">
                        <p>
                            Seu texto está no nível de leitura de <span id="rd_exmlp">{easeExample}.</span>
                        </p>
                        <div className="ease_bar">
                            <div className="slider" style={{left: `${sliderSize}px`}}></div>
                            <Container fluid className="cont">
                                <Row ref={sliderRef}>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                            </Container>
                        </div>
                        <ul>
                            <li>Muito<br/><span>difícil</span></li>
                            <li>Médio</li>
                            <li>Muito<br/><span>fácil</span></li>
                        </ul>
                        <p>
                            <br />
                            <strong style={{
                                fontSize: "20px"
                            }}>Mais sobre seu texto:</strong><br />
                            Número de palavras: <strong>{easeResult.totalWords}</strong><br />
                            Número de frases: <strong>{easeResult.nTotalSentences}</strong><br />
                        </p>
                    </aside>
                </Row>
            </Container>
            <ToastContainer position="top-left" hideProgressBar={false} draggable={true} autoClose={1000} pauseOnHover={false} pauseOnFocusLoss={false} />
            <div className="infos">
                <Container>
                    <Row className='justify-content-center'>
                        <Col className="line col-12"></Col>
                        <Col lg={10} className="texts">
                            <h2>Como funciona o teste?</h2>
                            <p>
                                Para testar o nível de leitura de um texto, nós utilizamos o <a href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests" target="_blank" rel="noreferrer">Teste de Legibilidade de Flesch-Kincaid</a> (artigo da Wikipedia em inglês).
                            </p>
                            <p>
                                O teste original foi feito para a língua inglesa. Porém, a fórmula foi adaptada para a língua portuguesa em 1996 pelos pesquisadores Teresa B. F. Martins, Claudete M. Ghiraldelo, M. Graças V. Nunes e Osvaldo N. Oliveira Jr., do Instituto de Ciências Matemáticas e de Computação da USP de São Carlos;
                            </p>

                            <h2>
                                O que o teste leva em conta?
                            </h2>
                            <p>
                                Tanto a versão original do <strong>Teste de Flesch-Kincaid</strong> quando a versão brasileira levam em conta o <strong>tamanho da frase</strong> e o <strong>tamanho das palavras</strong>: quanto maior, mais difícil de ler.
                            </p>

                            <h2>
                                Quão preciso é o teste?
                            </h2>
                            <p>
                                A versão original do <strong>Teste de Flesch-Kincaid</strong> precisão de quase 90% - o que, para uso comum, é um valor bastante considerável.
                            </p>

                            <h3>
                                Quer saber mais? Dá uma olhada nas fontes:
                            </h3>

                            <ul>
                                <li>
                                    <a href="http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf" target="_blank" rel="noreferrer">http://www.ufrgs.br/textecc/acessibilidade/files/Índices-de-Leiturabilidade.pdf</a>
                                </li>
                                <li>
                                    <a href="https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='justify-content-center'>
                        <Col className="line col-12"></Col>
                        <Col className="footer">
                            Feito por <a href='https://jnaraujo.vercel.app/' target="_blank" rel="noreferrer">Jônatas Araujo</a> - 2021
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}