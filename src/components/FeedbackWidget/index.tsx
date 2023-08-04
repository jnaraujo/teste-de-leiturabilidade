import { MessageSquarePlus } from "lucide-react";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const FeedbackModal = dynamic(() => import("./FeedbackModal"));
const Tooltip = dynamic(() => import("@/components/Tooltip"), {});

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
          <MessageSquarePlus />
        </button>
      </Tooltip>
      <FeedbackModal onClose={handleModal} open={openModal} />
    </>
  );
};

export default FeedbackWidget;
