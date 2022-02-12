import { forwardRef } from "react";

export default function Component(props: {
    className: string;
    userText: string;
    onChange: any;
    ref: any;
}){
    const editorRef = forwardRef(props.ref);
    return (
        <>
            <div className={props.className} contentEditable={true} dangerouslySetInnerHTML={{
                __html: props.userText
              }}
              onInput={
                props.onChange
              } ref={editorRef}></div>
        </>
    )
}