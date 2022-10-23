import React, { useCallback, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import dynamic from "next/dynamic";
import { useImportExternalPage } from "../../hooks/useImportExternalPage";
import { Container, Content, LoadingDiv } from "./styles";
import ResultBox from "../../components/ResultBox";
import useModal from "../../hooks/useModal";
// import TextEditor from "../../components/TextEditor";
const TextEditor = dynamic(() => import("../../components/TextEditor"), {
  ssr: false,
  loading() {
    return <div>Carregando o editor...</div>;
  },
});

const Editor: React.FC = () => {
  const { showModal } = useModal();

  const { fetch, data: pageContent, error, loading } = useImportExternalPage();

  const handleImportClick = useCallback((value: string) => {
    if (value) {
      fetch(value);
    }
  }, []);

  useEffect(() => {
    if (error) {
      showModal({
        title: error.title,
        message: error.message,
      });
    }
  }, [error]);

  return (
    <>
      <Container container justifyContent="center">
        <Content item xs={11} md={8} className="left">
          <div className="textarea">
            <TextEditor html={pageContent} />
          </div>
        </Content>

        <Content item xs={11} md={8} lg={3}>
          <ResultBox onImportPage={handleImportClick} />
        </Content>
      </Container>

      {loading && (
        <LoadingDiv>
          <AiOutlineLoading3Quarters />
        </LoadingDiv>
      )}
    </>
  );
};

export default Editor;
