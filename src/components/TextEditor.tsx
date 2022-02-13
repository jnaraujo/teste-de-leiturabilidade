import { useRef, useEffect } from "react";

import styled from "styled-components";

const EditorDiv = styled.div`
    font-family: 'Merriweather', serif;
    font-size: 16px;
    font-weight: 400;
    color: $black;
    line-height: 1.75;

    width: 99% !important;

    height: 70vh;

    background-color: transparent;
    overflow: hidden;
    overflow-y: visible;
    resize: none;
    border: none;

    padding: 0 16px 0 0;

    figure{
        div{
            margin: 0 !important;
            padding: 0 !important;
        }
    }

    img, figure{
        width: 90% !important;
        height: auto;
        margin: 0 auto !important;
        padding: 0 !important;
    }
    &:focus{
        outline: none !important;
        border: none;
    }
    &::-webkit-scrollbar{
        width: 10px;
    }
    &::-webkit-scrollbar-track{
        background: #f1f1f1; 
    }
    &::-webkit-scrollbar-thumb{
        background: #888; 
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
        cursor: pointer; 
    }
    @media (min-width: 1200px) {
        font-size: 18px;
        padding-bottom: 0;
        border: none;
    }
`
type ComponentPropsType = {
    className?: string,

    onChange?: ({} : {
        html: string,
        text: string
    }) => void,
    html: string
}

export default function Component(props: ComponentPropsType) {
    const editorRef = useRef(null);
    function handleEditorChange(){
        if(props.onChange){
            props.onChange({
                html: editorRef.current.innerHTML,
                text: editorRef.current.innerText
            });
        }
    }
    useEffect(() => {
        if(props.onChange && editorRef.current.innerText != ""){
            props.onChange({
                html: editorRef.current.innerHTML,
                text: editorRef.current.innerText
            });
        }
    }, [props.html]);
    
    return (<EditorDiv dangerouslySetInnerHTML={{
        __html: props.html
    }} contentEditable={true} ref={editorRef} onInput={handleEditorChange} className={props.className ? props.className : ""} />)
}