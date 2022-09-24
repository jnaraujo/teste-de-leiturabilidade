import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useImportExternalPage } from "../../hooks/useImportExternalPage";
import { Container, Content, LoadingDiv } from "./styles";
import ResultBox from "../../components/ResultBox";
import TextEditor from "../../components/TextEditor";
import useModal from "../../hooks/useModal";

const Editor: React.FC = () => {
  const { showModal } = useModal();

  const [isLoading, setLoading] = useState(false);
  const { fetch, data, error } = useImportExternalPage();
  const [editorHtml, setEditorHtml] = useState("");

  const handleImportClick = useCallback((value: string) => {
    if (value) {
      setLoading(true);
      fetch(value);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setEditorHtml(data);
    }
    setLoading(false);
  }, [data]);

  useEffect(() => {
    if (error) {
      showModal({
        title: error.title,
        message: error.message,
      });
      setLoading(false);
    }
  }, [error]);

  return (
    <>
      <Container container justifyContent="center">
        <Content item xs={11} md={8} className="left">
          <div className="textarea">
            <TextEditor html={editorHtml} />
          </div>
        </Content>

        <Content item xs={11} md={8} lg={3}>
          <ResultBox onImportPage={handleImportClick} />
        </Content>
      </Container>

      {isLoading && (
        <LoadingDiv>
          <AiOutlineLoading3Quarters />
        </LoadingDiv>
      )}
    </>
  );
};

export default Editor;
