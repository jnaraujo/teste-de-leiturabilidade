import { useRef, useEffect } from "react";

// import styled from "styled-components";
import dynamic from 'next/dynamic';

// import * as ReadingEase from './../libs/readability/ReadingEase';

// const EditorDiv = styled.div`
//     font-family: 'Merriweather', serif;
//     font-size: 16px;
//     font-weight: 400;
//     color: $black;
//     line-height: 1.75;

//     width: 99% !important;
//     min-width: 300px;

//     height: 70vh;

//     background-color: transparent;
//     overflow: hidden;
//     overflow-y: visible;
//     resize: none;
//     border: none;

//     padding: 0 16px 0 0;

//     figure{
//         div{
//             margin: 0 !important;
//             padding: 0 !important;
//         }
//     }

//     img, figure{
//         width: 90% !important;
//         height: auto;
//         margin: 0 auto !important;
//         padding: 0 !important;
//     }
//     &:focus{
//         outline: none !important;
//         border: none;
//     }
//     &::-webkit-scrollbar{
//         width: 10px;
//     }
//     &::-webkit-scrollbar-track{
//         background: #f1f1f1; 
//     }
//     &::-webkit-scrollbar-thumb{
//         background: #888; 
//     }
//     &::-webkit-scrollbar-thumb:hover {
//         background: #555; 
//         cursor: pointer; 
//     }
//     @media (min-width: 1200px) {
//         font-size: 18px;
//         padding-bottom: 0;
//         border: none;
//     }
//     &:empty:before {
//         content: attr(placeholder);
//         position: absolute;
//         color: gray;
//         background-color: transparent;
//     }
// `

type OnChangePropsType = {
    html: string,
    text: string,
    ease: {
        indiceDeFacilidade: number,
        exemploDoIndice: string,
        text: {
            totalSyllables: number,
            totalWords: number,
            totalSentences: number,
        }
    }
}
type ComponentPropsType = {
    className?: string,

    onChange?: ({} : OnChangePropsType) => void,
    html: string
}

const ReadingEase = {
    fred: (value) => {
        return 4;
    },
    fredToText: (value) => {
        return "wow test"
    },
    fleschReadingEaseBR: (value) => {
        return {
            totalWords: 12,
            nTotalSentences: 5,
            totalSyllables: 24,
            result: 56
        }
    }
}

function easeResultToExample(value){
    const fred = ReadingEase.fred(value)
    if(fred===0) return "um estudante universitário";
    if(fred===1) return "um estudante do ensino médio"
    if(fred===2) return "um estudante do 6º ao 9º ano"
    return "um estudante do 1º ao 5º ano"
}

export default function Component(props: ComponentPropsType) {
    const editorRef = useRef(null);

    function handleEditorChange(){
        if(props.onChange && editorRef.current.innerText != ""){
            let onChangeData: OnChangePropsType = {
                html: editorRef.current.innerHTML,
                text: editorRef.current.innerText,
                ease: {
                    indiceDeFacilidade: 0,
                    exemploDoIndice: "",
                    text: {
                        totalSyllables: 0,
                        totalWords: 0,
                        totalSentences: 0,
                    }
                }
            }

            const textAnalyses = ReadingEase.fleschReadingEaseBR(onChangeData.text)
            
            onChangeData.ease.text = {
                totalSyllables: textAnalyses.totalSyllables,
                totalWords: textAnalyses.totalWords,
                totalSentences: textAnalyses.nTotalSentences
            }
            onChangeData.ease.exemploDoIndice = easeResultToExample(ReadingEase.fred(onChangeData.text));
            onChangeData.ease.indiceDeFacilidade = textAnalyses.result;

            props.onChange(onChangeData);
        }
    }
    useEffect(() => {
        handleEditorChange();
    }, [props.html]);

    // {/* <EditorDiv placeholder="Digite teu texto..." dangerouslySetInnerHTML={{
    //     __html: props.html
    //     }} contentEditable={true} ref={editorRef} onInput={handleEditorChange} className={props.className ? props.className : ""} /> */}
    // dangerouslySetInnerHTML={{ __html: props.html }}
    return (
        <>
        <div placeholder="Digite teu texto..." dangerouslySetInnerHTML={{ __html: props.html}}  contentEditable={true} ref={editorRef} onInput={handleEditorChange} className={"texteditor "+props.className ? props.className : ""}>
        </div>
        <style jsx>{`
            div {
                font-family: 'Merriweather', serif;
                font-size: 16px;
                font-weight: 400;
                color: $black;
                line-height: 1.75;

                width: 300px;
                min-width: 99% !important;
                

                min-height: 70vh;
                height: 500px;

                background-color: transparent;
                overflow: hidden;
                overflow-y: visible;
                resize: none;
                border: none;

                padding: 0 16px 0 0;
            }
            div figure div{
                margin: 0 !important;
                padding: 0 !important;
            }

            div img, div figure{
                width: 90% !important;
                height: auto;
                margin: 0 auto !important;
                padding: 0 !important;
            }
            div:focus{
                outline: none !important;
                border: none;
            }
            div::-webkit-scrollbar{
                width: 10px;
            }
            div::-webkit-scrollbar-track{
                background: #f1f1f1; 
            }
            div::-webkit-scrollbar-thumb{
                background: #888; 
            }
            div::-webkit-scrollbar-thumb:hover {
                background: #555; 
                cursor: pointer; 
            }
            @media (min-width: 1200px) {
                div{
                    font-size: 18px;
                    padding-bottom: 0;
                    border: none;
                }
            }
            div:empty:before {
                content: attr(placeholder);
                position: absolute;
                color: gray;
                background-color: transparent;
            }
        `}</style>
        </>
    )
}