import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { MdFeedback } from "react-icons/md";
const FeedbackModal = dynamic(() => import("./FeedbackModal"));

import styles from "./styles.module.scss";
import Tooltip from "../Tooltip";

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
      <Tooltip text="Deixe seu Feedback!" placement="top">
        <button className={styles.widget} onClick={handleModal}>
          <MdFeedback />
        </button>
      </Tooltip>
      <FeedbackModal onClose={handleModal} open={openModal} />
    </>
  );
};

export default FeedbackWidget;
