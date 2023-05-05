import React, { useCallback, useEffect } from "react";
import { Grid } from "@mui/material";
import cx from "classnames";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useImportExternalPage } from "../../hooks/useImportExternalPage";
import styles from "./styles.module.scss";
import ResultBox from "../../components/ResultBox";
import useModal from "../../hooks/useModal";
import TextEditor from "../../components/TextEditor";

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
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item xs={12} md={10} lg={8} className={
          cx(
            styles.content,
            styles.left
          )
        }>
          <div className={styles.textarea}>
            <TextEditor html={pageContent} />
          </div>
        </Grid>

        <Grid item xs={11} sm={8} md={10} lg={3} className={
          cx(
            styles.content,
            styles.right
          )
        }>
          <aside>
            <ResultBox onImportPage={handleImportClick} />
          </aside>
        </Grid>
      </Grid>

      {loading && (
        <div className={styles.loading}>
          <AiOutlineLoading3Quarters />
        </div>
      )}
    </>
  );
};

export default Editor;
