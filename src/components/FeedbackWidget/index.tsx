import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { MdFeedback } from "react-icons/md";
const FeedbackModal = dynamic(() => import("./FeedbackModal"));
const Tooltip = dynamic(() => import("@mui/material/Tooltip"));

import styles from "./styles.module.scss";

const FeedbackWidget: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "unset";
  }, [openModal]);

  return (
    <>
      <Tooltip title="Deixe seu Feedback!" placement="top">
        <button className={styles.widget} onClick={handleModal}>
          <MdFeedback />
        </button>
      </Tooltip>
      <FeedbackModal onClose={handleModal} open={openModal} />
    </>
  );
};

export default FeedbackWidget;
