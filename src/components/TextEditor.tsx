import { useRef, useEffect } from "react";

// import styled from "styled-components";

import * as ReadingEase from './../libs/readability/ReadingEase';


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
            // let editorDataHtml = "";
            // const editorLines = editorRef.current.innerText.replace(/<\/?(div)[^>]*>/g, "<xxxxxx>").split('<xxxxxx>').filter(line=> line && line!="<br>");
            // const editorLines = editorRef.current.innerText.replace(/\n/g, "<xxxxxx>").split('<xxxxxx>');

            // for(let i = 0; i < editorLines.length; i++){
            //     const line = editorLines[i];
            //     // const linePoints = line.split(".");
            //     // console.log(linePoints);
                
            //     // let thisLine = "";

            //     // for(let phrase of linePoints){
            //     //     const phraseReadingEase = ReadingEase.fleschReadingEaseBR(phrase).result;
            //     //     let color = "";

            //     //     if(phraseReadingEase < 20){
            //     //         color = "#BD2323"
            //     //     }else if(phraseReadingEase < 40){
            //     //         color = "#E56D6D"
            //     //     }else if(phraseReadingEase < 60){
            //     //         color = "#FFF4F4"
            //     //     }else if(phraseReadingEase < 80){
            //     //         color = "#C3FFCD"
            //     //     }else{
            //     //         color = "#97FBA7"
            //     //     }

            //     //     color = "white"
            //     //     if(linePoints.length > 1){
            //     //         thisLine += `<span style="background-color: ${color}">${phrase}.</span>`
            //     //     }else{
            //     //         thisLine += `<span style="background-color: ${color}">${phrase}</span>`
            //     //     }
            //     // }
                
            //     if(event && window){
            //         const selection = window.getSelection();

            //         var range = document.createRange();

            //         // range.selectNodeContents(editorRef.current);
                    

            //         let anchorOffset = selection.anchorOffset;
            //         let focusNode = selection.focusNode as any;

            //         editorRef.current.focus();
            //         // range.setStart(editorRef.current, anchorOffset);
            //         // console.log(anchorOffset);

            //         // const child = editorRef.current.childNodes.find(node=> node.id == focusNode?.id)
            //         const child = Array.from(editorRef.current.childNodes).find((node : any)=> node == focusNode)
                    
            //     }
                
            //     const phraseReadingEase = ReadingEase.fleschReadingEaseBR(line).result;
            //     let color = "";
            //     if(phraseReadingEase < 20){
            //         color = "#BD2323"
            //     }else if(phraseReadingEase < 40){
            //         color = "#E56D6D"
            //     }else if(phraseReadingEase < 60){
            //         color = "#FFF4F4"
            //     }else if(phraseReadingEase < 80){
            //         color = "#C3FFCD"
            //     }else{
            //         color = "#97FBA7"
            //     }
            //     editorDataHtml += `<div style="background-color: ${color}">${line}</div>`;
            // }

            // editorRef.current.innerHTML = editorDataHtml;

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
    
    return (
        <>
        {/* <EditorDiv placeholder="Digite teu texto..." dangerouslySetInnerHTML={{
        __html: props.html
        }} contentEditable={true} ref={editorRef} onInput={handleEditorChange} className={props.className ? props.className : ""} /> */}
        <div placeholder="Digite teu texto..." dangerouslySetInnerHTML={{
        __html: props.html
        }} contentEditable={true} ref={editorRef} onInput={handleEditorChange} className={"texteditor "+props.className ? props.className : ""}></div>

        <style jsx>{`
        div {
            font-family: 'Merriweather', serif;
            font-size: 16px;
            font-weight: 400;
            color: $black;
            line-height: 1.75;

            width: 99% !important;
            min-width: 300px;

            height: 70vh;

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